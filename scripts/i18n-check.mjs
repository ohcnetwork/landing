#!/usr/bin/env node
/**
 * Validates message catalogs in src/messages/.
 *
 * - Every message (English included) must be valid ICU MessageFormat.
 * - Each translation must mirror English: same namespaces, keys and array
 *   lengths, and the same {placeholders} and <tags> in every message.
 * - Messages identical to English are reported as possibly untranslated.
 *
 * Usage: node scripts/i18n-check.mjs [--locale pt] [--verbose]
 */
import { parse } from '@formatjs/icu-messageformat-parser'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const messagesDir = path.join(root, 'src/messages')
const args = process.argv.slice(2)
const verbose = args.includes('--verbose')
const onlyLocale = args.includes('--locale')
  ? args[args.indexOf('--locale') + 1]
  : null

const namespaces = fs
  .readdirSync(path.join(messagesDir, 'en'))
  .filter((file) => file.endsWith('.json'))
  .map((file) => file.slice(0, -'.json'.length))
  .sort()

const locales = fs
  .readdirSync(messagesDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== 'en')
  .map((entry) => entry.name)
  .filter((locale) => !onlyLocale || locale === onlyLocale)

let errorCount = 0

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function syntaxProblem(message) {
  try {
    parse(message)
    return null
  } catch (error) {
    return error.message
  }
}

/** Placeholder names and tag names used by a message, as a sorted signature. */
function signature(message) {
  const args = [...message.matchAll(/\{\s*([A-Za-z0-9_]+)\s*[,}]/g)].map(
    (match) => `{${match[1]}}`,
  )
  const tags = [...message.matchAll(/<\/?([A-Za-z0-9_]+)>/g)].map(
    (match) => match[0],
  )
  return [...args, ...tags].sort().join(' ')
}

function walk(base, other, keyPath, visit) {
  if (typeof base === 'string') {
    visit(keyPath, base, other)
  } else if (Array.isArray(base)) {
    base.forEach((item, index) =>
      walk(item, other?.[index], `${keyPath}[${index}]`, visit),
    )
    if (Array.isArray(other) && other.length !== base.length) {
      visit(keyPath, base, other, 'length')
    }
  } else if (base && typeof base === 'object') {
    for (const [key, value] of Object.entries(base)) {
      walk(value, other?.[key], keyPath ? `${keyPath}.${key}` : key, visit)
    }
  }
}

function extraKeys(base, other, keyPath = '') {
  if (!other || typeof other !== 'object' || Array.isArray(other)) return []
  if (!base || typeof base !== 'object') return []
  return Object.keys(other).flatMap((key) => {
    const next = keyPath ? `${keyPath}.${key}` : key
    return key in base ? extraKeys(base[key], other[key], next) : [next]
  })
}

function report(label, errors, warnings) {
  if (errors.length === 0 && warnings.length === 0) return
  console.log(`\n${label}`)
  for (const error of errors) console.log(`  ✗ ${error}`)
  for (const warning of warnings) console.log(`  ! ${warning}`)
}

// English must be valid ICU on its own.
for (const namespace of namespaces) {
  const errors = []
  walk(
    readJson(path.join(messagesDir, 'en', `${namespace}.json`)),
    null,
    '',
    (key, message) => {
      const problem = syntaxProblem(message)
      if (problem) errors.push(`${key}: invalid ICU message (${problem})`)
    },
  )
  errorCount += errors.length
  report(`en/${namespace}.json`, errors, [])
}

for (const locale of locales) {
  let missingFiles = 0
  let untranslated = 0
  let total = 0

  for (const namespace of namespaces) {
    const base = readJson(path.join(messagesDir, 'en', `${namespace}.json`))
    const file = path.join(messagesDir, locale, `${namespace}.json`)
    if (!fs.existsSync(file)) {
      missingFiles++
      continue
    }

    let translated
    try {
      translated = readJson(file)
    } catch (error) {
      errorCount++
      report(
        `${locale}/${namespace}.json`,
        [`invalid JSON: ${error.message}`],
        [],
      )
      continue
    }

    const errors = []
    const warnings = []
    walk(base, translated, '', (key, english, value, kind) => {
      if (kind === 'length') {
        errors.push(
          `${key}: has ${value.length} items, English has ${english.length}`,
        )
        return
      }
      total++
      if (value === undefined || value === '') {
        errors.push(`${key}: missing`)
        return
      }
      if (typeof value !== 'string') {
        errors.push(`${key}: expected a string`)
        return
      }
      const problem = syntaxProblem(value)
      if (problem) errors.push(`${key}: invalid ICU message (${problem})`)
      if (signature(value) !== signature(english)) {
        errors.push(
          `${key}: placeholders/tags differ (English: "${signature(english)}", ${locale}: "${signature(value)}")`,
        )
      }
      if (value === english && /[a-z]{3}/.test(english)) {
        untranslated++
        if (verbose) warnings.push(`${key}: same as English`)
      }
    })
    for (const key of extraKeys(base, translated)) {
      warnings.push(`${key}: not in English (ignored at runtime)`)
    }

    errorCount += errors.length
    report(`${locale}/${namespace}.json`, errors, warnings)
  }

  const translatedFiles = namespaces.length - missingFiles
  console.log(
    `\n${locale}: ${translatedFiles}/${namespaces.length} namespaces, ` +
      `${total} messages checked, ${untranslated} identical to English` +
      (missingFiles
        ? `, ${missingFiles} namespace files missing (English fallback)`
        : ''),
  )
}

if (errorCount > 0) {
  console.error(`\n${errorCount} error(s) found.`)
  process.exit(1)
}
console.log('\nMessage catalogs are valid.')
