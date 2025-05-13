import Hero from "@/components/hero"
import Specializations from "@/components/specializations"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Research from "@/components/research"
import Projects from "@/components/projects"
import BlogSection from "@/components/blog-section"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Specializations />
      <Experience />
      <Skills />
      <Education />
      <Research />
      <Projects />
      <BlogSection />
      <div id="contact">
        <ContactCTA />
      </div>
    </div>
  )
}
