import PostsLayout from './PostsLayout'
import { getAllPostsMetadata } from '@/lib/posts'

export default function PostsPage() {
  const posts = getAllPostsMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return <PostsLayout posts={posts} />
}
