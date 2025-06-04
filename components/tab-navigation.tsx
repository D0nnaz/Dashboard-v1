"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface TabNavigationProps {
  activeTab: "overview" | "history" | "knowledge"
}

export function TabNavigation({ activeTab }: TabNavigationProps) {
  const tabs = [
    {
      name: "Overzicht",
      href: "/",
      value: "overview",
    },
    {
      name: "Geschiedenis",
      href: "/history",
      value: "history",
    },
    {
      name: "Kennisbank",
      href: "/knowledge-base",
      value: "knowledge",
    },
  ]

  return (
    <div className="mt-6 flex justify-start">
      <div className="inline-flex rounded-lg bg-muted p-1">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={tab.href}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              activeTab === tab.value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
