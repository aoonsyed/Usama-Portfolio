import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Clinix360",
      description: "Healthcare management system for clinics and hospitals.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Django", "React"],
      liveUrl: "https://clinix360.com",
      githubUrl: "#",
    },
    {
      title: "InvoTeams",
      description: "Team management platform for remote teams.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Django", "React"],
      liveUrl: "https://invoteams.com",
      githubUrl: "#",
    },
    {
      title: "SastaTicket",
      description: "Online ticket booking platform for travel and events.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      tags: ["Python", "Django", "REST API"],
      liveUrl: "https://www.sastaticket.pk",
      githubUrl: "#",
    },
    {
      title: "Cytex",
      description: "Financial platform for cryptocurrency trading.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1932&auto=format&fit=crop",
      tags: ["Python", "Flask", "JavaScript"],
      liveUrl: "https://cytex.io",
      githubUrl: "#",
    },
    {
      title: "SP Med",
      description: "Medical services platform for healthcare providers.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      tags: ["Python", "Django", "REST API"],
      liveUrl: "https://www.spmed.kr/",
      githubUrl: "#",
    },
    {
      title: "Circle Markets",
      description: "Financial markets and trading platform.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Django", "React"],
      liveUrl: "https://circlemarkets.com/",
      githubUrl: "#",
    },
    {
      title: "Mentium",
      description: "Mentorship and coaching platform for professionals.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Django", "React"],
      liveUrl: "https://www.mentium.io/",
      githubUrl: "#",
    },
    {
      title: "Joompa",
      description: "Social networking and dating platform.",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Django", "React"],
      liveUrl: "https://www.joompa.com.my/",
      githubUrl: "#",
    },
    {
      title: "Loyalty Management System",
      description: "Customer loyalty and rewards management system.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Django", "REST API"],
      liveUrl: "https://www.xstak.com/loyalty-management-system",
      githubUrl: "#",
    },
    {
      title: "Zbooni",
      description: "E-commerce and payment solutions platform.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Django", "React"],
      liveUrl: "https://www.zbooni.com/",
      githubUrl: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">All Projects</h1>
        <p className="text-muted-foreground max-w-2xl">
          A comprehensive collection of projects I've worked on throughout my career, showcasing my skills in Python,
          Django, Flask, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden card-hover h-full flex flex-col">
            <div className="aspect-video relative">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader className="p-4">
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
