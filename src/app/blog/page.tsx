import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { getAllCategories, getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { BlogArchive, BlogArchiveView } from './blog-archive'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing from Open Healthcare Network Foundation on CARE, open healthcare infrastructure, standards, deployments, and ecosystem work.',
}

export default function Blog() {
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
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          Writing for the open healthcare commons.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Foundation essays, release notes, field stories, and implementation
          guidance from Open Healthcare Network.
        </Lead>
      </Container>
      <Suspense
        fallback={
          <BlogArchiveView allPosts={allPosts} categories={categories} />
        }
      >
        <BlogArchive allPosts={allPosts} categories={categories} />
      </Suspense>
      <Footer />
    </main>
  )
}
