import { EthicsScore } from "@/components/widgets/ethics-score"
import { DilemmaOfTheDay } from "@/components/widgets/dilemma-of-the-day"
import { RecentQuizzes } from "@/components/widgets/recent-quizzes"
import { ActivityOverview } from "@/components/widgets/activity-overview"
import { KnowledgeSuggestion } from "@/components/widgets/knowledge-suggestion"

export function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <EthicsScore />
      <DilemmaOfTheDay />
      <RecentQuizzes />

      <ActivityOverview />
      <KnowledgeSuggestion />
    </div>
  )
}
