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
  // In a real application, you would fetch the blog post data based on the slug
  // For now, we'll use mock data
  const post = {
    title: "Building Scalable Django Applications",
    date: "April 15, 2024",
    author: "Farva Khursheed",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Django is a powerful web framework that allows developers to build robust web applications quickly. However, as your application grows, you may encounter performance issues that can affect user experience. In this article, we'll explore strategies for building scalable Django applications that can handle increased traffic and data volume.</p>
      
      <h2>Understanding Django's Architecture</h2>
      <p>Before diving into scalability strategies, it's important to understand Django's architecture. Django follows the Model-View-Template (MVT) pattern, which separates the application logic from the presentation layer. This separation makes it easier to scale different components of your application independently.</p>
      
      <h2>Database Optimization</h2>
      <p>The database is often the first bottleneck in a Django application. Here are some strategies to optimize database performance:</p>
      
      <ul>
        <li>Use appropriate indexes on your database tables</li>
        <li>Implement database connection pooling</li>
        <li>Optimize your ORM queries using select_related() and prefetch_related()</li>
        <li>Consider using database read replicas for read-heavy applications</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      <p>Implementing caching can significantly improve the performance of your Django application. Django provides a flexible caching framework that supports various caching backends, including:</p>
      
      <ul>
        <li>Memcached</li>
        <li>Redis</li>
        <li>Database caching</li>
        <li>File system caching</li>
      </ul>
      
      <p>You can cache at different levels, including:</p>
      
      <ul>
        <li>Per-site caching</li>
        <li>Per-view caching</li>
        <li>Template fragment caching</li>
        <li>Low-level cache API</li>
      </ul>
      
      <h2>Asynchronous Processing</h2>
      <p>For long-running tasks, consider using asynchronous processing with tools like Celery. This allows your application to handle time-consuming operations in the background, freeing up web workers to handle more requests.</p>
      
      <h2>Horizontal Scaling</h2>
      <p>As your application grows, you may need to scale horizontally by adding more servers. This requires:</p>
      
      <ul>
        <li>Making your application stateless</li>
        <li>Using a load balancer to distribute traffic</li>
        <li>Implementing a shared session store</li>
        <li>Using a centralized media storage solution like AWS S3</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable Django applications requires a combination of good architecture, database optimization, caching, and appropriate deployment strategies. By implementing these techniques, you can ensure that your Django application can handle increased traffic and data volume while maintaining good performance.</p>
    `,
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

        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>

        <div className="relative aspect-[2/1] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="border-t pt-8 mt-8">
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
