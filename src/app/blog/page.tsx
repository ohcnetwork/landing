import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import {
  getAllCategories,
  getFeaturedPosts,
  getPostsCount,
  getPostsPaginated,
} from '@/lib/blog'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RssIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing from Open Healthcare Network Foundation on CARE, open healthcare infrastructure, standards, deployments, and ecosystem work.',
}

const postsPerPage = 30

async function FeaturedPosts() {
  let featuredPosts = getFeaturedPosts(3)

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

async function Categories() {
  let categories = getAllCategories()

  if (categories.length === 0) {
    return
  }

  return (
    <div
      id="archive"
      className="flex flex-wrap items-start justify-between gap-4"
    >
      <div>
        <p className="text-sm/5 font-semibold text-gray-950">Browse themes</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category.slug}
              className="rounded-full border border-[#dfe6e2] bg-white px-3 py-1 text-sm/6 font-medium text-gray-600"
            >
              {category.title} ({category.count})
            </span>
          ))}
        </div>
      </div>
      <Button variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS Feed
      </Button>
    </div>
  )
}

async function Posts({ page, category }: { page: number; category?: string }) {
  let posts = getPostsPaginated(page, postsPerPage, category)

  if (posts.length === 0 && (page > 1 || category)) {
    notFound()
  }

  if (posts.length === 0) {
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
                  <span
                    key={category.slug}
                    className="rounded-full border border-[#dfe6e2] bg-white px-2.5 py-0.5 text-xs/5 font-medium text-gray-600"
                  >
                    {category.title}
                  </span>
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

async function Pagination({
  page,
  category,
}: {
  page: number
  category?: string
}) {
  function url(page: number) {
    let params = new URLSearchParams()

    if (category) params.set('category', category)
    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  let totalPosts = getPostsCount(category)
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

export default function Blog() {
  let page = 1
  let category = undefined

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          Writing for the open healthcare commons.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Foundation essays, release notes, field stories, and implementation
          guidance from Open Healthcare Network.
        </Lead>
      </Container>
      {page === 1 && !category && <FeaturedPosts />}
      <Container className="mt-16 pb-24">
        <Categories />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>
      <Footer />
    </main>
  )
}
