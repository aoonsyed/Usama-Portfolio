import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <span className="gradient-text">Usama Haider</span>
              </h1>
              <p className="text-xl text-muted-foreground">Senior Software Engineer</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Python | Django | Flask | Elixir | Phoenix | Node | JS with 5 years of experience in producing robust code
              for high-volume businesses.
            </p>
            <div>
              <Button asChild size="lg">
                <Link href="/#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link href="https://github.com/farvakhursheed" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/farvakhursheed" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:farvakhursheed786@gmail.com">
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-background rounded-2xl border-2 border-accent/50 shadow-xl overflow-hidden">
                <Image
                  src="/images/usama.jpg"
                  alt="Usama Haider"
                  width={400}
                  height={400}
                  className="object-cover transform scale-125"
                  style={{ objectPosition: 'center' }}
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium text-center">Usama Haider</p>
                  <p className="text-white/80 text-sm text-center">Senior Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
