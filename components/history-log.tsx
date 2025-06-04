import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Brain, Shield } from "lucide-react"

export function HistoryLog() {
  const historyItems = [
    {
      id: 1,
      date: "Today, 10:30 AM",
      type: "Privacy Alert",
      icon: Shield,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      title: "Personal Data Handling",
      description: "Charlie detected potential privacy concerns in your recent project.",
      actions: ["Review Prompt", "Start Quiz"],
    },
    {
      id: 2,
      date: "Yesterday, 2:15 PM",
      type: "Bias Detection",
      icon: Brain,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      title: "Gender Bias in Language",
      description: "Your prompt contained potential gender bias in professional descriptions.",
      actions: ["Review Prompt", "Ask Charlie"],
    },
    {
      id: 3,
      date: "May 10, 9:45 AM",
      type: "Ethics Dilemma",
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10",
      title: "AI-Generated Content Disclosure",
      description: "You completed the dilemma about disclosing AI-generated content to clients.",
      actions: ["View Response", "Learn More"],
    },
    {
      id: 4,
      date: "May 8, 11:20 AM",
      type: "Privacy Quiz",
      icon: Shield,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      title: "GDPR Compliance",
      description: "You scored 3/5 on the GDPR compliance quiz.",
      actions: ["Retake Quiz", "View Answers"],
    },
  ]

  return (
    <div className="space-y-4">
      {historyItems.map((item) => (
        <Card key={item.id} className="border-border bg-card/50">
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

                <div className="mt-3 flex gap-2">
                  {item.actions.map((action) => (
                    <Button key={action} variant="ghost" size="sm" className="h-7 text-xs">
                      {action}
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
