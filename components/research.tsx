import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, Clock, Users, FileText } from "lucide-react"
import Image from "next/image"

export default function Research() {
  return (
    <section id="research" className="py-20 bg-muted/10 scroll-mt-16">
      <div className="container px-4 md:px-6">
        {/* SECTION HEADER like "Featured Projects" */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A powerful desktop tracker and web dashboard for real-time monitoring, task tracking, and employee productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1657060169906-266c8ca36da5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVnJTIwdHJhY2tpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Bugtrackin App"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">Bugtrackin Desktop + Dashboard</h3>
              <p className="text-white/80 text-sm">https://bugdev.bugtrackin.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">
              Bugtrackin – All-in-One Remote Workforce Monitoring Platform
            </h3>

            <p className="text-lg text-muted-foreground">
              Bugtrackin is a web app designed for remote companies to manage their employees’ time, productivity, projects, leaves, and payments — backed by a desktop tracking application with screenshot capture and detailed reporting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart User Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Admin can add, edit, or delete users and assign projects to team members
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Daily & Weekly Reporting</h4>
                    <p className="text-sm text-muted-foreground">
                      Generate downloadable reports on hours, screenshots, and payment records
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Activity Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Capture screenshots and log productivity with a desktop tracker
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Leave & Overtime Flow</h4>
                    <p className="text-sm text-muted-foreground">
                      Admin dashboard to approve/reject time-off, overtime, and view project progress
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
