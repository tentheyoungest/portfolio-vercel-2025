import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import { getBlogPosts } from "@/lib/contentful"

export default async function BlogPage() {
  // Fetch blog posts from Contentful
  const { posts, total } = await getBlogPosts()
  const hasPosts = posts.length > 0

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
        {/* Blog Header */}
        <section className="py-12 md:py-16 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, design, and technology.
            </p>
          </div>
        </section>

        {/* Blog Posts or Coming Soon Notice */}
        <section className="py-12 space-y-8">
          {hasPosts ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {total > posts.length && (
                <div className="flex justify-center mt-8">
                  <Button variant="outline" asChild className="flex items-center gap-2">
                    Load More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-muted/50 border rounded-lg p-8 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
              <p className="text-muted-foreground mb-6">
                I'm currently working on some exciting content for my blog. Check back soon for articles about web
                development, design tips, and my experiences in the tech industry.
              </p>
              <Button asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          )}
        </section>

        {/* Preview of what the blog will look like - only show if no real posts */}
        {!hasPosts && (
          <section className="py-12 space-y-8">
            <h2 className="text-2xl font-bold">Preview of Upcoming Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Blog Posts */}
              <Card className="flex flex-col h-full">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Best Practices for Webflow Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn how to structure your Webflow projects for scalability and maintainability based on my
                    experience working with enterprise clients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">Webflow</span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">Best Practices</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">From WordPress to Webflow</h3>
                  <p className="text-muted-foreground mb-4">
                    Transitioning from WordPress to Webflow? This comprehensive guide covers everything you need to know
                    to make the switch smoothly.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">WordPress</span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">Webflow</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Optimizing Website Performance</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover practical techniques to improve website loading times, optimize images, and enhance user
                    experience through performance optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">Performance</span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">Optimization</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="py-12">
          <Card className="bg-muted/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get notified when I publish new articles about web development, design tips, and technology insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="sm:w-auto">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer - Same as in main page */}
      <footer className="border-t bg-muted/40">
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
