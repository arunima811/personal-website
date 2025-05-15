"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface NewsItem {
  title: string
  description: string
  url: string
  publishedAt: string
  source: {
    name: string
  }
}

export function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNews() {
      try {
        // In a real application, you would fetch from a real news API
        // For this example, we'll simulate a delay and use mock data
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const mockNews: NewsItem[] = [
          {
            title: "The Future of Web Development: What's Next for Frontend Frameworks",
            description:
              "An in-depth look at the evolving landscape of frontend development and what to expect in the coming years.",
            url: "#",
            publishedAt: "2025-05-10T14:30:00Z",
            source: { name: "Tech Insights" },
          },
          {
            title: "AI Integration in Modern Applications: Best Practices",
            description:
              "Learn how to effectively integrate AI capabilities into your applications while maintaining performance and user experience.",
            url: "#",
            publishedAt: "2025-05-08T09:15:00Z",
            source: { name: "AI Weekly" },
          },
          {
            title: "The Rise of Serverless Architecture: Benefits and Challenges",
            description: "Exploring how serverless computing is changing the way we build and deploy applications.",
            url: "#",
            publishedAt: "2025-05-05T11:45:00Z",
            source: { name: "Cloud Computing Today" },
          },
          {
            title: "Accessibility in Web Design: Why It Matters More Than Ever",
            description: "A comprehensive guide to making your web applications accessible to all users.",
            url: "#",
            publishedAt: "2025-05-03T16:20:00Z",
            source: { name: "UX Design Hub" },
          },
        ]

        setNews(mockNews)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching news:", error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-4 w-1/3" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {news.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              {item.source.name} • {formatDate(item.publishedAt)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
          <CardFooter>
            <Link
              href={item.url}
              className="inline-flex items-center text-sm font-medium text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read full article <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
