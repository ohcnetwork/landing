import matter from 'gray-matter'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import test from 'node:test'
import {
  blogArchiveUrl,
  filterBlogPosts,
  parseBlogQuery,
} from '../src/lib/blog-filters.ts'

const posts = [
  { publishedAt: '2026-05-01', categories: [{ slug: 'care' }] },
  { publishedAt: '2026-05-31T23:59:59Z', categories: [{ slug: 'ai' }] },
  { publishedAt: '2025-05-01', categories: [{ slug: 'care' }] },
  { publishedAt: '2026-06-01', categories: [{ slug: 'care' }] },
  { publishedAt: '2026-05-15' },
]

test('all posts, theme alone, month alone, and their intersection', () => {
  assert.deepEqual(filterBlogPosts(posts, {}), posts)
  assert.deepEqual(filterBlogPosts(posts, { category: 'care' }), [
    posts[0],
    posts[2],
    posts[3],
  ])
  assert.deepEqual(filterBlogPosts(posts, { month: '2026-05' }), [
    posts[0],
    posts[1],
    posts[4],
  ])
  assert.deepEqual(
    filterBlogPosts(posts, { category: 'care', month: '2026-05' }),
    [posts[0]],
  )
  assert.deepEqual(
    filterBlogPosts(posts, { category: 'ai', month: '2025-05' }),
    [],
  )
  assert.deepEqual(filterBlogPosts(posts, { category: 'unknown' }), [])
})

test('filtering the full set before pagination finds matches after page one', () => {
  const allPosts = [
    ...Array.from({ length: 31 }, () => posts[1]),
    ...Array.from({ length: 32 }, () => posts[0]),
  ]
  const matches = filterBlogPosts(allPosts, {
    category: 'care',
    month: '2026-05',
  })
  assert.equal(matches.length, 32)
  assert.equal(matches.slice(0, 30).length, 30)
  assert.equal(matches.slice(30, 60).length, 2)
})

test('URLs retain both filters for pagination and reset the page on changes', () => {
  assert.equal(
    blogArchiveUrl({ category: 'care', month: '2026-05' }, 2),
    '/blog?category=care&month=2026-05&page=2#archive',
  )
  assert.equal(
    blogArchiveUrl({ month: '2026-05' }),
    '/blog?month=2026-05#archive',
  )
  assert.equal(
    blogArchiveUrl({ category: 'care' }),
    '/blog?category=care#archive',
  )
  assert.equal(blogArchiveUrl(), '/blog#archive')
  assert.equal(
    blogArchiveUrl({ category: 'care & ai' }),
    '/blog?category=care+%26+ai#archive',
  )
})

test('query parsing handles repeated parameters and rejects invalid months/pages', () => {
  assert.deepEqual(parseBlogQuery({}), {
    page: 1,
    category: undefined,
    month: undefined,
  })
  assert.deepEqual(
    parseBlogQuery({
      page: ['2', '3'],
      category: ['care', 'ai'],
      month: ['2026-05', '2025-05'],
    }),
    { page: 2, category: 'care', month: '2026-05' },
  )
  for (const month of ['2026-00', '2026-13', '2026-5', 'invalid']) {
    assert.equal(parseBlogQuery({ month }).month, undefined)
  }
  for (const page of [
    '0',
    '-1',
    '1.5',
    'NaN',
    'Infinity',
    '9007199254740992',
  ]) {
    assert.equal(parseBlogQuery({ page }).page, 1)
  }
})

test('every real archive theme/month pair agrees with the publication data', () => {
  const directory = new URL('../content/blog/', import.meta.url)
  const archive = readdirSync(directory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const { data } = matter(readFileSync(new URL(name, directory), 'utf8'))
      const date = data.publishedAt || data.date
      return {
        publishedAt: date instanceof Date ? date.toISOString() : date,
        categories: data.categories || [],
      }
    })
  const months = new Set(archive.map((post) => post.publishedAt.slice(0, 7)))
  const categories = new Set(
    archive.flatMap((post) => post.categories.map((tag) => tag.slug)),
  )
  for (const category of categories) {
    for (const month of months) {
      const expected = archive.filter(
        (post) =>
          post.publishedAt.startsWith(`${month}-`) &&
          post.categories.some((tag) => tag.slug === category),
      )
      assert.deepEqual(filterBlogPosts(archive, { category, month }), expected)
    }
  }
})
