"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Brain, Layers, BookOpen, FileText } from "lucide-react"
import Link from "next/link"

export function HistoryLog() {
  const historyItems = [
    {
      id: 1,
      date: "Vandaag, 10:30",
      type: "Privacy Alert",
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10",
      title: "Persoonlijke gegevensverwerking",
      description: "Charlie heeft mogelijke privacyproblemen gedetecteerd in je recente project.",
      actions: [
        { label: "Bekijk prompt", href: "/review-prompt" },
        { label: "Vraag Charlie", href: "#", action: "chat" },
        { label: "Start quiz", href: "/quiz" },
      ],
    },
    {
      id: 2,
      date: "Gisteren, 14:15",
      type: "Bias Detection",
      icon: Brain,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      title: "Genderbias in taalgebruik",
      description: "Je prompt bevatte mogelijke genderbias in professionele beschrijvingen.",
      actions: [
        { label: "Bekijk prompt", href: "/review-prompt" },
        { label: "Vraag Charlie", href: "#", action: "chat" },
      ],
    },
    {
      id: 3,
      date: "10 mei, 9:45",
      type: "Ethics Dilemma",
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10",
      title: "Onthulling van AI-gegenereerde content",
      description: "Je hebt het dilemma over het onthullen van AI-gegenereerde content aan klanten voltooid.",
      actions: [
        { label: "Bekijk reactie", href: "#" },
        { label: "Bekijk community discussie", href: "/community-discussion" },
      ],
    },
    {
      id: 4,
      date: "8 mei, 11:20",
      type: "Privacy Quiz",
      icon: FileText,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      title: "GDPR Compliance",
      description: "Je scoorde 3/5 op de GDPR compliance quiz.",
      actions: [
        { label: "Bekijk antwoorden", href: "/quiz" },
        { label: "Herhaal quiz", href: "/quiz" },
      ],
    },
    {
      id: 5,
      date: "7 mei, 15:45",
      type: "Transparency Alert",
      icon: Layers,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      title: "AI-onthulling ontbreekt",
      description: "Charlie merkte op dat je mogelijk AI-gebruik in je project moet onthullen.",
      actions: [
        { label: "Bekijk prompt", href: "/review-prompt" },
        { label: "Lees meer", href: "/article" },
      ],
    },
    {
      id: 6,
      date: "5 mei, 10:15",
      type: "Article Read",
      icon: BookOpen,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
      title: "Anonymization Best Practices",
      description: "Je hebt dit artikel uit de kennisbank gelezen.",
      actions: [
        { label: "Lees opnieuw", href: "/article" },
        { label: "Gerelateerde artikelen", href: "/knowledge-base" },
      ],
    },
  ]

  const handleAskCharlie = () => {
    if (window.openCharlie) {
      window.openCharlie()
    }
  }

  return (
    <div className="space-y-4">
      {historyItems.map((item) => (
        <Card key={item.id} className="border-border bg-card/50 transition-opacity duration-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className={`mt-0.5 rounded-md ${item.bgColor} p-2`}>
                <item.icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>

              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>

                <p className="text-sm text-muted-foreground">{item.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.actions.map((action) => (
                    <Button
                      key={action.label}
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={action.action === "chat" ? handleAskCharlie : undefined}
                      asChild={!action.action}
                    >
                      {action.action === "chat" ? (
                        <span>{action.label}</span>
                      ) : (
                        <Link href={action.href}>{action.label}</Link>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
