"use client"

import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = {
    title: "Building Scalable Django Applications",
    date: "April 15, 2024",
    author: "Usama Haider",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Django", "Python", "Scalability", "Performance", "Web Development"],
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>

        <div className="relative aspect-[2/1] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
          <p>
            Django is a powerful web framework that allows developers to build
            robust web applications quickly. However, as your application
            grows, you may encounter performance issues. In this article, we'll
            explore strategies for building scalable Django applications that
            can handle increased traffic and data volume.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-6">
            Understanding Django's Architecture
          </h2>
          <p>
            Django follows the Model-View-Template (MVT) pattern, which
            separates application logic from the presentation layer. This makes
            it easier to scale components independently.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-6">
            Database Optimization
          </h2>
          <p>The database is often the first bottleneck. To improve performance:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use appropriate indexes on your tables</li>
            <li>Implement database connection pooling</li>
            <li>
              Optimize ORM queries using{" "}
              <code className="bg-gray-100 px-1 rounded text-pink-600">
                select_related()
              </code>{" "}
              and{" "}
              <code className="bg-gray-100 px-1 rounded text-pink-600">
                prefetch_related()
              </code>
            </li>
            <li>Use read replicas for read-heavy operations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-6">
            Caching Strategies
          </h2>
          <p>Django supports various caching strategies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Memcached</li>
            <li>Redis</li>
            <li>Database caching</li>
            <li>File system caching</li>
          </ul>
          <p>You can also cache at different levels:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Per-site caching</li>
            <li>Per-view caching</li>
            <li>Template fragment caching</li>
            <li>Low-level cache API</li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-6">
            Asynchronous Processing
          </h2>
          <p>
            For long-running tasks, use asynchronous processing with tools like
            Celery. This lets your app process tasks in the background and
            keeps your web server responsive.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-6">
            Horizontal Scaling
          </h2>
          <p>To scale horizontally:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Make your app stateless</li>
            <li>Use a load balancer</li>
            <li>Implement shared session storage</li>
            <li>Store media in cloud storage like AWS S3</li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-6">
            Conclusion
          </h2>
          <p>
            Scalability in Django comes down to architecture, database tuning,
            caching, and deployment strategy. Apply these best practices to
            future-proof your app.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {post.tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="border-t pt-8 mt-12">
          <h3 className="text-xl font-bold mb-4">Share this article</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
