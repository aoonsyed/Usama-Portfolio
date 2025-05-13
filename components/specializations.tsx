import { Code, Database, Brain, Globe, Users, Layers, Cpu } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Specializations() {
  const skills = [
    { name: "Python", level: 95 },
    { name: "Django", level: 90 },
    { name: "Flask", level: 85 },
    { name: "FastAPI", level: 80 },
    { name: "Elixir", level: 90 },
    { name: "Phoenix", level: 70 },
    { name: "Node.js", level: 75 },
    { name: "JavaScript", level: 80 },
  ]

  return (
    <section id="specializations" className="py-16 scroll-mt-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="inline-block mb-6">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 border-none">
                5+ Years of Experience
              </Badge>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Professional <span className="gradient-text">Profile</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Experienced and versatile <span className="font-semibold text-foreground">Senior Software Engineer</span> with 5+ years of hands-on expertise.
                </li>
                <li>
                  Specialized in full-stack web & mobile app development, custom software, and backend systems.
                </li>
                <li>
                  Proficient in Python (Django, FastAPI, Flask), Elixir/Phoenix, Node.js, React, React Native.
                </li>
                <li>
                  Worked with multiple databases: PostgreSQL, MySQL, MongoDB.
                </li>
                <li>
                  Recently developed a desktop time-tracking app using Rust.
                </li>
                <li>
                  Delivered scalable solutions across gaming, real estate, healthcare, government, education, and e-commerce.
                </li>
                <li>
                  Strong in system architecture, API design, DevOps, and AI/ML integration.
                </li>
                <li>
                  Leadership in project management and startup co-founding roles—aligning software with business goals.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              Technical Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  Backend Development
                </h4>
                <div className="space-y-3">
                  {skills.slice(0, 4).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Other Technologies
                </h4>
                <div className="space-y-3">
                  {skills.slice(4).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Database className="h-4 w-4 text-primary" />
                Database & Infrastructure
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Docker",
                  "AWS",
                  "Git",
                  "CI/CD",
                  "REST APIs",
                  "gRPC",
                  "Rust",
                ].map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-accent/10 text-accent hover:bg-accent/20 border-none"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
