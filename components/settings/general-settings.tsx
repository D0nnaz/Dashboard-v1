"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function GeneralSettings() {
  const [snooze, setSnooze] = useState("none")
  const [tone, setTone] = useState("friendly")
  const { theme, setTheme } = useTheme()

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedSnooze = localStorage.getItem("charlieSnooze")
    const savedTone = localStorage.getItem("charlieTone")

    if (savedSnooze) {
      setSnooze(savedSnooze)
    }

    if (savedTone) {
      setTone(savedTone)
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("charlieSnooze", snooze)
  }, [snooze])

  useEffect(() => {
    localStorage.setItem("charlieTone", tone)
    // Dispatch an event to notify other components about the tone change
    window.dispatchEvent(new StorageEvent("storage", { key: "charlieTone", newValue: tone }))
  }, [tone])

  const toneExamples = {
    friendly: "Hey there! I noticed you might want to consider anonymizing this data. Want some tips?",
    formal:
      "I would like to bring to your attention that this data may require anonymization. Would you like guidance on this matter?",
    sarcastic:
      "Oh look, another privacy concern! Maybe we should, I don't know, anonymize this data? Just a wild thought.",
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Charlie pauzeren</CardTitle>
          <CardDescription>Pauzeer tijdelijk Charlie's assistentie</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={snooze} onValueChange={setSnooze}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none">Niet pauzeren</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15m" id="15m" />
              <Label htmlFor="15m">15 minuten</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1h" id="1h" />
              <Label htmlFor="1h">1 uur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1d" id="1d" />
              <Label htmlFor="1d">1 dag</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Aangepast</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Toon van stem</CardTitle>
          <CardDescription>Kies hoe Charlie met je communiceert</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <RadioGroup value={tone} onValueChange={setTone}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="friendly" id="friendly" />
                <Label htmlFor="friendly">Vriendelijk</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="formal" id="formal" />
                <Label htmlFor="formal">Formeel</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sarcastic" id="sarcastic" />
                <Label htmlFor="sarcastic">Sarcastisch</Label>
              </div>
            </RadioGroup>

            <div className="rounded-md bg-muted p-3">
              <p className="text-sm font-medium">Voorbeeld:</p>
              <p className="mt-2 text-sm">{toneExamples[tone as keyof typeof toneExamples]}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Thema</CardTitle>
          <CardDescription>Kies tussen licht en donker modus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              size="sm"
              onClick={() => setTheme("light")}
              className="gap-2"
            >
              <Sun className="h-4 w-4" />
              Licht
            </Button>
            <Button
              variant={theme === "dark" ? "default" : "outline"}
              size="sm"
              onClick={() => setTheme("dark")}
              className="gap-2"
            >
              <Moon className="h-4 w-4" />
              Donker
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
