"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    id: 1,
    degree: "MSc in Computer Science",
    institution: "University of Manchester",
    location: "Manchester, UK",
    period: "2015 - 2017",
    description:
      "Specialized in Software Engineering and Distributed Systems. Completed thesis on 'Scalable Architectures for Real-time Data Processing' with distinction.",
    achievements: [
      "Graduated with Distinction (GPA: 3.9/4.0)",
      "Awarded the Outstanding Academic Achievement Scholarship",
      "Published research paper on distributed systems optimization",
      "Led a team project developing a cloud-based collaboration tool",
    ],
    courses: [
      "Advanced Algorithms",
      "Distributed Systems",
      "Cloud Computing",
      "Machine Learning",
      "Software Architecture",
    ],
  },
  {
    id: 2,
    degree: "BSc in Computer Science",
    institution: "University of Birmingham",
    location: "Birmingham, UK",
    period: "2012 - 2015",
    description:
      "Comprehensive program covering fundamentals of computer science, programming, and software development. Focused on practical applications and theoretical foundations.",
    achievements: [
      "First Class Honours (GPA: 3.8/4.0)",
      "Dean's List for Academic Excellence for all three years",
      "Developed an open-source library for data visualization",
      "Completed internship at a leading tech company",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Development",
      "Operating Systems",
      "Software Engineering",
    ],
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            My academic background and qualifications in computer science and software engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                        <GraduationCap className="text-blue-500" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
                    </div>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 mt-2 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </Badge>
                  </div>

                  <div className="flex items-center mb-4 ml-14">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="mx-2 text-slate-500">•</span>
                    <MapPin size={16} className="text-slate-400 mr-1" />
                    <span className="text-slate-300 text-sm">{edu.location}</span>
                  </div>

                  <div className="ml-14">
                    <p className="text-slate-300 mb-4">{edu.description}</p>

                    <h4 className="font-semibold mb-2 text-blue-300">Achievements:</h4>
                    <ul className="list-disc pl-5 text-slate-300 mb-4">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold mb-2 text-blue-300">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <Badge key={i} variant="outline" className="bg-slate-700 text-slate-300 border-slate-600">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
