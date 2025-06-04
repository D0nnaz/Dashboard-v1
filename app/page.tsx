import { Header } from "@/components/header"
import { TabNavigation } from "@/components/tab-navigation"
import { DashboardWidgets } from "@/components/dashboard-widgets"

export default function Home() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6">
      <Header />
      <TabNavigation activeTab="overview" />
      <div className="mt-8">
        <DashboardWidgets />
      </div>
    </div>
  )
}
