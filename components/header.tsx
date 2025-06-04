import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function Header() {
  return (
    <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard.</h1>
        <p className="text-muted-foreground">Jouw AI Ethics reis met Charlie.</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" asChild>
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Instellingen
          </Link>
        </Button>
        <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
          <Link href="/quiz">Start nieuwe quiz</Link>
        </Button>
      </div>
    </div>
  )
}
