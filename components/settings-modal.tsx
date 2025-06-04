"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

interface SettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const [tone, setTone] = useState("friendly")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Customize your Charlie Ethics Assistant experience</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="general" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Snooze Charlie</h3>
              <RadioGroup defaultValue="none">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">Don't snooze</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1h" id="1h" />
                  <Label htmlFor="1h">1 hour</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4h" id="4h" />
                  <Label htmlFor="4h">4 hours</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="day" id="day" />
                  <Label htmlFor="day">Until tomorrow</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Tone of Voice</h3>
              <RadioGroup value={tone} onValueChange={setTone}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="friendly" id="friendly" />
                  <Label htmlFor="friendly">Friendly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="formal" id="formal" />
                  <Label htmlFor="formal">Formal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sarcastic" id="sarcastic" />
                  <Label htmlFor="sarcastic">Sarcastic</Label>
                </div>
              </RadioGroup>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6 pt-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Weekly Quiz Goal</h3>
                <span className="text-sm">5</span>
              </div>
              <Slider defaultValue={[5]} max={10} step={1} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Monthly Dilemma Goal</h3>
                <span className="text-sm">8</span>
              </div>
              <Slider defaultValue={[8]} max={20} step={1} />
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="goal-reminders" />
              <Label htmlFor="goal-reminders">Enable goal reminders</Label>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Data Collection</h3>
              <p className="text-xs text-muted-foreground">Control what data Charlie can access and analyze</p>

              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="collect-usage" defaultChecked />
                  <Label htmlFor="collect-usage">Usage patterns</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="collect-quiz" defaultChecked />
                  <Label htmlFor="collect-quiz">Quiz responses</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="collect-dilemma" defaultChecked />
                  <Label htmlFor="collect-dilemma">Dilemma responses</Label>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-6 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Data Management</h3>
              <p className="text-xs text-muted-foreground">Manage your data and ethics score</p>

              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" size="sm">
                  Export your data
                </Button>
                <Button variant="outline" size="sm">
                  Reset ethics score
                </Button>
                <Button variant="destructive" size="sm">
                  Delete all data
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
