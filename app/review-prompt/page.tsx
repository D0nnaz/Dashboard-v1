"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Copy, AlertTriangle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ReviewPromptPage() {
  const [editMode, setEditMode] = useState(false)
  const [suggestion, setSuggestion] = useState(
    "Please create professional headshots for a diverse team of software engineers, ensuring equal representation of different genders, ethnicities, and ages.",
  )

  const originalPrompt = "Please create headshots for my engineering team. Make them look professional and competent."

  const handleCopy = () => {
    navigator.clipboard.writeText(suggestion)
    // In a real app, you might show a toast notification here
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6">
      <Header />

      <div className="mt-8">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Terug naar dashboard
            </Link>
          </Button>
        </div>

        <Card className="mx-auto max-w-4xl">
          <CardHeader className="border-b pb-4">
            <h2 className="text-xl font-medium">Bekijk prompt</h2>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Originele prompt</h3>
                  <Badge variant="outline" className="flex items-center gap-1 bg-amber-500/10 text-amber-500">
                    <AlertTriangle className="h-3 w-3" />
                    Bias Detected
                  </Badge>
                </div>
                <div className="rounded-md border p-4">
                  <p>{originalPrompt}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Deze prompt kan onbedoeld stereotypen over hoe ingenieurs eruit zien versterken.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Charlie's suggestie</h3>
                  <Button variant="ghost" size="sm" className="h-7 gap-1" onClick={handleCopy}>
                    <Copy className="h-3.5 w-3.5" />
                    Kopiëren
                  </Button>
                </div>

                {editMode ? (
                  <Textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    className="min-h-[100px]"
                  />
                ) : (
                  <div className="rounded-md border p-4">
                    <p>{suggestion}</p>
                  </div>
                )}

                <div className="flex justify-end gap-2">
                  {editMode ? (
                    <Button size="sm" onClick={() => setEditMode(false)}>
                      Wijzigingen opslaan
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => setEditMode(true)}>
                      Suggestie bewerken
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-start border-t pt-4">
            <p className="text-sm text-muted-foreground">
              Charlie heeft deze prompt aangepast om onbedoelde bias te voorkomen door expliciet diversiteit in de
              gegenereerde afbeeldingen te vragen.
            </p>
            <div className="mt-4 flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/">Verwijderen</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/article">Lees meer</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
