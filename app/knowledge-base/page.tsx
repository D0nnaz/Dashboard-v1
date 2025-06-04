"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { TabNavigation } from "@/components/tab-navigation"
import { KnowledgeSearch } from "@/components/knowledge/knowledge-search"
import { KnowledgeCategories, articlesByCategory } from "@/components/knowledge/knowledge-categories"
import { KnowledgeArticles } from "@/components/knowledge/knowledge-articles"

export default function KnowledgeBasePage() {
  const [currentArticles, setCurrentArticles] = useState(articlesByCategory.all)

  const handleCategoryChange = (_category: string, articles: any[]) => {
    setCurrentArticles(articles)
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6">
      <Header />
      <TabNavigation activeTab="knowledge" />

      <div className="mt-8">
        <KnowledgeSearch />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <KnowledgeCategories onCategoryChange={handleCategoryChange} />
          </div>
          <div className="lg:col-span-3">
            <KnowledgeArticles articles={currentArticles} />
          </div>
        </div>
      </div>
    </div>
  )
}
