import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock } from "lucide-react"

export function KnowledgeArticles() {
  const articles = [
    {
      id: 1,
      title: "Anonymization Best Practices",
      description: "Learn how to properly anonymize data to protect privacy while maintaining utility.",
      category: "Privacy",
      readTime: "5 min",
      isNew: true,
    },
    {
      id: 2,
      title: "Understanding Gender Bias in AI",
      description: "Explore how gender bias manifests in AI systems and strategies to mitigate it.",
      category: "Bias",
      readTime: "8 min",
      isNew: false,
    },
    {
      id: 3,
      title: "EU AI Act: Key Requirements",
      description: "A comprehensive overview of the EU AI Act and its implications for AI practitioners.",
      category: "AI Act",
      readTime: "12 min",
      isNew: true,
    },
    {
      id: 4,
      title: "Transparency in AI-Generated Content",
      description: "Best practices for disclosing AI-generated content to users and clients.",
      category: "Transparency",
      readTime: "6 min",
      isNew: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {articles.map((article) => (
        <Card key={article.id} className="border-border bg-card/50">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-base">{article.title}</CardTitle>
                <CardDescription className="mt-1 line-clamp-2">{article.description}</CardDescription>
              </div>
              {article.isNew && <Badge className="bg-primary/10 text-primary hover:bg-primary/20">New</Badge>}
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
              <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Read article</span>
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
