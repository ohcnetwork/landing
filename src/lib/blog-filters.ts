import type { BlogPost } from './blog'

export interface BlogFilters {
  category?: string
  month?: string
}

export function parseBlogQuery(
  params: Record<string, string | string[] | undefined>,
) {
  const first = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value
  const category = first(params.category) || undefined
  const month = first(params.month)
  const page = Number(first(params.page) || 1)

  return {
    category,
    month: month && /^\d{4}-(0[1-9]|1[0-2])$/.test(month) ? month : undefined,
    page: Number.isSafeInteger(page) && page > 0 ? page : 1,
  }
}

export function blogArchiveUrl(
  { category, month }: BlogFilters = {},
  page = 1,
) {
  const params = new URLSearchParams()
  if (category) params.set('category', category)
  if (month) params.set('month', month)
  if (page > 1) params.set('page', String(page))

  return `/blog${params.size ? `?${params}` : ''}#archive`
}

export function filterBlogPosts<
  T extends Pick<BlogPost, 'categories' | 'publishedAt'>,
>(posts: T[], { category, month }: BlogFilters): T[] {
  return posts.filter(
    (post) =>
      (!category || post.categories?.some((tag) => tag.slug === category)) &&
      (!month || post.publishedAt.slice(0, 7) === month),
  )
}
