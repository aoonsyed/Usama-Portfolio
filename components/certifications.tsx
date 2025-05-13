import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Python Boot camp: Python for beginners",
      issuer: "Udemy",
      date: "2022",
    },
    {
      title: "Javascript Boot camp: JS for beginners",
      issuer: "Coursera",
      date: "2021",
    },
    {
      title: "Cyber Security Training",
      issuer: "CompTIA",
      date: "2023",
    },
    {
      title: "Elixir Course",
      issuer: "Pluralsight",
      date: "2022",
    },
  ]

  return (
    <section id="certifications" className="py-16 scroll-mt-16 bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-8 w-8 text-accent" />
          <h2 className="text-3xl font-bold gradient-text">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden card-hover border-l-4 border-l-accent">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-5 w-5 text-accent mt-1" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
