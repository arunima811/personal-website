"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Article {
  id: number
  title: string
  date: string
  readTime: string
  tags: string[]
  url: string
  source: string
}

export function ArticleFeed() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        // In a real application, you would fetch from GitHub or another source
        // For this example, we'll simulate a delay and use mock data
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const mockArticles: Article[] = [
          {
            id: 1,
            title: "Optimizing Elasticsearch for Large-Scale Data Storage",
            date: "May 10, 2025",
            readTime: "12 min",
            tags: ["Elasticsearch", "Database", "Performance"],
            url: "https://github.com/arunima-shukla/elasticsearch-optimization",
            source: "GitHub",
          },
          {
            id: 2,
            title: "Building Resilient Data Pipelines with Kafka",
            date: "April 28, 2025",
            readTime: "15 min",
            tags: ["Kafka", "Data Engineering", "Streaming"],
            url: "https://github.com/arunima-shukla/kafka-pipelines",
            source: "GitHub",
          },
          {
            id: 3,
            title: "Containerization with Docker and Kubernetes",
            date: "April 15, 2025",
            readTime: "10 min",
            tags: ["Docker", "Kubernetes", "DevOps"],
            url: "https://github.com/arunima-shukla/containerization-guide",
            source: "GitHub",
          },
          {
            id: 4,
            title: "AWS S3 Migration Strategies for Petabyte-Scale Data",
            date: "March 30, 2025",
            readTime: "18 min",
            tags: ["AWS", "S3", "Migration", "Big Data"],
            url: "https://github.com/arunima-shukla/s3-migration",
            source: "GitHub",
          },
          {
            id: 5,
            title: "Reinforcement Learning for Spatial Navigation",
            date: "March 15, 2025",
            readTime: "8 min",
            tags: ["RL", "Machine Learning", "Neuroscience"],
            url: "https://github.com/arunima-shukla/rl-navigation",
            source: "GitHub",
          },
          {
            id: 6,
            title: "Real-time Anomaly Detection with Machine Learning",
            date: "February 28, 2025",
            readTime: "14 min",
            tags: ["Anomaly Detection", "ML", "Real-time"],
            url: "https://github.com/arunima-shukla/anomaly-detection",
            source: "GitHub",
          },
        ]

        setArticles(mockArticles)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching articles:", error)
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  // Get all unique tags
  const allTags = Array.from(new Set(articles.flatMap((article) => article.tags))).sort()

  // Filter articles by active tag
  const filteredArticles = activeTag ? articles.filter((article) => article.tags.includes(activeTag)) : articles

  // Tag colors mapping
  const tagColors: Record<string, string> = {
    Elasticsearch: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    Database: "bg-pink-100 text-pink-800 hover:bg-pink-200",
    Performance: "bg-green-100 text-green-800 hover:bg-green-200",
    Kafka: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    "Data Engineering": "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
    Streaming: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
    Docker: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Kubernetes: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    DevOps: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    AWS: "bg-orange-100 text-orange-800 hover:bg-orange-200",
    S3: "bg-orange-100 text-orange-800 hover:bg-orange-200",
    Migration: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    "Big Data": "bg-red-100 text-red-800 hover:bg-red-200",
    RL: "bg-violet-100 text-violet-800 hover:bg-violet-200",
    "Machine Learning": "bg-purple-100 text-purple-800 hover:bg-purple-200",
    ML: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    Neuroscience: "bg-pink-100 text-pink-800 hover:bg-pink-200",
    "Anomaly Detection": "bg-red-100 text-red-800 hover:bg-red-200",
    "Real-time": "bg-green-100 text-green-800 hover:bg-green-200",
  }

  // Default color for tags not in the mapping
  const defaultTagColor = "bg-gray-100 text-gray-800 hover:bg-gray-200"

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
        <div className="rounded-md border">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b transition-colors">
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-20" />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-16" />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-24" />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium">
                    <Skeleton className="h-4 w-16" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b transition-colors">
                    <td className="p-4 align-middle">
                      <Skeleton className="h-6 w-full max-w-[300px]" />
                    </td>
                    <td className="p-4 align-middle">
                      <Skeleton className="h-6 w-20" />
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex gap-1">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <Skeleton className="h-6 w-16" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Tags filter */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={activeTag === null ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveTag(null)}
          className={activeTag === null ? "bg-gradient-to-r from-purple-600 to-pink-500" : ""}
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={activeTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={activeTag === tag ? "bg-gradient-to-r from-purple-600 to-pink-500" : ""}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Articles table */}
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[40%]">Title</TableHead>
              <TableHead className="w-[15%]">Date</TableHead>
              <TableHead className="w-[30%]">Tags</TableHead>
              <TableHead className="w-[15%]">Read Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow
                key={article.id}
                className="hover:bg-purple-50 cursor-pointer transition-colors"
                onClick={() => window.open(article.url, "_blank")}
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span>{article.title}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={`${tagColors[tag] || defaultTagColor} border-none`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
