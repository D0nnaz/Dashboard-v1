"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowUpRight } from "lucide-react"

export function EthicsScore() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <Card className="border-border bg-card/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Ethics Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold">75/100</div>
            <Badge variant="outline" className="bg-card/50 text-xs">
              Level 3 - Transparency Champ
            </Badge>
          </div>
          <div className="mt-4">
            <Progress value={75} className="h-1.5" />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>25 punten tot Level 4</span>
              <span>100</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-1">
          <button
            onClick={() => setShowDetails(true)}
            className="inline-flex items-center text-xs text-primary hover:underline"
          >
            Bekijk details
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </button>
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Ethics Score Details</DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-medium">75/100</h3>
                <Badge variant="outline">Level 3 - Transparency Champ</Badge>
              </div>
              <Progress value={75} className="h-2" />
              <p className="mt-2 text-sm text-muted-foreground">25 punten om Level 4 te bereiken</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Score Overzicht</h4>

              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Privacy</span>
                  <span>22/30</span>
                </div>
                <Progress value={73} className="h-1.5" />
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Bias</span>
                  <span>18/30</span>
                </div>
                <Progress value={60} className="h-1.5" />
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">Transparency</span>
                  <span className="font-medium">28/30</span>
                </div>
                <Progress value={93} className="h-1.5" />
                <p className="mt-1 text-xs text-green-500">Je meest verbeterde gebied!</p>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Legal Compliance</span>
                  <span>7/10</span>
                </div>
                <Progress value={70} className="h-1.5" />
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-medium">Recente Prestaties</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="h-5 w-5 rounded-full p-0 text-center">
                    ✓
                  </Badge>
                  <span>Privacy Fundamentals Quiz voltooid</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="h-5 w-5 rounded-full p-0 text-center">
                    ✓
                  </Badge>
                  <span>5 transparantie dilemma's opgelost</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="h-5 w-5 rounded-full p-0 text-center">
                    ✓
                  </Badge>
                  <span>3 artikelen over bias detection gelezen</span>
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
