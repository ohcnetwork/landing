import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
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

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        content: marked(content) as string,
        publishedAt: data.publishedAt || data.date || '',
        author: data.author,
        categories: data.categories || [],
        mainImage: data.mainImage,
        featured: data.featured || false,
      }
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

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: marked(content) as string,
      publishedAt: data.publishedAt || data.date || '',
      author: data.author,
      categories: data.categories || [],
      mainImage: data.mainImage,
      featured: data.featured || false,
    }
  } catch {
    return null
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
