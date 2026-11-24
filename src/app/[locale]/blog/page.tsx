import { ClientMessages } from '@/components/client-messages'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { pageMetadata } from '@/i18n/metadata'
import { initLocale, resolveLocale, type PageProps } from '@/i18n/server'
import { getAllCategories, getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'
import { BlogArchive, BlogArchiveView } from './blog-archive'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = await getTranslations({ locale, namespace: 'blog.meta' })

  return pageMetadata({
    locale,
    path: '/blog',
    title: t('title'),
    description: t('description'),
  })
}

export default async function Blog({ params }: PageProps) {
  await initLocale(params)
  const t = await getTranslations('blog.hero')

  const allPosts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    readingTime: post.readingTime,
    author: post.author,
    categories: post.categories,
    mainImage: post.mainImage,
    featured: post.featured,
  }))
  const categories = getAllCategories()

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">{t('eyebrow')}</Subheading>
        <Heading as="h1" className="mt-2">
          {t('title')}
        </Heading>
        <Lead className="mt-6 max-w-3xl">{t('lead')}</Lead>
      </Container>
      <ClientMessages namespaces={['blogArchive']}>
        <Suspense
          fallback={
            <BlogArchiveView allPosts={allPosts} categories={categories} />
          }
        >
          <BlogArchive allPosts={allPosts} categories={categories} />
        </Suspense>
      </ClientMessages>
      <Footer />
    </main>
  )
}
