"use client"

import { useState } from "react"
import { ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HistoryFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter))
    } else {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
          <Filter className="h-3.5 w-3.5" />
          Filter
          {selectedFilters.length > 0 && (
            <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">
              {selectedFilters.length}
            </span>
          )}
          <ChevronDown className="h-3.5 w-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Filter op type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("privacy")}
          onCheckedChange={() => toggleFilter("privacy")}
        >
          Privacy Alerts
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("bias")}
          onCheckedChange={() => toggleFilter("bias")}
        >
          Bias Detection
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("transparency")}
          onCheckedChange={() => toggleFilter("transparency")}
        >
          Transparency Alerts
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("dilemma")}
          onCheckedChange={() => toggleFilter("dilemma")}
        >
          Ethics Dilemmas
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("quiz")}
          onCheckedChange={() => toggleFilter("quiz")}
        >
          Quizzen
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("article")}
          onCheckedChange={() => toggleFilter("article")}
        >
          Gelezen artikelen
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Tijdsperiode</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("today")}
          onCheckedChange={() => toggleFilter("today")}
        >
          Vandaag
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("week")}
          onCheckedChange={() => toggleFilter("week")}
        >
          Deze week
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedFilters.includes("month")}
          onCheckedChange={() => toggleFilter("month")}
        >
          Deze maand
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
