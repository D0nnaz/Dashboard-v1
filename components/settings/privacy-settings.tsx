import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function PrivacySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gegevensverzameling</CardTitle>
        <CardDescription>Beheer welke gegevens Charlie kan inzien en analyseren</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="collect-usage">Gebruikspatronen</Label>
              <p className="text-xs text-muted-foreground">
                Sta Charlie toe om te analyseren hoe je met het platform interacteert
              </p>
            </div>
            <Switch id="collect-usage" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="collect-quiz">Quiz antwoorden</Label>
              <p className="text-xs text-muted-foreground">
                Sta Charlie toe om je quiz antwoorden op te slaan en te analyseren
              </p>
            </div>
            <Switch id="collect-quiz" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="collect-dilemma">Dilemma reacties</Label>
              <p className="text-xs text-muted-foreground">
                Sta Charlie toe om je ethische dilemma reflecties op te slaan en te analyseren
              </p>
            </div>
            <Switch id="collect-dilemma" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="collect-chat">Chat gesprekken</Label>
              <p className="text-xs text-muted-foreground">
                Sta Charlie toe om je gesprekken op te slaan en te analyseren
              </p>
            </div>
            <Switch id="collect-chat" defaultChecked />
          </div>
        </div>

        <div className="rounded-md bg-muted p-3">
          <p className="text-sm">
            Charlie gebruikt je gegevens alleen om je ethische leerervaring te verbeteren. Je gegevens worden nooit
            gedeeld met derden.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
