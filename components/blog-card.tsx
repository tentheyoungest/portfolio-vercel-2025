import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/contentful"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="relative aspect-video block">
        <Image
          src={post.featuredImage?.url || "/placeholder.svg?height=200&width=400"}
          alt={post.featuredImage?.title || post.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </Link>
      <CardHeader className="pb-0">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <CalendarIcon className="h-4 w-4" />
          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          <span className="mx-1">•</span>
          <Clock className="h-4 w-4" />
          <span>5 min read</span>
        </div>
        <CardTitle className="line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        {post.tags &&
          post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="mr-2">
              {tag}
            </Badge>
          ))}
      </CardFooter>
    </Card>
  )
}
