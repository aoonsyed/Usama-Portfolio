import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
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
    {
      title: "Database Optimization Techniques for Django",
      excerpt: "Learn how to optimize database queries and improve performance in Django applications.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
      date: "January 25, 2024",
      tags: ["Django", "Database", "Performance"],
      slug: "database-optimization-django",
    },
    {
      title: "Building RESTful APIs with Django Rest Framework",
      excerpt: "A guide to creating robust and scalable RESTful APIs using Django Rest Framework.",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop",
      date: "December 18, 2023",
      tags: ["Django", "REST API", "Backend"],
      slug: "restful-apis-django-rest-framework",
    },
    {
      title: "Authentication Best Practices in Web Applications",
      excerpt: "Learn about secure authentication methods and best practices for web applications.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      date: "November 5, 2023",
      tags: ["Security", "Authentication", "Web Development"],
      slug: "authentication-best-practices",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </Button>

      <h1 className="text-4xl font-bold text-center mb-2">Blog</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Insights, tutorials, and thoughts on software development, team leadership, and technology.
      </p>

      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  )
}
