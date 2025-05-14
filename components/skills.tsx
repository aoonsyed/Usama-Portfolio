import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Elixir", level: 70 },
        { name: "Rust", level: 75 },
         { name: "Slint", level: 75 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Django", level: 95 },
        { name: "Flask", level: 90 },
        { name: "Rest Framework", level: 75 },
        { name: "FastAPI", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Phoenix", level: 70 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "SQLite", level: 85 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "REST APIs", level: 95 },
        { name: "gRPC", level: 85 },
      ],
    },
  ]

  const otherSkills = [
    "OOP",
    "ORM",
    "B2B Software",
    "Software Engineering",
    "Bootstrap",
    "Tailwind CSS",
    "Microservices",
    "Team Lead",
    "Realtime",
    "Sockets",
    "DBMS",
    "Cyber Security",
    "Malware",
    "CSS",
    "HTML",
    "WebRTC",
    "Unit Testing",
    "UI",
    "UX",
    "Finance",
    "Query Optimization",
    "People Management",
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 card-hover">
          <CardHeader>
            <CardTitle>Other Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, idx) => (
                <Badge key={idx} variant="outline" className="text-sm py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
