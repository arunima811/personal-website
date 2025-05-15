import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function BioPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-6">Professional Bio</h1>
      <Separator className="my-6" />

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I am a seasoned Software Engineer with over 8 years of experience building web applications and digital
              experiences. My expertise spans frontend and backend development, with a focus on creating accessible,
              performant, and user-friendly applications.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Throughout my career, I've worked with startups and enterprise companies across various industries
              including fintech, healthcare, and e-commerce. I'm passionate about using technology to solve real-world
              problems and create meaningful impact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Expertise</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript, CSS/Tailwind, Accessibility
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Backend Development</h3>
                  <p className="text-sm text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB, API Design</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">DevOps & Cloud</h3>
                  <p className="text-sm text-muted-foreground">AWS, Vercel, Docker, CI/CD, Infrastructure as Code</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Technical Writing</h3>
                  <p className="text-sm text-muted-foreground">
                    Documentation, Tutorials, Blog Posts, Technical Guides
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Professional Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code that solves real problems. My approach to development is
              pragmatic – I focus on delivering value while maintaining high standards for code quality, performance,
              and user experience.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I'm a strong advocate for continuous learning and knowledge sharing. I regularly contribute to open source
              projects and write technical articles to give back to the community that has helped me grow throughout my
              career.
            </p>
          </section>
        </div>

        <div className="space-y-6">
          <div className="sticky top-24">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Professional headshot"
              width={400}
              height={400}
              className="rounded-lg object-cover mb-6"
            />

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </div>

              <div>
                <h3 className="font-medium">Education</h3>
                <p className="text-sm text-muted-foreground">
                  M.S. Computer Science
                  <br />
                  Stanford University
                </p>
              </div>

              <div>
                <h3 className="font-medium">Languages</h3>
                <p className="text-sm text-muted-foreground">
                  English (Native)
                  <br />
                  Spanish (Conversational)
                </p>
              </div>

              <div>
                <h3 className="font-medium">Interests</h3>
                <p className="text-sm text-muted-foreground">Open Source, Hiking, Photography, Reading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
