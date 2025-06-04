"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from "next/navigation"
import { GeneralSettings } from "./general-settings"
import { GoalsSettings } from "./goals-settings"
import { PrivacySettings } from "./privacy-settings"
import { DataSettings } from "./data-settings"
import { FeedbackSettings } from "./feedback-settings"

export function SettingsTabs() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("algemeen")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["algemeen", "doelen", "privacy", "gegevens", "feedback"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
        <TabsTrigger value="algemeen">Algemeen</TabsTrigger>
        <TabsTrigger value="doelen">Doelen</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
        <TabsTrigger value="gegevens">Gegevens</TabsTrigger>
        <TabsTrigger value="feedback">Feedback</TabsTrigger>
      </TabsList>
      <TabsContent value="algemeen" className="space-y-4">
        <GeneralSettings />
      </TabsContent>
      <TabsContent value="doelen" className="space-y-4">
        <GoalsSettings />
      </TabsContent>
      <TabsContent value="privacy" className="space-y-4">
        <PrivacySettings />
      </TabsContent>
      <TabsContent value="gegevens" className="space-y-4">
        <DataSettings />
      </TabsContent>
      <TabsContent value="feedback" className="space-y-4">
        <FeedbackSettings />
      </TabsContent>
    </Tabs>
  )
}
