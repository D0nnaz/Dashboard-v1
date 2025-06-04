"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Lightbulb, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export function DilemmaOfTheDay() {
  const [showReflection, setShowReflection] = useState(false)
  const [hasResponded, setHasResponded] = useState(false)
  const [response, setResponse] = useState("")

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedResponse = localStorage.getItem("dilemmaResponse")
    const savedHasResponded = localStorage.getItem("dilemmaHasResponded")

    if (savedResponse) {
      setResponse(savedResponse)
    }

    if (savedHasResponded === "true") {
      setHasResponded(true)
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("dilemmaResponse", response)
  }, [response])

  useEffect(() => {
    localStorage.setItem("dilemmaHasResponded", hasResponded.toString())
  }, [hasResponded])

  const handleSubmit = () => {
    if (response.trim()) {
      setHasResponded(true)
    }
  }

  return (
    <>
      <Card className="border-border bg-card/50 transition-opacity duration-200">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <CardTitle className="text-sm font-medium">Dilemma van de dag</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-card-foreground">
            Zou je het gebruik van Midjourney-afbeeldingen aan een klant onthullen als ze er niet specifiek naar vragen?
          </p>
        </CardContent>
        <CardFooter className="pt-1">
          <button onClick={() => setShowReflection(true)} className="text-xs text-primary hover:underline">
            Reflecteer nu
          </button>
        </CardFooter>
      </Card>

      <Dialog open={showReflection} onOpenChange={setShowReflection}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Dilemma van de dag</DialogTitle>
          </DialogHeader>

          <div className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <h3 className="font-medium">Transparency Dilemma</h3>
              </div>
              <p className="mt-2 text-sm">
                Zou je het gebruik van Midjourney-afbeeldingen aan een klant onthullen als ze er niet specifiek naar
                vragen?
              </p>
            </div>

            {!hasResponded ? (
              <div className="mt-4 space-y-4">
                <Textarea
                  placeholder="Deel je gedachten over dit dilemma..."
                  className="min-h-[120px]"
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                />
                <Button onClick={handleSubmit}>Verstuur reflectie</Button>
              </div>
            ) : (
              <Tabs defaultValue="personal" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="personal">Jouw reflectie</TabsTrigger>
                  <TabsTrigger value="community">Community reacties</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="mt-4 space-y-4">
                  <div className="rounded-md bg-muted/50 p-4">
                    <p className="text-sm">{response}</p>
                  </div>

                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">Charlie's gedachten</h4>
                    <p className="mt-2 text-sm">
                      Goede reflectie! Transparantie is essentieel bij het opbouwen van vertrouwen met klanten. Veel
                      professionals kiezen ervoor om door AI gegenereerde content te onthullen, zelfs wanneer er niet
                      naar wordt gevraagd, omdat het een eerlijke relatie tot stand brengt en mogelijke problemen later
                      voorkomt.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="community" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="rounded-md bg-muted/50 p-3 text-sm">
                        <p className="font-medium">Jane Doe</p>
                        <p className="mt-1">
                          I always disclose AI-generated content to my clients. It's about building trust and being
                          transparent about my process.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <div className="rounded-md bg-muted/50 p-3 text-sm">
                        <p className="font-medium">Mark Smith</p>
                        <p className="mt-1">
                          I think it depends on the client and project. For creative explorations, I might not mention
                          it, but for final deliverables, I always disclose.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>LW</AvatarFallback>
                      </Avatar>
                      <div className="rounded-md bg-muted/50 p-3 text-sm">
                        <p className="font-medium">Lisa Wong</p>
                        <p className="mt-1">
                          Transparency is non-negotiable for me. I include AI usage in my contracts and discuss it
                          upfront.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link href="/community-discussion">
                      <Users className="h-4 w-4" />
                      Bekijk volledige community discussie
                    </Link>
                  </Button>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
