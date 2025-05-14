import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Usama Haider</h3>
            <p className="text-muted-foreground">
              Senior Software Engineer with 6 years of experience in web and API development.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#specializations" className="text-muted-foreground hover:text-primary">
                  Specializations
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-muted-foreground hover:text-primary">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-muted-foreground hover:text-primary">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:usamahaiderr123@gmail.com" className="hover:text-primary">
                 usamahaiderr123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+447404586399" className="hover:text-primary">
                  +44 7440 010878
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Cheltenham, United Kingdom</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/UsamaHaide0786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/usama-haider-1697aa1a1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:usamahaiderr123@gmail.com"
                className="text-muted-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Usama Haider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
