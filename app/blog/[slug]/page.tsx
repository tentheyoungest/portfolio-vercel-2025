import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getBlogPostBySlug } from "@/lib/contentful"
import { notFound } from "next/navigation"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  // If post doesn't exist, show 404
  if (!post) {
    notFound()
  }

  // Options for the rich text renderer
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
      [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="mb-1">{children}</li>,
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <Link href={node.data.uri} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Same as in main page */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              Jessica Joy Bonzo
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="/#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="/#education" className="text-sm font-medium hover:text-primary">
              Education
            </Link>
            <Link href="/blog" className="text-sm font-medium text-primary">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Blog Post Content */}
          <article className="prose prose-lg max-w-none">
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage.url || "/placeholder.svg"}
                  alt={post.featuredImage.title || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Title and Meta */}
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>

              {post.author && (
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="mt-8">{post.content && documentToReactComponents(post.content, options)}</div>
          </article>

          {/* Author Bio */}
          {post.author && (
            <div className="mt-12 p-6 border rounded-lg bg-muted/20">
              <div className="flex items-center gap-4">
                {post.author.picture && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.picture.url || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-bold">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Frontend Developer specializing in Webflow and WordPress
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Enjoyed this article?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link href="/blog">Read More Articles</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Same as in main page */}
      <footer className="border-t bg-muted/40 mt-16">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Jessica Joy Bonzo. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="mailto:jessicabonzo.dev@gmail.com" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://linkedin.com/in/jessica-bonzo"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
