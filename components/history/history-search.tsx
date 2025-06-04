"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function HistorySearch() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative flex items-center">
      {isExpanded && (
        <Input
          type="search"
          placeholder="Zoek in geschiedenis..."
          className="absolute right-0 w-[200px] pr-8"
          autoFocus
          onBlur={() => setIsExpanded(false)}
        />
      )}
      <Button
        variant="ghost"
        size="icon"
        className={cn("h-8 w-8", isExpanded && "relative z-10")}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  )
}
