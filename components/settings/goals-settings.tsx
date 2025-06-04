"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function GoalsSettings() {
  const [weeklyQuizGoal, setWeeklyQuizGoal] = useState(5)
  const [monthlyDilemmaGoal, setMonthlyDilemmaGoal] = useState(8)
  const [enableReminders, setEnableReminders] = useState(true)
  const [reminderFrequency, setReminderFrequency] = useState("weekly")

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedWeeklyQuizGoal = localStorage.getItem("weeklyQuizGoal")
    const savedMonthlyDilemmaGoal = localStorage.getItem("monthlyDilemmaGoal")
    const savedEnableReminders = localStorage.getItem("enableReminders")
    const savedReminderFrequency = localStorage.getItem("reminderFrequency")

    if (savedWeeklyQuizGoal) {
      setWeeklyQuizGoal(Number.parseInt(savedWeeklyQuizGoal))
    }

    if (savedMonthlyDilemmaGoal) {
      setMonthlyDilemmaGoal(Number.parseInt(savedMonthlyDilemmaGoal))
    }

    if (savedEnableReminders) {
      setEnableReminders(savedEnableReminders === "true")
    }

    if (savedReminderFrequency) {
      setReminderFrequency(savedReminderFrequency)
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("weeklyQuizGoal", weeklyQuizGoal.toString())
  }, [weeklyQuizGoal])

  useEffect(() => {
    localStorage.setItem("monthlyDilemmaGoal", monthlyDilemmaGoal.toString())
  }, [monthlyDilemmaGoal])

  useEffect(() => {
    localStorage.setItem("enableReminders", enableReminders.toString())
  }, [enableReminders])

  useEffect(() => {
    localStorage.setItem("reminderFrequency", reminderFrequency)
  }, [reminderFrequency])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Leerdoelen</CardTitle>
          <CardDescription>Stel je persoonlijke leerdoelen in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Wekelijks quiz doel</Label>
              <span className="text-sm">{weeklyQuizGoal}</span>
            </div>
            <Slider
              value={[weeklyQuizGoal]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) => setWeeklyQuizGoal(value[0])}
            />
            <p className="text-xs text-muted-foreground">Streefaantal quizzen om elke week te voltooien</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Maandelijks dilemma doel</Label>
              <span className="text-sm">{monthlyDilemmaGoal}</span>
            </div>
            <Slider
              value={[monthlyDilemmaGoal]}
              min={1}
              max={20}
              step={1}
              onValueChange={(value) => setMonthlyDilemmaGoal(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Streefaantal ethische dilemma's om elke maand over na te denken
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Herinneringen</CardTitle>
          <CardDescription>Configureer hoe Charlie je herinnert aan je doelen</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-2">
            <Switch id="goal-reminders" checked={enableReminders} onCheckedChange={setEnableReminders} />
            <Label htmlFor="goal-reminders">Doelherinneringen inschakelen</Label>
          </div>

          {enableReminders && (
            <div className="space-y-2">
              <Label htmlFor="reminder-frequency">Herinneringsfrequentie</Label>
              <Select value={reminderFrequency} onValueChange={setReminderFrequency}>
                <SelectTrigger id="reminder-frequency">
                  <SelectValue placeholder="Selecteer frequentie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Dagelijks</SelectItem>
                  <SelectItem value="weekly">Wekelijks</SelectItem>
                  <SelectItem value="biweekly">Tweewekelijks</SelectItem>
                  <SelectItem value="monthly">Maandelijks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
