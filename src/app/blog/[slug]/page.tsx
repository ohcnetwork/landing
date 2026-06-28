import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { getAdjacentPosts, getAllPosts, getPostBySlug } from '@/lib/blog'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const post = getPostBySlug((await params).slug)
  if (!post) return {}

  const canonicalPath = `/blog/${post.slug}`
  const categories = post.categories?.map((category) => category.title) || []
  const authorName = post.author?.name || 'Open Healthcare Network Foundation'
  const image = {
    url: `/blog/og/${post.slug}.png`,
    width: 1200,
    height: 630,
    alt: post.mainImage?.alt || `${post.title} cover image`,
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: authorName }],
    keywords: [
      post.title,
      'Open Healthcare Network',
      'CARE HMIS',
      'open healthcare infrastructure',
      ...categories,
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'article',
      url: canonicalPath,
      title: post.title,
      description: post.excerpt,
      siteName: 'Open Healthcare Network',
      publishedTime: post.publishedAt,
      authors: [authorName],
      tags: categories,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ohcnetwork',
      title: post.title,
      description: post.excerpt,
      images: [image.url],
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const post = getPostBySlug((await params).slug)
  if (!post) notFound()
  const { newerPost, olderPost } = getAdjacentPosts(post.slug)

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
        </Subheading>
        <Heading as="h1" className="mt-2 max-w-5xl">
          {post.title}
        </Heading>
        <Lead className="mt-6 max-w-3xl">{post.excerpt}</Lead>

        {post.mainImage && (
          <div className="mt-10 overflow-hidden rounded-lg bg-white p-2 shadow-xl ring-1 shadow-black/5 ring-black/10">
            <img
              alt={post.mainImage.alt || ''}
              src={post.mainImage.src}
              className="aspect-16/10 w-full rounded-lg object-cover"
            />
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 gap-10 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <aside className="flex flex-wrap items-start gap-8 max-lg:justify-between lg:sticky lg:top-8 lg:flex-col lg:self-start">
            {post.author && (
              <div>
                <p className="font-mono text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Author
                </p>
                <div className="mt-3 text-sm/5 font-medium text-gray-950">
                  {post.author.name}
                </div>
              </div>
            )}
            {post.readingTime && (
              <div>
                <p className="font-mono text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Reading time
                </p>
                <div className="mt-3 text-sm/5 font-medium text-gray-950">
                  {post.readingTime} min read
                </div>
              </div>
            )}
            {Array.isArray(post.categories) && post.categories.length > 0 && (
              <div>
                <p className="font-mono text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Categories
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link
                      key={category.slug}
                      href="/blog#archive"
                      className="rounded-full border border-[#dfe6e2] bg-white px-3 py-1 text-sm/6 font-medium text-gray-600 hover:text-[#0b6b55]"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <article className="text-gray-700">
            <div className="max-w-3xl xl:mx-auto">
              {post.content && (
                <div
                  className="space-y-7 text-lg/8 [&_a]:font-semibold [&_a]:text-[#0b6b55] [&_h2]:scroll-mt-24 [&_h2]:pt-8 [&_h2]:text-3xl/9 [&_h2]:font-semibold [&_h2]:tracking-normal [&_h2]:text-gray-950 [&_h3]:scroll-mt-24 [&_h3]:pt-4 [&_h3]:text-xl/7 [&_h3]:font-semibold [&_h3]:text-gray-950 [&_li]:ml-6 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-gray-950"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
              <div className="mt-14 grid gap-4 sm:grid-cols-2">
                {newerPost && (
                  <Link
                    href={`/blog/${newerPost.slug}`}
                    className="group rounded-lg border border-[#dfe6e2] bg-white p-5 shadow-sm transition hover:border-[#0b6b55]/40"
                  >
                    <div className="flex items-center gap-1 text-sm/5 font-medium text-[#0b6b55]">
                      <ChevronLeftIcon className="size-4 fill-[#0b6b55]" />
                      Newer
                    </div>
                    <div className="mt-3 text-base/6 font-semibold text-gray-950 group-hover:text-[#0b6b55]">
                      {newerPost.title}
                    </div>
                  </Link>
                )}
                {olderPost && (
                  <Link
                    href={`/blog/${olderPost.slug}`}
                    className="group rounded-lg border border-[#dfe6e2] bg-white p-5 text-right shadow-sm transition hover:border-[#0b6b55]/40 sm:col-start-2"
                  >
                    <div className="flex items-center justify-end gap-1 text-sm/5 font-medium text-[#0b6b55]">
                      Older
                      <ChevronRightIcon className="size-4 fill-[#0b6b55]" />
                    </div>
                    <div className="mt-3 text-base/6 font-semibold text-gray-950 group-hover:text-[#0b6b55]">
                      {olderPost.title}
                    </div>
                  </Link>
                )}
              </div>
              <div className="mt-8">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
                </Button>
              </div>
            </div>
          </article>

          {Array.isArray(post.headings) && post.headings.length > 0 && (
            <aside className="hidden xl:block">
              <div className="sticky top-8 rounded-lg border border-[#dfe6e2] bg-white p-5 shadow-sm">
                <p className="font-mono text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  In this article
                </p>
                <div className="mt-4 space-y-2">
                  {post.headings.map((heading) => (
                    <Link
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block text-sm/5 text-gray-600 hover:text-[#0b6b55] ${
                        heading.level === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {heading.text}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>
      </Container>
      <Footer />
    </main>
  )
}
