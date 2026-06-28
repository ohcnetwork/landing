import fs from 'fs'
import matter from 'gray-matter'
import { Renderer, marked, type Tokens } from 'marked'
import path from 'path'

export interface BlogHeading {
  id: string
  text: string
  level: number
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  headings?: BlogHeading[]
  readingTime?: number
  author?: {
    name: string
    image?: string
  }
  categories?: Array<{
    title: string
    slug: string
  }>
  mainImage?: {
    src: string
    alt: string
  }
  featured?: boolean
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

function createHeadingIdGenerator() {
  const counts = new Map<string, number>()

  return (value: string) => {
    const base =
      value
        .toLowerCase()
        .replace(/&[a-z]+;/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'section'
    const count = counts.get(base) || 0
    counts.set(base, count + 1)

    return count === 0 ? base : `${base}-${count + 1}`
  }
}

function normalizePublishedAt(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString()
  }

  return typeof value === 'string' ? value : ''
}

function stripMarkdown(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .trim()
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim()
}

function extractHeadings(markdown: string): BlogHeading[] {
  const createId = createHeadingIdGenerator()
  const headings: BlogHeading[] = []
  const headingPattern = /^(#{2,3})\s+(.+)$/gm
  let match: RegExpExecArray | null

  while ((match = headingPattern.exec(markdown)) !== null) {
    const text = stripMarkdown(match[2])
    headings.push({
      id: createId(text),
      text,
      level: match[1].length,
    })
  }

  return headings
}

function renderMarkdown(markdown: string): string {
  const createId = createHeadingIdGenerator()
  const renderer = new Renderer()

  renderer.heading = function ({ tokens, depth }: Tokens.Heading) {
    const html = this.parser.parseInline(tokens)
    const id = createId(stripHtml(html))

    return `<h${depth} id="${id}">${html}</h${depth}>\n`
  }

  return marked(markdown, { renderer }) as string
}

function getReadingTime(markdown: string): number {
  const words = stripMarkdown(markdown).split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.ceil(words / 190))
}

function getCoverImage(
  slug: string,
  title: string,
  data: matter.GrayMatterFile<string>['data'],
) {
  return (
    data.mainImage || {
      src: `/blog/covers/${slug}.svg`,
      alt: `${title} cover illustration`,
    }
  )
}

function buildPost(
  slug: string,
  data: matter.GrayMatterFile<string>['data'],
  content: string,
): BlogPost {
  const title = data.title || ''

  return {
    slug,
    title,
    excerpt: data.excerpt || '',
    content: renderMarkdown(content),
    publishedAt: normalizePublishedAt(data.publishedAt || data.date),
    headings: extractHeadings(content),
    readingTime: getReadingTime(content),
    author: data.author,
    categories: data.categories || [],
    mainImage: getCoverImage(slug, title, data),
    featured: data.featured || false,
  }
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return buildPost(slug, data, content)
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )

  return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return buildPost(slug, data, content)
  } catch {
    return null
  }
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts()
  const index = posts.findIndex((post) => post.slug === slug)

  return {
    newerPost: index > 0 ? posts[index - 1] : null,
    olderPost: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  }
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.categories?.some((cat) => cat.slug === category),
  )
}

export function getAllCategories() {
  const posts = getAllPosts()
  const categoryMap = new Map<
    string,
    { title: string; slug: string; count: number }
  >()

  posts.forEach((post) => {
    post.categories?.forEach((category) => {
      const existing = categoryMap.get(category.slug)
      if (existing) {
        existing.count++
      } else {
        categoryMap.set(category.slug, {
          title: category.title,
          slug: category.slug,
          count: 1,
        })
      }
    })
  })

  return Array.from(categoryMap.values()).sort((a, b) => b.count - a.count)
}

export function getPostsCount(category?: string): number {
  if (category) {
    return getPostsByCategory(category).length
  }
  return getAllPosts().length
}

export function getPostsPaginated(
  page: number,
  limit: number,
  category?: string,
) {
  const posts = category ? getPostsByCategory(category) : getAllPosts()
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return posts.slice(startIndex, endIndex)
}
