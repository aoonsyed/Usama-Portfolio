import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable Django Applications",
      excerpt: "Learn how to structure and optimize Django applications for scale and performance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      date: "April 15, 2024",
      tags: ["Django", "Python", "Scalability"],
      slug: "building-scalable-django-applications",
    },
    {
      title: "Microservices with FastAPI and gRPC",
      excerpt: "A comprehensive guide to building microservices using FastAPI and gRPC for efficient communication.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      date: "March 22, 2024",
      tags: ["FastAPI", "gRPC", "Microservices"],
      slug: "microservices-with-fastapi-grpc",
    },
    {
      title: "React Best Practices for Frontend Developers",
      excerpt: "Essential best practices and patterns for building maintainable React applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      date: "February 10, 2024",
      tags: ["React", "JavaScript", "Frontend"],
      slug: "react-best-practices",
    },
  ]

  return (
    <section id="blog" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading text-center">Blog</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">Technical articles and insights.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="aspect-video relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
