"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock } from "lucide-react"
import Link from "next/link"

interface KnowledgeArticlesProps {
  articles: any[]
}

export function KnowledgeArticles({ articles }: KnowledgeArticlesProps) {
  // Track read articles
  const [readArticles, setReadArticles] = useState<number[]>([])

  // Load read articles from localStorage
  useEffect(() => {
    const savedReadArticles = localStorage.getItem("readArticles")
    if (savedReadArticles) {
      setReadArticles(JSON.parse(savedReadArticles))
    }
  }, [])

  // Function to mark an article as read
  const markAsRead = (articleId: number) => {
    if (!readArticles.includes(articleId)) {
      const updatedReadArticles = [...readArticles, articleId]
      setReadArticles(updatedReadArticles)
      localStorage.setItem("readArticles", JSON.stringify(updatedReadArticles))
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {articles.map((article) => (
        <Card key={article.id} className="border-border bg-card/50 transition-opacity duration-200">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-base">{article.title}</CardTitle>
                <CardDescription className="mt-1 line-clamp-2">{article.description}</CardDescription>
              </div>
              {article.isNew && <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Nieuw</Badge>}
              {readArticles.includes(article.id) && (
                <Badge variant="outline" className="bg-muted/50">
                  Gelezen
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {article.category}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/article"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                onClick={() => markAsRead(article.id)}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Lees artikel</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
