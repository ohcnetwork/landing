import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
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

  return post ? { title: post.title, description: post.excerpt } : {}
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const post = getPostBySlug((await params).slug)
  if (!post) notFound()

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

        <div className="mt-16 grid grid-cols-1 gap-10 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <aside className="flex flex-wrap items-start gap-8 max-lg:justify-between lg:flex-col">
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
            {Array.isArray(post.categories) && post.categories.length > 0 && (
              <div>
                <p className="font-mono text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Categories
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog?category=${category.slug}`}
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
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={post.mainImage.src}
                  className="mb-10 aspect-3/2 w-full rounded-lg object-cover shadow-xl"
                />
              )}
              {post.content && (
                <div
                  className="space-y-7 text-lg/8 [&_a]:font-semibold [&_a]:text-[#0b6b55] [&_h2]:pt-8 [&_h2]:text-3xl/9 [&_h2]:font-semibold [&_h2]:tracking-normal [&_h2]:text-gray-950 [&_h3]:pt-4 [&_h3]:text-xl/7 [&_h3]:font-semibold [&_h3]:text-gray-950 [&_li]:ml-6 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-gray-950"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
              <div className="mt-12">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
                </Button>
              </div>
            </div>
          </article>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
