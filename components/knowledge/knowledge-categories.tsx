"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { FileText, Lock, Brain, Layers, Scale } from "lucide-react"

// Define the articles for each category
const articlesByCategory = {
  all: [
    {
      id: 1,
      title: "Best practices voor anonimisering",
      description: "Leer hoe je gegevens op de juiste manier anonimiseert om privacy te beschermen zonder bruikbaarheid te verliezen.",
      category: "Privacy",
      readTime: "5 min",
      isNew: true,
    },
    {
      id: 2,
      title: "Begrijpen van genderbias in AI",
      description: "Ontdek hoe genderbias voorkomt in AI-systemen en welke strategieën je kunt toepassen om dit te beperken.",
      category: "Bias",
      readTime: "8 min",
      isNew: false,
    },
    {
      id: 3,
      title: "EU AI Act: Belangrijkste vereisten",
      description: "Een uitgebreid overzicht van de EU AI Act en wat dit betekent voor AI-ontwikkelaars.",
      category: "Legal Guidelines",
      readTime: "12 min",
      isNew: true,
    },
    {
      id: 4,
      title: "Transparantie bij AI-gegenereerde content",
      description: "Best practices voor het vermelden van AI-gegenereerde content richting gebruikers en klanten.",
      category: "Transparency",
      readTime: "6 min",
      isNew: false,
    },
    {
      id: 5,
      title: "GDPR en AI: Compliancegids",
      description: "Hoe zorg je ervoor dat je AI-systemen voldoen aan de eisen van de GDPR?",
      category: "Privacy",
      readTime: "10 min",
      isNew: false,
    },
    {
      id: 6,
      title: "Raciale bias detecteren en verminderen",
      description: "Technieken om raciale bias in AI-systemen te identificeren en aan te pakken.",
      category: "Bias",
      readTime: "7 min",
      isNew: true,
    },
  ],
  privacy: [
    {
      id: 1,
      title: "Best practices voor anonimisering",
      description: "Leer hoe je gegevens op de juiste manier anonimiseert om privacy te beschermen zonder bruikbaarheid te verliezen.",
      category: "Privacy",
      readTime: "5 min",
      isNew: true,
    },
    {
      id: 5,
      title: "GDPR en AI: Compliancegids",
      description: "Hoe zorg je ervoor dat je AI-systemen voldoen aan de eisen van de GDPR?",
      category: "Privacy",
      readTime: "10 min",
      isNew: false,
    },
    {
      id: 7,
      title: "Technieken voor dataminimalisatie",
      description: "Strategieën om alleen de noodzakelijke gegevens te verzamelen en zo privacyrisico's te beperken.",
      category: "Privacy",
      readTime: "6 min",
      isNew: false,
    },
    {
      id: 8,
      title: "Privacy by Design-framework",
      description: "Privacy vanaf het begin meenemen in je AI-ontwikkelproces.",
      category: "Privacy",
      readTime: "9 min",
      isNew: true,
    },
  ],
  bias: [
    {
      id: 2,
      title: "Begrijpen van genderbias in AI",
      description: "Ontdek hoe genderbias voorkomt in AI-systemen en welke strategieën je kunt toepassen om dit te beperken.",
      category: "Bias",
      readTime: "8 min",
      isNew: false,
    },
    {
      id: 6,
      title: "Raciale bias detecteren en verminderen",
      description: "Technieken om raciale bias in AI-systemen te identificeren en aan te pakken.",
      category: "Bias",
      readTime: "7 min",
      isNew: true,
    },
    {
      id: 9,
      title: "Algoritmische eerlijkheidsstatistieken",
      description: "Kwantitatieve benaderingen voor het meten en waarborgen van eerlijkheid in AI-systemen.",
      category: "Bias",
      readTime: "11 min",
      isNew: false,
    },
    {
      id: 10,
      title: "Bias in taalmodellen",
      description: "Begrijpen en aanpakken van bias in grote taalmodellen.",
      category: "Bias",
      readTime: "8 min",
      isNew: true,
    },
  ],
  transparency: [
    {
      id: 4,
      title: "Transparantie bij AI-gegenereerde content",
      description: "Best practices voor het vermelden van AI-gegenereerde content richting gebruikers en klanten.",
      category: "Transparency",
      readTime: "6 min",
      isNew: false,
    },
    {
      id: 11,
      title: "Technieken voor uitlegbare AI",
      description: "Methodes om AI-systemen begrijpelijker en transparanter te maken.",
      category: "Transparency",
      readTime: "9 min",
      isNew: true,
    },
    {
      id: 12,
      title: "Standaarden voor AI-documentatie",
      description: "Best practices voor het documenteren van AI-systemen en hun beperkingen.",
      category: "Transparency",
      readTime: "7 min",
      isNew: false,
    },
    {
      id: 13,
      title: "Gebruikersvriendelijke AI-uitleg",
      description: "Hoe leg je AI-besluiten duidelijk uit aan niet-technische gebruikers?",
      category: "Transparency",
      readTime: "5 min",
      isNew: true,
    },
  ],
  legal: [
    {
      id: 3,
      title: "EU AI Act: Belangrijkste vereisten",
      description: "Een uitgebreid overzicht van de EU AI Act en wat dit betekent voor AI-ontwikkelaars.",
      category: "Legal Guidelines",
      readTime: "12 min",
      isNew: true,
    },
    {
      id: 14,
      title: "Juridisch kader voor AI-aansprakelijkheid",
      description: "Inzicht in de juridische verantwoordelijkheid voor de uitkomsten van AI-systemen.",
      category: "Legal Guidelines",
      readTime: "10 min",
      isNew: false,
    },
    {
      id: 15,
      title: "Internationale AI-regelgeving",
      description: "Een vergelijking van verschillende aanpakken voor AI-governance wereldwijd.",
      category: "Legal Guidelines",
      readTime: "14 min",
      isNew: true,
    },
    {
      id: 16,
      title: "AI-risicobeoordelingsvereisten",
      description: "Wettelijke verplichtingen rondom het beoordelen en beperken van AI-risico's.",
      category: "Legal Guidelines",
      readTime: "8 min",
      isNew: false,
    },
  ],
}


