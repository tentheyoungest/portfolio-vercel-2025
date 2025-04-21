import { createClient } from "contentful"

// Create the Contentful client using the environment variables
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Types for Contentful blog content
export interface BlogPost {
  title: string
  slug: string
  featuredImage?: {
    url: string
    title: string
  }
  excerpt: string
  content: any // This would be the rich text content
  publishDate: string
  author?: {
    name: string
    picture?: {
      url: string
    }
  }
  tags?: string[]
}

// Function to get all blog posts
export async function getBlogPosts() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
    })

    // Transform the Contentful response into our BlogPost type
    const posts = entries.items.map((item: any) => {
      const fields = item.fields

      return {
        title: fields.title,
        slug: fields.slug,
        featuredImage: fields.featuredImage?.fields
          ? {
              url: `https:${fields.featuredImage.fields.file.url}`,
              title: fields.featuredImage.fields.title,
            }
          : undefined,
        excerpt: fields.excerpt || "",
        content: fields.content,
        publishDate: fields.publishDate,
        author: fields.author?.fields
          ? {
              name: fields.author.fields.name,
              picture: fields.author.fields.picture?.fields
                ? {
                    url: `https:${fields.author.fields.picture.fields.file.url}`,
                  }
                : undefined,
            }
          : undefined,
        tags: fields.tags || [],
      }
    })

    return {
      posts,
      total: entries.total,
    }
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error)
    return {
      posts: [],
      total: 0,
    }
  }
}

// Function to get a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    })

    if (entries.items.length === 0) {
      return null
    }

    const item = entries.items[0]
    const fields = item.fields

    return {
      title: fields.title,
      slug: fields.slug,
      featuredImage: fields.featuredImage?.fields
        ? {
            url: `https:${fields.featuredImage.fields.file.url}`,
            title: fields.featuredImage.fields.title,
          }
        : undefined,
      excerpt: fields.excerpt || "",
      content: fields.content,
      publishDate: fields.publishDate,
      author: fields.author?.fields
        ? {
            name: fields.author.fields.name,
            picture: fields.author.fields.picture?.fields
              ? {
                  url: `https:${fields.author.fields.picture.fields.file.url}`,
                }
              : undefined,
          }
        : undefined,
      tags: fields.tags || [],
    }
  } catch (error) {
    console.error("Error fetching blog post from Contentful:", error)
    return null
  }
}
