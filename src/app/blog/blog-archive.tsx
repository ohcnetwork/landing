'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import type { BlogPost } from '@/lib/blog'
import {
  blogArchiveUrl,
  filterBlogPosts,
  parseBlogQuery,
  type BlogFilters,
} from '@/lib/blog-filters'
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RssIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { useSearchParams } from 'next/navigation'

export type ArchivePost = Omit<BlogPost, 'content' | 'headings'>

interface ArchiveProps {
  allPosts: ArchivePost[]
  categories: Array<{ title: string; slug: string; count: number }>
}

const postsPerPage = 30

function FeaturedPosts({ posts }: { posts: ArchivePost[] }) {
  let featuredPosts = posts.filter((post) => post.featured).slice(0, 3)

  if (featuredPosts.length === 0) {
    return
  }

  return (
    <div className="mt-16 bg-linear-to-t from-[#f7f9f6] pb-14">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-medium tracking-normal">Featured</h2>
            <p className="mt-2 max-w-2xl text-sm/6 text-gray-600">
              Essays and field notes that frame the CARE platform as open
              healthcare infrastructure.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex min-h-[420px] flex-col overflow-hidden rounded-lg bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={post.mainImage.src}
                  className="aspect-16/10 w-full rounded-lg object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-7">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={post.author.image}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function Categories({
  filters,
  months,
  categories,
}: {
  filters: BlogFilters
  months: string[]
  categories: ArchiveProps['categories']
}) {
  const { category: selectedCategory, month } = filters
  const filterClassName =
    'rounded-full border border-[#dfe6e2] bg-white px-3 py-1 text-sm/6 font-medium text-gray-600 hover:border-[#0b6b55] hover:text-[#0b6b55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8b6c] data-active:border-[#0b6b55] data-active:bg-[#edf5f0] data-active:text-[#0b6b55]'

  return (
    <div id="archive" className="scroll-mt-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1 basis-72">
          <p className="text-sm/5 font-semibold text-gray-950">Browse themes</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href={blogArchiveUrl({ month })}
              aria-current={!selectedCategory ? 'true' : undefined}
              data-active={!selectedCategory || undefined}
              className={filterClassName}
            >
              All themes
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={blogArchiveUrl({ category: category.slug, month })}
                aria-current={
                  selectedCategory === category.slug ? 'true' : undefined
                }
                data-active={selectedCategory === category.slug || undefined}
                className={filterClassName}
              >
                {category.title} ({category.count})
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-start gap-3">
          <details key={`${selectedCategory}-${month}`} className="relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm/6 font-medium text-gray-950 shadow-sm ring-1 ring-black/10 hover:bg-[#f7f9f6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8b6c] [&::-webkit-details-marker]:hidden">
              <CalendarDaysIcon className="size-4" />
              {month
                ? dayjs(`${month}-01`).format('MMMM YYYY')
                : 'Filter by month'}
            </summary>
            <nav
              aria-label="Publication month"
              className="absolute left-0 z-20 mt-2 max-h-72 w-56 overflow-y-auto rounded-lg border border-[#dfe6e2] bg-white p-2 shadow-lg sm:right-0 sm:left-auto"
            >
              {[undefined, ...months].map((value) => (
                <Link
                  key={value || 'all'}
                  href={blogArchiveUrl({
                    category: selectedCategory,
                    month: value,
                  })}
                  aria-current={month === value ? 'true' : undefined}
                  className={clsx(
                    'block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-[#edf5f0] focus-visible:outline-2 focus-visible:outline-[#0f8b6c]',
                    month === value &&
                      'bg-[#edf5f0] font-semibold text-[#0b6b55]',
                  )}
                >
                  {value
                    ? dayjs(`${value}-01`).format('MMMM YYYY')
                    : 'All months'}
                </Link>
              ))}
            </nav>
          </details>
          <Button variant="outline" href="/blog/feed.xml" className="gap-1">
            <RssIcon className="size-4" />
            RSS Feed
          </Button>
        </div>
      </div>
      {(selectedCategory || month) && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm/6 text-[#0b6b55]">
          {selectedCategory && (
            <Link
              href={blogArchiveUrl({ month })}
              className="underline underline-offset-4"
            >
              Clear theme:{' '}
              {categories.find((category) => category.slug === selectedCategory)
                ?.title || selectedCategory}
            </Link>
          )}
          {month && (
            <Link
              href={blogArchiveUrl({ category: selectedCategory })}
              className="underline underline-offset-4"
            >
              Clear month: {dayjs(`${month}-01`).format('MMMM YYYY')}
            </Link>
          )}
          <Link
            href={blogArchiveUrl()}
            className="underline underline-offset-4"
          >
            Clear all filters
          </Link>
        </div>
      )}
    </div>
  )
}

function Posts({
  posts,
  filters,
}: {
  posts: ArchivePost[]
  filters: BlogFilters
}) {
  if (posts.length === 0) {
    if (filters.category || filters.month) {
      return (
        <div className="mt-6 rounded-lg border border-[#dfe6e2] bg-white p-8">
          <h2 className="text-base font-semibold text-gray-950">
            No posts match these filters.
          </h2>
          <p className="mt-2 text-sm/6 text-gray-600">
            Try another theme or month, or clear the filters to see all posts.
          </p>
          <Link
            href={blogArchiveUrl()}
            className="mt-4 inline-block text-sm font-medium text-[#0b6b55] underline underline-offset-4"
          >
            View all posts
          </Link>
        </div>
      )
    }
    return (
      <div className="mt-6 rounded-lg border border-[#dfe6e2] bg-white p-8">
        <h2 className="text-base font-semibold text-gray-950">
          The blog is being prepared.
        </h2>
        <p className="mt-2 max-w-2xl text-sm/6 text-gray-600">
          Foundation essays, release notes, field stories, and implementation
          guides will appear here once they are ready for publication.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 gap-5 border-b border-b-[#dfe6e2] py-8 first:border-t first:border-t-[#dfe6e2] sm:grid-cols-[13rem_1fr]"
        >
          <div className="sm:pt-1">
            {post.mainImage && (
              <img
                alt={post.mainImage.alt || ''}
                src={post.mainImage.src}
                className="aspect-16/10 w-full rounded-lg object-cover shadow-sm ring-1 ring-black/10"
              />
            )}
          </div>
          <div className="grid gap-5 sm:grid-cols-[9rem_1fr]">
            <div>
              <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
                {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
              </div>
              {post.readingTime && (
                <div className="mt-2 text-sm/5 text-gray-500">
                  {post.readingTime} min read
                </div>
              )}
              {post.author && (
                <div className="mt-2.5 flex items-center gap-3">
                  {post.author.image && (
                    <img
                      alt=""
                      src={post.author.image}
                      className="aspect-square size-6 rounded-full object-cover"
                    />
                  )}
                  <div className="text-sm/5 text-gray-700">
                    {post.author.name}
                  </div>
                </div>
              )}
            </div>
            <div className="sm:max-w-2xl">
              <div className="flex flex-wrap gap-2">
                {post.categories?.slice(0, 2).map((category) => (
                  <Link
                    key={category.slug}
                    href={blogArchiveUrl({
                      ...filters,
                      category: category.slug,
                    })}
                    className="relative z-10 rounded-full border border-[#dfe6e2] bg-white px-2.5 py-0.5 text-xs/5 font-medium text-gray-600 hover:border-[#0b6b55] hover:text-[#0b6b55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8b6c]"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
              <h2 className="mt-3 text-lg/6 font-semibold text-gray-950">
                {post.title}
              </h2>
              <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-sm/5 font-medium"
                >
                  <span className="absolute inset-0" />
                  Read article
                  <ChevronRightIcon className="size-4 fill-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Pagination({
  page,
  filters,
  totalPosts,
}: {
  page: number
  filters: BlogFilters
  totalPosts: number
}) {
  function url(page: number) {
    return blogArchiveUrl(filters, page)
  }

  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            aria-current={i + 1 === page ? 'page' : undefined}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'hover:bg-gray-100',
              'data-active:shadow-sm data-active:ring-1 data-active:ring-black/10',
              'data-active:hover:bg-[#f7f9f6]',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export function BlogArchiveView({
  allPosts,
  categories,
  query = {},
}: ArchiveProps & {
  query?: Record<string, string | string[] | undefined>
}) {
  const { page: requestedPage, ...filters } = parseBlogQuery(query)
  const filteredPosts = filterBlogPosts(allPosts, filters)
  const page = Math.min(
    requestedPage,
    Math.max(1, Math.ceil(filteredPosts.length / postsPerPage)),
  )
  const posts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage,
  )
  const months = [
    ...new Set(allPosts.map((post) => post.publishedAt.slice(0, 7))),
  ]
    .filter((month) => /^\d{4}-(0[1-9]|1[0-2])$/.test(month))
    .sort()
    .reverse()

  return (
    <>
      {page === 1 && !filters.category && !filters.month && (
        <FeaturedPosts posts={allPosts} />
      )}
      <Container className="mt-16 pb-24">
        <Categories filters={filters} months={months} categories={categories} />
        <p role="status" className="mt-6 text-sm/6 text-gray-600">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {(filters.category || filters.month) && ' matching your filters'}
        </p>
        <Posts posts={posts} filters={filters} />
        <Pagination
          page={page}
          filters={filters}
          totalPosts={filteredPosts.length}
        />
      </Container>
    </>
  )
}

export function BlogArchive(props: ArchiveProps) {
  const searchParams = useSearchParams()
  return (
    <BlogArchiveView
      {...props}
      query={{
        category: searchParams.get('category') ?? undefined,
        month: searchParams.get('month') ?? undefined,
        page: searchParams.get('page') ?? undefined,
      }}
    />
  )
}
