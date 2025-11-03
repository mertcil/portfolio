import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { z } from 'zod'

const postsDirectory = path.join(process.cwd(), 'src/posts')

// Cache for rendered HTML content
const renderedHtmlCache: Map<string, string> = new Map()

// Zod schema for validating markdown frontmatter
const FrontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().min(1, 'Date is required'),
  category: z.string().optional().default(''),
  tags: z.array(z.string()).optional().default([]),
  excerpt: z.string().optional().default(''),
})

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

  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        try {
          const filePath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(filePath, 'utf8')
          const { data } = matter(fileContents) // Note: only extract data, not content

          const slug = fileName.replace(/\.md$/, '')

          // Validate frontmatter with Zod
          const validatedData = FrontmatterSchema.parse(data)

          return {
            slug,
            title: validatedData.title,
            date: validatedData.date,
            author: 'Mevlut Mert CIL',
            category: validatedData.category,
            tags: validatedData.tags,
            excerpt: validatedData.excerpt,
          }
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error)
          // Return a default object for failed files to prevent complete failure
          return null
        }
      })
      .filter((post): post is PostMetadata => post !== null) // Filter out failed posts

    const sorted = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    metadataCache = sorted
    return sorted
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getAllPosts(): Post[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        try {
          const filePath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(filePath, 'utf8')
          const { data, content } = matter(fileContents)

          const slug = fileName.replace(/\.md$/, '')

          // Validate frontmatter with Zod
          const validatedData = FrontmatterSchema.parse(data)

          return {
            slug,
            content,
            title: validatedData.title,
            date: validatedData.date,
            author: 'Mevlut Mert CIL',
            category: validatedData.category,
            tags: validatedData.tags,
            excerpt: validatedData.excerpt,
          }
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error)
          return null
        }
      })
      .filter((post): post is Post => post !== null)

    // Sort by date descending
    return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    // Validate frontmatter with Zod
    const validatedData = FrontmatterSchema.parse(data)

    return {
      slug,
      content,
      title: validatedData.title,
      date: validatedData.date,
      author: 'Mevlut Mert CIL',
      category: validatedData.category,
      tags: validatedData.tags,
      excerpt: validatedData.excerpt,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading posts directory for slugs:', error)
    return []
  }
}

export async function renderMarkdownToHtml(markdown: string, slug: string): Promise<string> {
  // Check cache first
  if (renderedHtmlCache.has(slug)) {
    return renderedHtmlCache.get(slug)!
  }

  try {
    // Process markdown with proper pipeline: remark -> rehype -> sanitize -> stringify
    const processedContent = await remark()
      .use(remarkGfm) // Parse GitHub Flavored Markdown
      .use(remarkRehype, { allowDangerousHtml: false }) // Convert to rehype (HTML AST)
      .use(rehypeSanitize) // Sanitize the HTML
      .use(rehypeStringify) // Convert to HTML string
      .process(markdown)

    const htmlContent = String(processedContent)
    renderedHtmlCache.set(slug, htmlContent)
    return htmlContent
  } catch (error) {
    console.error(`Error rendering markdown for ${slug}:`, error)
    return '<p>Error rendering content. Please try again later.</p>'
  }
}
