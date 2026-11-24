import { getAllPosts } from '@/lib/blog'
import { Feed } from 'feed'
import assert from 'node:assert'

export const dynamic = 'force-static'

export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ohc.network'

  let feed = new Feed({
    title: 'Open Healthcare Network Updates',
    description:
      'Foundation updates, release notes, field stories, and implementation guidance from Open Healthcare Network.',
    author: {
      name: 'Open Healthcare Network Foundation',
      email: 'hello@ohc.network',
    },
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/blog/feed.xml`,
    },
  })

  let posts = getAllPosts()

  posts.forEach((post) => {
    try {
      assert(typeof post.title === 'string')
      assert(typeof post.slug === 'string')
      assert(typeof post.excerpt === 'string')
      assert(typeof post.publishedAt === 'string')
    } catch (error) {
      console.log('Post is missing required fields for RSS feed:', post, error)
      return
    }

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${siteUrl}/blog/${post.slug}`,
      content: post.excerpt,
      image: post.mainImage?.src
        ? `${siteUrl}${post.mainImage.src}`
        : undefined,
      author: post.author?.name ? [{ name: post.author.name }] : [],
      contributor: post.author?.name ? [{ name: post.author.name }] : [],
      date: new Date(post.publishedAt),
    })
  })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
