import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArticleFeed } from "@/components/article-feed"
import { SkillsGraph } from "@/components/skills-graph"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section with Bio */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-amber-500/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Photo with different shape - rounded rectangle with shadow */}
            <div className="mb-8 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-30"></div>
              <div className="relative">
                <Image
                  src="/images/profile-photo.jpeg"
                  alt="Arunima Shukla"
                  width={280}
                  height={280}
                  className="rounded-2xl object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>

            {/* Name and title with gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-transparent bg-clip-text">
              Arunima Shukla
            </h1>
            <p className="text-xl text-muted-foreground mb-6">Software and Data Engineer</p>

            {/* Contact links in a row */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5">
                <Mail className="h-3.5 w-3.5" />
                <span>shukla.arunima0811@gmail.com</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5">
                <Phone className="h-3.5 w-3.5" />
                <span>+1-812-606-9650</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5">
                <Linkedin className="h-3.5 w-3.5" />
                <Link href="https://linkedin.com" className="hover:text-purple-500">
                  LinkedIn
                </Link>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1.5">
                <Github className="h-3.5 w-3.5" />
                <Link href="https://github.com" className="hover:text-purple-500">
                  GitHub
                </Link>
              </Badge>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                asChild
              >
                <Link href="/resume">
                  View Resume <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 hover:text-purple-600"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </Link>
              </Button>
            </div>
          </div>

          {/* About Me section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Software and Data Engineer with experience in distributed systems, platform infrastructure, and
                machine learning. Currently working at Goldman Sachs as a Software Development Engineer II, I specialize
                in building resilient data pipelines and optimizing database performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a background at Dell-EMC and a Master's in Data Science from Indiana University, I bring expertise
                in both software engineering and data science. I'm passionate about creating efficient, scalable
                solutions that solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Graph Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Who I Am & What I Do
          </h2>
          <p className="text-muted-foreground">My roles and areas of expertise</p>
        </div>
        <Separator className="my-4" />
        <SkillsGraph />
      </section>

      {/* Article Feed */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Latest Articles
          </h2>
          <p className="text-muted-foreground">My recent publications and write-ups</p>
        </div>
        <Separator className="my-4" />
        <ArticleFeed />
      </section>
    </div>
  )
}
