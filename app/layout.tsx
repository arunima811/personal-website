import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arunima Shukla | Software and Data Engineer",
  description: "Personal website of Arunima Shukla, Software and Data Engineer",
    generator: 'v0.dev'
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Cover Letter", href: "/cover-letter" },
  { name: "Write-ups", href: "/write-ups" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-transparent bg-clip-text">
                    Arunima Shukla
                  </span>
                </Link>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="relative">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="border-l-purple-500">
                    <nav className="flex flex-col gap-4 mt-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-purple-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Arunima Shukla. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-500 transition-colors">
                    Twitter
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com"
                    className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
