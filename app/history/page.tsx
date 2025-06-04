import { Header } from "@/components/header"
import { TabNavigation } from "@/components/tab-navigation"
import { HistoryLog } from "@/components/history/history-log"
import { HistoryFilters } from "@/components/history/history-filters"
import { HistorySearch } from "@/components/history/history-search"

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6">
      <Header />
      <TabNavigation activeTab="history" />

      <div className="mt-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium text-foreground">Activity History</h2>
          <div className="flex items-center gap-3">
            <HistorySearch />
            <HistoryFilters />
          </div>
        </div>
        <HistoryLog />
      </div>
    </div>
  )
}
