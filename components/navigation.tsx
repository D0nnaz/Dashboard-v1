"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SettingsModal } from "@/components/settings-modal"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [showSettings, setShowSettings] = useState(false)

  const routes = [
    {
      name: "Overview",
      path: "/",
    },
    {
      name: "History",
      path: "/history",
    },
    {
      name: "Knowledge Base",
      path: "/knowledge-base",
    },
  ]

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold">Charlie</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-1 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "px-3 py-2 text-muted-foreground transition-colors hover:text-foreground",
                pathname === route.path && "text-foreground",
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)} aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <SettingsModal open={showSettings} onOpenChange={setShowSettings} />
    </header>
  )
}
