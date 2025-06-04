"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SmilePlus, Smile, Meh, Frown } from "lucide-react"
import { cn } from "@/lib/utils"

export function FeedbackSettings() {
  const [feedback, setFeedback] = useState("")
  const [sentiment, setSentiment] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (feedback.trim() && sentiment) {
      setSubmitted(true)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback voor Charlie</CardTitle>
        <CardDescription>Help ons je ethics assistant ervaring te verbeteren</CardDescription>
      </CardHeader>
      <CardContent>
        {!submitted ? (
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">Hoe zou je je ervaring beoordelen?</p>
              <div className="flex gap-4">
                <button
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-md p-2 text-xs transition-colors hover:bg-muted",
                    sentiment === "positive" && "bg-muted font-medium",
                  )}
                  onClick={() => setSentiment("positive")}
                >
                  <Smile
                    className={cn("h-6 w-6", sentiment === "positive" ? "text-green-500" : "text-muted-foreground")}
                  />
                  <span>Positief</span>
                </button>
                <button
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-md p-2 text-xs transition-colors hover:bg-muted",
                    sentiment === "neutral" && "bg-muted font-medium",
                  )}
                  onClick={() => setSentiment("neutral")}
                >
                  <Meh
                    className={cn("h-6 w-6", sentiment === "neutral" ? "text-amber-500" : "text-muted-foreground")}
                  />
                  <span>Neutraal</span>
                </button>
                <button
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-md p-2 text-xs transition-colors hover:bg-muted",
                    sentiment === "negative" && "bg-muted font-medium",
                  )}
                  onClick={() => setSentiment("negative")}
                >
                  <Frown
                    className={cn("h-6 w-6", sentiment === "negative" ? "text-red-500" : "text-muted-foreground")}
                  />
                  <span>Negatief</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="feedback" className="text-sm font-medium">
                Deel je gedachten
              </label>
              <Textarea
                id="feedback"
                placeholder="Wat vind je leuk of niet leuk aan Charlie? Hoe kunnen we verbeteren?"
                className="min-h-[120px]"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <SmilePlus className="h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-lg font-medium">Bedankt voor je feedback!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Je input helpt ons Charlie te verbeteren en nuttiger te maken voor iedereen.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setFeedback("")
                setSentiment(null)
                setSubmitted(false)
              }}
            >
              Meer feedback versturen
            </Button>
          </div>
        )}
      </CardContent>
      {!submitted && (
        <CardFooter>
          <Button onClick={handleSubmit} disabled={!feedback.trim() || !sentiment}>
            Feedback versturen
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
