import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Brain, Layers, PartyPopper } from "lucide-react"
import Link from "next/link"

export function ActivityOverview() {
  return (
    <Card className="border-border bg-card/50 md:col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Activiteitenoverzicht</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="rounded-md bg-amber-500/10 p-1.5">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Privacy Alerts</h3>
            <p className="text-xs text-muted-foreground">3 deze maand</p>
            <Link href="/quiz" className="mt-1 text-xs text-primary hover:underline">
              Doe Privacy Quiz
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-md bg-purple-500/10 p-1.5">
            <Brain className="h-4 w-4 text-purple-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Bias Detection</h3>
            <p className="text-xs text-muted-foreground">2 detecties</p>
            <Link href="/review-prompt" className="mt-1 text-xs text-primary hover:underline">
              Bekijk prompt
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-md bg-blue-500/10 p-1.5">
            <Layers className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Transparency Alerts</h3>
            <p className="text-xs text-muted-foreground">1 waarschuwing</p>
            <Link href="/article" className="mt-1 text-xs text-primary hover:underline">
              Lees meer
            </Link>
          </div>
        </div>

        <div className="mt-2 flex items-start gap-3 rounded-md bg-green-500/10 p-3">
          <PartyPopper className="h-4 w-4 text-green-500" />
          <p className="text-xs">Geweldige voortgang! Je hebt deze maand 5 prompts geanonimiseerd.</p>
        </div>
      </CardContent>
    </Card>
  )
}
