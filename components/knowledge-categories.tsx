"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Brain, FileText, Lock, ShieldAlert, Zap } from "lucide-react"

export function KnowledgeCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Categories", icon: FileText },
    { id: "bias", name: "Bias", icon: Brain },
    { id: "privacy", name: "Privacy", icon: Lock },
    { id: "transparency", name: "Transparency", icon: ShieldAlert },
    { id: "ai-act", name: "AI Act", icon: Zap },
  ]

  return (
    <div className="space-y-1">
      <h2 className="mb-2 px-2 text-sm font-medium">Categories</h2>
      {categories.map((category) => (
        <button
          key={category.id}
          className={cn(
            "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted",
            activeCategory === category.id ? "bg-muted font-medium" : "text-muted-foreground",
          )}
          onClick={() => setActiveCategory(category.id)}
        >
          <category.icon className="h-4 w-4" />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}
