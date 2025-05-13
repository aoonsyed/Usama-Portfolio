import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Gigaclear",
      period: "Jan 2025 - Present",
      location: "London, UK (Remote)",
      responsibilities: [
        "Designed and deployed scalable Python microservices with advanced features",
        "Developed and maintained containerized applications using Docker and managed deployments with Kubernetes or serverless platforms.",
        "Collaborated cross-functionally with product, DevOps, and QA teams to align on delivery and system reliability.",
        "Integrated automated testing frameworks to ensure software quality",
        "Conducted code reviews, championed best practices in code structure, testing, and performance optimisation.",
      ],
      products: ["https://gigaclear.com/network-dashboard"],
      skills: ["Python", "Django", "Docker", "Kubernetes", "AWS", "PostgreSQL", "GraphQL", "Redis"],
    },
    {
      title: "Senior Software Engineer",
      company: "Founders Network",
      period: "Jan 2023 - Dec 2024",
      location: "London, UK (Remote)",
      responsibilities: [
        "Reduced API response times by 40% through query optimization and caching strategies",
        "Implemented a real-time notification system using WebSockets",
        "Led the migration from monolithic architecture to microservices",
        "Mentored junior developers and established code review processes",
      ],
      products: ["https://foundersnetwork.com/platform"],
      skills: ["Python", "Django REST Framework", "React", "PostgreSQL", "Redis", "AWS", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Empowering Confident Youth",
      period: "Mar 2021 - Dec 2022",
      location: "Manchester, UK (Hybrid)",
      responsibilities: [
        "Designed and implemented a secure user authentication system",
        "Created an interactive course management system with progress tracking",
        "Optimized media delivery for various devices and connection speeds",
        "Implemented comprehensive analytics dashboards for tracking user progress",
      ],
      products: ["https://ecy.org.uk/learning-platform"],
      skills: ["Python", "Django", "React", "Redux", "PostgreSQL", "Tailwind CSS", "AWS"],
    },
    {
      title: "Backend Developer",
      company: "Chamabora",
      period: "Jun 2019 - Feb 2021",
      location: "Bristol, UK (Remote)",
      responsibilities: [
        "Built high-performance APIs handling 1M+ daily requests",
        "Implemented geospatial search using PostGIS",
        "Designed a scalable database schema for complex relationships",
        "Created a real-time notification system using Phoenix Channels",
      ],
      products: ["https://chamabora.io/community-app"],
      skills: ["Elixir", "Phoenix", "PostgreSQL", "PostGIS", "GraphQL", "AWS"],
    },
    {
      title: "Software Developer",
      company: "Maat Inc",
      period: "Aug 2017 - May 2019",
      location: "Edinburgh, UK",
      responsibilities: [
        "Implemented end-to-end encryption for sensitive documents",
        "Designed a flexible workflow engine with visual process builder",
        "Created an intuitive interface for non-technical users",
        "Built a comprehensive versioning system with blockchain verification",
      ],
      products: ["https://securefiles.maatinc.com", "https://workflowbuilder.maatinc.com"],
      skills: ["Python", "Django", "React", "Docker", "PostgreSQL", "Blockchain", "Redux"],
    },
  ]

  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading text-center">Work Experience</h2>
        <div className="mt-12 relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-accent transform -translate-x-1/2"></div>

              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {exp.products?.length > 0 && (
                    <div className="mb-4">
                      <p className="font-medium mb-2">Products:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.products.map((product, idx) => (
                          <Badge key={idx} variant="outline">
                            <a href={product} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                              {new URL(product).hostname.replace("www.", "")}
                            </a>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.skills?.length > 0 && (
                    <div>
                      <p className="font-medium mb-2">Skills & Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-muted text-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
