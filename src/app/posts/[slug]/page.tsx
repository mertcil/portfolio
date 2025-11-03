import { getPostBySlug, getSlugs, renderMarkdownToHtml } from '@/lib/posts'
import { notFound } from 'next/navigation'
import PostContent from './PostContent'

export async function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }))
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = await renderMarkdownToHtml(post.content, slug)

  return (
    <PostContent
      title={post.title}
      date={post.date}
      author={post.author}
      category={post.category}
      tags={post.tags}
      htmlContent={htmlContent}
    />
  )
}
