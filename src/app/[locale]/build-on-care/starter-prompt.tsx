'use client'

import { Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'
import styles from './build-on-care.module.css'
import { starterPrompt } from './resources'

export type StarterPromptLabels = {
  label: string
  title: string
  body: string
  promptLabel: string
  copy: string
  copied: string
  helpIdle: string
  helpCopied: string
  helpManual: string
}

export function StarterPrompt({
  labels,
  promptLang,
}: {
  labels: StarterPromptLabels
  /** Language of the prompt text, set when it differs from the page. */
  promptLang?: string
}) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle')
  const promptRef = useRef<HTMLTextAreaElement>(null)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(starterPrompt)
      setStatus('copied')
    } catch {
      setStatus('manual')
      promptRef.current?.focus()
      promptRef.current?.select()
    }
  }

  return (
    <div className={styles.promptPanel}>
      <div className={styles.promptHeader}>
        <span className={styles.mono}>{labels.label}</span>
        <span className={styles.promptDot} aria-hidden="true" />
      </div>
      <div className={styles.promptBody}>
        <h3>{labels.title}</h3>
        <p>{labels.body}</p>
        <label htmlFor="starter-prompt" className={styles.mono}>
          {labels.promptLabel}
        </label>
        <textarea
          id="starter-prompt"
          ref={promptRef}
          readOnly
          value={starterPrompt}
          lang={promptLang}
          className={styles.promptText}
          spellCheck={false}
          aria-describedby="prompt-help"
        />
        <button
          type="button"
          className={styles.copyButton}
          onClick={copyPrompt}
        >
          {status === 'copied' ? (
            <Check size={17} aria-hidden="true" />
          ) : (
            <Copy size={17} aria-hidden="true" />
          )}
          {status === 'copied' ? labels.copied : labels.copy}
        </button>
        <p
          id="prompt-help"
          className={styles.promptHelp}
          role="status"
          aria-live="polite"
        >
          {status === 'manual'
            ? labels.helpManual
            : status === 'copied'
              ? labels.helpCopied
              : labels.helpIdle}
        </p>
      </div>
    </div>
  )
}
