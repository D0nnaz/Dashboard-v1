import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"
import Link from "next/link"

export function RecentQuizzes() {
  return (
    <Card className="border-border bg-card/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Recente quizzen & leervoortgang</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span>Privacy Quiz</span>
              <span>2/4</span>
            </div>
            <Progress value={50} className="h-1.5" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span>Bias Dilemma</span>
              <span>1/3</span>
            </div>
            <Progress value={33} className="h-1.5" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span>Transparency Quiz</span>
              <span>3/5</span>
            </div>
            <Progress value={60} className="h-1.5" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Target className="h-3.5 w-3.5" />
          <span>Wekelijks doel: 3/5 quizzen voltooid</span>
        </div>
      </CardContent>
      <CardFooter className="pt-1">
        <div className="flex w-full justify-between">
          <Link href="/settings?tab=goals" className="text-xs text-primary hover:underline">
            Stel je uitdaging in
          </Link>
          <Link href="/quiz" className="text-xs text-primary hover:underline">
            Doe een quiz
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