interface KnowledgeCategoriesProps {
  onCategoryChange: (category: string, articles: any[]) => void
}

export function KnowledgeCategories({ onCategoryChange }: KnowledgeCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedCategory = localStorage.getItem("knowledgeCategory")
    if (savedCategory) {
      setActiveCategory(savedCategory)
      onCategoryChange(savedCategory, articlesByCategory[savedCategory as keyof typeof articlesByCategory] || [])
    } else {
      onCategoryChange("all", articlesByCategory.all)
    }
  }, [onCategoryChange])

  const categories = [
    { id: "all", name: "All Categories", icon: FileText },
    { id: "privacy", name: "Privacy", icon: Lock },
    { id: "bias", name: "Bias", icon: Brain },
    { id: "transparency", name: "Transparency", icon: Layers },
    { id: "legal", name: "Legal Guidelines", icon: Scale },
  ]

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    localStorage.setItem("knowledgeCategory", category)
    onCategoryChange(category, articlesByCategory[category as keyof typeof articlesByCategory] || [])
  }

  return (
    <div className="space-y-1">
      <h2 className="mb-2 px-2 text-sm font-medium">Categorieën</h2>
      {categories.map((category) => (
        <button
          key={category.id}
          className={cn(
            "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted",
            activeCategory === category.id ? "bg-muted font-medium" : "text-muted-foreground",
          )}
          onClick={() => handleCategoryChange(category.id)}
        >
          <category.icon className="h-4 w-4" />
          <span>
            {category.id === "all"
              ? "Alle categorieën"
              : category.id === "privacy"
                ? "Privacy"
                : category.id === "bias"
                  ? "Bias"
                  : category.id === "transparency"
                    ? "Transparency"
                    : "Juridische richtlijnen"}
          </span>
        </button>
      ))}
    </div>
  )
}

// Export the articles data for use in other components
export { articlesByCategory }
