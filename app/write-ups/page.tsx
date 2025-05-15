import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    id: 1,
    title: "Optimizing Elasticsearch for Large-Scale Data Storage",
    excerpt:
      "Learn how to optimize Elasticsearch for handling terabytes of data with high performance and reliability.",
    date: "May 10, 2025",
    category: "Database",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=400&text=Elasticsearch",
  },
  {
    id: 2,
    title: "Building Resilient Data Pipelines with Kafka",
    excerpt:
      "An in-depth guide to creating robust, scalable data pipelines using Apache Kafka for high-throughput event processing.",
    date: "April 28, 2025",
    category: "Data Engineering",
    readTime: "15 min read",
    image: "/placeholder.svg?height=200&width=400&text=Kafka",
  },
  {
    id: 3,
    title: "AWS S3 Migration Strategies for Petabyte-Scale Data",
    excerpt:
      "Practical techniques for migrating massive datasets to AWS S3 while ensuring zero data loss and minimal downtime.",
    date: "April 15, 2025",
    category: "Cloud",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400&text=AWS+S3",
  },
  {
    id: 4,
    title: "Containerization with Docker and Kubernetes",
    excerpt: "A comprehensive guide to containerizing applications and orchestrating them with Kubernetes.",
    date: "March 30, 2025",
    category: "DevOps",
    readTime: "18 min read",
    image: "/placeholder.svg?height=200&width=400&text=Kubernetes",
  },
  {
    id: 5,
    title: "Reinforcement Learning for Spatial Navigation",
    excerpt:
      "Exploring how reinforcement learning can be used to model spatial navigation in computational neuroscience.",
    date: "March 15, 2025",
    category: "Machine Learning",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400&text=RL",
  },
  {
    id: 6,
    title: "Real-time Anomaly Detection with Machine Learning",
    excerpt: "Building systems that can detect anomalies in real-time using various machine learning techniques.",
    date: "February 28, 2025",
    category: "Data Science",
    readTime: "14 min read",
    image: "/placeholder.svg?height=200&width=400&text=Anomaly+Detection",
  },
]

const categories = ["All", "Database", "Data Engineering", "Cloud", "DevOps", "Machine Learning", "Data Science"]

export default function WriteUpsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Write-ups & Articles</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-8">
        Technical articles, tutorials, and insights on data engineering, distributed systems, and machine learning.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="pl-8" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Featured+Article"
                  alt="Featured article"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>Data Engineering</Badge>
                  <span className="text-sm text-muted-foreground">May 12, 2025</span>
                  <span className="text-sm text-muted-foreground">20 min read</span>
                </div>
                <CardTitle className="text-2xl">Scaling Data Infrastructure: Lessons from the Trenches</CardTitle>
                <CardDescription className="text-base">
                  Insights and best practices from building and scaling data infrastructure at enterprise companies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Drawing from my experience at Goldman Sachs and Dell-EMC, this article explores the challenges and
                  solutions in scaling data infrastructure to handle petabytes of data. From database optimization to
                  event processing systems, I share practical lessons learned from real-world implementations.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/write-ups/scaling-data-infrastructure">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col">
                <div className="aspect-video relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/write-ups/${article.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="default" size="icon">
                <span className="sr-only">Page 1</span>1
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Page 2</span>2
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Page 3</span>3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-64 lg:w-80 space-y-8">
          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/images/profile-photo.jpeg"
                  alt="Arunima Shukla"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Arunima Shukla is a Software and Data Engineer with experience at Goldman Sachs and Dell-EMC. She
                specializes in distributed systems, data engineering, and machine learning, with a focus on building
                scalable, resilient infrastructure.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/">View Full Bio</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Popular Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Elasticsearch</Badge>
                <Badge variant="secondary">Kafka</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Data Engineering</Badge>
                <Badge variant="secondary">Distributed Systems</Badge>
                <Badge variant="secondary">Performance</Badge>
                <Badge variant="secondary">Scalability</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card>
            <CardHeader>
              <CardTitle>Newsletter</CardTitle>
              <CardDescription>Subscribe to get notified about new articles and updates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="email" placeholder="Enter your email" />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                Subscribe
              </Button>
              <p className="text-xs text-muted-foreground">I respect your privacy. No spam, ever.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
