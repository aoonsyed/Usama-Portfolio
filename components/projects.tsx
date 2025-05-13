"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
  challenges: string[]
  solutions: string[]
  screenshots?: string[]
  testimonial?: {
    content: string
    author: string
    position: string
  }
}

const projects = [
  {
    title: "Founders Network",
    description: "A platform connecting founders and entrepreneurs to share knowledge, resources, and opportunities.",
    longDescription: `Founders Network is a comprehensive platform designed to connect entrepreneurs and founders across various industries. The platform facilitates networking, knowledge sharing, and collaboration opportunities.

    As the Senior Software Engineer, I was responsible for:
    • Developing robust backend APIs using Django and Django REST Framework
    • Implementing complex database schemas and optimizing queries for performance
    • Building responsive frontend components with React and Bootstrap
    • Setting up AWS infrastructure and CI/CD pipelines
    • Implementing security features and ensuring data protection
    • Optimizing application performance for high traffic loads`,
    challenges: [
      "Scaling the platform to handle thousands of concurrent users",
      "Implementing real-time communication features",
      "Designing a flexible permission system for different user roles",
      "Optimizing database queries for complex reporting features",
    ],
    solutions: [
      "Implemented database sharding and caching strategies",
      "Used WebSockets for real-time features",
      "Designed a role-based access control system",
      "Created optimized database indexes and query patterns",
    ],
    image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Django", "Django REST Framework", "React", "AWS", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://www.foundersnetwork.com/",
    githubUrl: "https://github.com/usamahaider",
    screenshots: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    ],
    testimonial: {
      content:
        "Usama's contributions to our platform have been invaluable. His technical expertise and problem-solving skills helped us scale our application to serve thousands of users.",
      author: "Sarah Johnson",
      position: "CTO, Founders Network",
    },
  },
  {
    title: "Empowering Confident Youth",
    description: "An educational platform designed to empower youth with confidence and skills for the future.",
    longDescription: `Empowering Confident Youth is an educational platform aimed at providing resources, courses, and community support for young people. The platform includes interactive learning modules, progress tracking, and community features.

    My contributions included:
    • Building the entire backend infrastructure using Django
    • Implementing a secure user authentication and authorization system
    • Developing an interactive course management system
    • Creating analytics dashboards for tracking user progress
    • Optimizing media delivery for various devices and connection speeds`,
    challenges: [
      "Creating an engaging and accessible interface for young users",
      "Implementing robust parental controls and safety features",
      "Designing a scalable content delivery system",
      "Ensuring GDPR compliance for underage users",
    ],
    solutions: [
      "Designed an intuitive UI with extensive user testing",
      "Built a comprehensive permission system with parental oversight",
      "Implemented AWS CloudFront for content delivery",
      "Developed strict data handling protocols and consent management",
    ],
    image: "https://media.istockphoto.com/id/2172736898/photo/middle-school-boy-stands-in-class-to-do-a-presentation.webp?a=1&b=1&s=612x612&w=0&k=20&c=zMzgMquSHFzaxMAxosQTrSIn17eHfo5x5pqGdawDTRI=",
    technologies: ["Python", "Django", "React", "AWS", "PostgreSQL", "Redux", "Tailwind CSS"],
    liveUrl: "https://www.empoweringconfidentyouth.app/",
    githubUrl: "https://github.com/usamahaider",
    screenshots: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    ],
    testimonial: {
      content:
        "Usama developed a robust and secure platform that perfectly meets the needs of our young users and their parents. His attention to detail on security and privacy was exceptional.",
      author: "Emily Rodriguez",
      position: "Program Director, ECY",
    },
  },
  {
    title: "Chamabora",
    description: "A community-driven platform for connecting people with local resources and services.",
    longDescription: `Chamabora is a community platform that connects users with local resources, services, and events. The application features geolocation-based search, user reviews, and service provider profiles.

    As the lead backend developer, I:
    • Architected and built the backend using Elixir and Phoenix
    • Implemented geospatial search functionality
    • Designed a high-performance database schema
    • Created a real-time notification system
    • Developed a comprehensive API for mobile and web clients`,
    challenges: [
      "Handling complex geospatial queries efficiently",
      "Building a reliable rating and review system",
      "Implementing real-time updates for service availability",
      "Ensuring platform security for sensitive user data",
    ],
    solutions: [
      "Used PostGIS extensions for optimized geospatial queries",
      "Implemented a weighted review algorithm with anti-fraud measures",
      "Leveraged Phoenix Channels for real-time updates",
      "Applied comprehensive encryption and security protocols",
    ],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Elixir", "Phoenix", "PostgreSQL", "PostGIS", "React", "GraphQL", "AWS"],
    liveUrl: "http://chamabora.com/",
    githubUrl: "https://github.com/usamahaider",
    screenshots: [
      "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581362140999-e7ed88c2e7c1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    ],
    testimonial: {
      content:
        "Usama's expertise in Elixir and Phoenix was crucial for building our real-time features. The platform handles thousands of concurrent users with minimal latency.",
      author: "Michael Chen",
      position: "Founder, Chamabora",
    },
  },
  {
    title: "Maat Inc",
    description: "A professional services platform providing legal and compliance solutions.",
    longDescription: `Maat Inc is a comprehensive platform for legal and compliance services, offering document management, case tracking, and client communication tools. The platform serves law firms and compliance departments with specialized tools.

    My role involved:
    • Developing secure document management features
    • Implementing complex workflow automation
    • Creating client portal interfaces
    • Building reporting and analytics dashboards
    • Ensuring compliance with legal data handling requirements`,
    challenges: [
      "Ensuring strict data confidentiality and security",
      "Implementing complex legal workflow processes",
      "Creating an intuitive interface for non-technical users",
      "Managing document versioning and audit trails",
    ],
    solutions: [
      "Implemented end-to-end encryption for sensitive documents",
      "Designed a flexible workflow engine with visual process builder",
      "Conducted extensive UX research and usability testing",
      "Built a comprehensive versioning system with blockchain verification",
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Python", "Django", "React", "Docker", "PostgreSQL", "AWS", "Redux"],
    liveUrl: "https://maat-inc.com/",
    githubUrl: "https://github.com/usamahaider",
    screenshots: [
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    ],
    testimonial: {
      content:
        "The document management system Usama built for us has transformed how we handle sensitive legal documents. The security features and intuitive interface have received praise from all our users.",
      author: "David Thompson",
      position: "Legal Director, Maat Inc",
    },
  },
  {
    title: "Find-a-Plant",
    description: "An application to help users identify and learn about plants through image recognition.",
    longDescription: `Find-a-Plant is an innovative application that uses machine learning and image recognition to help users identify plants and learn about their care requirements. The app includes a plant database, care guides, and community features.

    I was responsible for:
    • Developing the React frontend and Node.js backend
    • Integrating with third-party image recognition APIs
    • Building a comprehensive plant database
    • Implementing user collection and tracking features
    • Creating an offline mode with data synchronization`,
    challenges: [
      "Optimizing image processing for mobile devices",
      "Building an accurate plant identification system",
      "Creating a comprehensive plant care database",
      "Implementing efficient offline functionality",
    ],
    solutions: [
      "Implemented client-side image compression and processing",
      "Integrated multiple ML models with a consensus algorithm",
      "Developed a structured database with expert-verified content",
      "Used IndexedDB for offline storage with intelligent sync",
    ],
    image: "https://images.unsplash.com/photo-1722765511354-fc42eae31cda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmluZCUyMGElMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "TensorFlow.js", "Express", "Redux"],
    liveUrl: "https://find-a-plant-client-git-main-bilal1133.vercel.app/",
    githubUrl: "https://github.com/usamahaider",
    screenshots: [
      "https://images.unsplash.com/photo-1599685315640-4a9ba2613518?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599685315640-4a9ba2613518?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599685315640-4a9ba2613518?q=80&w=2069&auto=format&fit=crop",
    ],
    testimonial: {
      content:
        "Usama's work on our plant recognition app exceeded our expectations. The image processing is fast and accurate, and the user experience is seamless across all devices.",
      author: "Lisa Wong",
      position: "Product Manager, Find-a-Plant",
    },
  },
  {
    title: "Ecosystem Marketplace",
    description: "A marketplace for environmental services and sustainable products.",
    longDescription: `Ecosystem Marketplace is a comprehensive platform for trading environmental services and sustainable products. The marketplace includes verification systems, transaction processing, and impact tracking.

    My contributions included:
    • Building the backend infrastructure with Django
    • Implementing secure payment processing
    • Creating verification workflows for environmental claims
    • Developing impact measurement and reporting tools
    • Optimizing search and discovery features`,
    challenges: [
      "Implementing secure and transparent transaction systems",
      "Creating verifiable environmental impact tracking",
      "Building a flexible marketplace for diverse product types",
      "Ensuring regulatory compliance across different regions",
    ],
    solutions: [
      "Integrated blockchain for transaction verification",
      "Developed a standardized impact measurement framework",
      "Created a dynamic product categorization system",
      "Implemented region-specific compliance checks",
    ],
    image: "https://images.unsplash.com/photo-1722765511327-d1242410dcd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluZCUyMGElMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Redis"],
    liveUrl: "https://www.ecosystemmarketplace.com/",
    githubUrl: "https://github.com/usamahaider",
    screenshots: [
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop",
    ],
    testimonial: {
      content:
        "The environmental impact tracking system Usama built has become a cornerstone of our platform. It provides the transparency and verification our users need for environmental markets.",
      author: "Robert Green",
      position: "CEO, Ecosystem Marketplace",
    },
  },
]
const ProjectCard = ({ project, isFeatured = false }: { project: Project; isFeatured?: boolean }) => {
  const [expanded, setExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return isFeatured ? (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      {/* Featured layout remains unchanged */}
      {/* ... (rest of your featured layout code here) */}
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors h-full flex flex-col">
        <div className="relative h-[220px]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
            unoptimized
          />
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-slate-300 mb-4">{project.description}</p>

          <div className={`transition-all duration-300 overflow-hidden ${expanded ? "max-h-[2000px]" : "max-h-0"}`}>
            <div className="mb-4">
              <p className="text-slate-300 text-sm whitespace-pre-line">{project.longDescription}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2 text-blue-300">Challenges:</h4>
              <ul className="list-disc pl-5 text-slate-300 text-sm">
                {project.challenges.slice(0, 2).map((challenge: string, i: number) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2 text-blue-300">Solutions:</h4>
              <ul className="list-disc pl-5 text-slate-300 text-sm">
                {project.solutions.slice(0, 2).map((solution: string, i: number) => (
                  <li key={i}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="mb-4 text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0 h-auto text-sm"
          >
            {expanded ? (
              <span className="flex items-center">
                Show Less <ChevronUp size={14} className="ml-1" />
              </span>
            ) : (
              <span className="flex items-center">
                Show More <ChevronDown size={14} className="ml-1" />
              </span>
            )}
          </Button>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="bg-slate-700 text-slate-300 border-slate-600">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-4">
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} className="mr-2" />
              View Project
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={14} className="mr-2" />
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        </motion.div>

        {/* Featured Projects */}
        {projects
          .filter((p: Project) => p.featured)
          .map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} isFeatured={true} />
          ))}

        <h3 className="text-2xl font-bold mb-8 mt-16 text-center">Other Notable Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p: Project) => !p.featured)
            .map((project: Project, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
