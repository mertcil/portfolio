import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

// Cache for rendered HTML content
const renderedHtmlCache: Map<string, string> = new Map()

export interface PostMetadata {
  title: string
  date: string
  author: string
  category: string
  tags: string[]
  excerpt: string
  slug: string
}

export interface Post extends PostMetadata {
  content: string
}

// Cache for metadata only (no content) - used for listings
let metadataCache: PostMetadata[] | null = null

export function getAllPostsMetadata(): PostMetadata[] {
  // Return cached metadata if available
  if (metadataCache) {
    return metadataCache
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents) // Note: only extract data, not content

      const slug = fileName.replace(/\.md$/, '')

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        author: data.author || '',
        category: data.category || '',
        tags: data.tags || [],
        excerpt: data.excerpt || '',
      }
    })

  const sorted = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  metadataCache = sorted
  return sorted
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      const slug = fileName.replace(/\.md$/, '')

      return {
        slug,
        content,
        title: data.title || '',
        date: data.date || '',
        author: data.author || '',
        category: data.category || '',
        tags: data.tags || [],
        excerpt: data.excerpt || '',
      }
    })

  // Sort by date descending
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    title: data.title || '',
    date: data.date || '',
    author: data.author || '',
    category: data.category || '',
    tags: data.tags || [],
    excerpt: data.excerpt || '',
  }
}

export function getSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function renderMarkdownToHtml(markdown: string, slug: string): Promise<string> {
  // Check cache first
  if (renderedHtmlCache.has(slug)) {
    return renderedHtmlCache.get(slug)!
  }

  // Process markdown and cache result
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(markdown)

  const htmlContent = String(processedContent)
  renderedHtmlCache.set(slug, htmlContent)
  return htmlContent
}
