import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Server, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <h2 className="section-heading text-center">About Me</h2>
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg text-center mb-6">
            Full Stack Developer with 6 years of expertise in Python frameworks (Django, Flask, FastAPI) and frontend
            technologies (JavaScript, React). Specialized in creating robust, scalable solutions with clean,
            maintainable code.
          </p>
          <p className="text-lg text-center">
            Experienced in leading development teams and managing project lifecycles from concept to delivery.
            Passionate about leveraging cutting-edge technologies to create impactful software solutions that drive
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="card-hover">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                Expert in Python, Django, Flask, and FastAPI for building robust backend systems.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">
                Skilled in JavaScript, React, and modern CSS frameworks for creating responsive UIs.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <p className="text-muted-foreground">
                Proficient in MySQL, PostgreSQL, SQLite, and MongoDB for efficient data storage.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
              <p className="text-muted-foreground">
                Experienced in leading development teams and managing project lifecycles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
