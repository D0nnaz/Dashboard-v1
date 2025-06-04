import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export function KnowledgeSuggestion() {
  return (
    <Card className="border-border bg-card/50 md:col-span-2">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-blue-500" />
          <CardTitle className="text-sm font-medium">Mijn leestip voor jou</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-card-foreground">Je hebt deze maand 3 privacy alerts gehad. Wil je verbeteren?</p>

        <div className="mt-4 flex items-start gap-3">
          <div className="rounded-md bg-blue-500/10 p-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Best practices voor anonimisering</h3>
            <p className="text-xs text-muted-foreground">5 min leestijd</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 pt-1">
        <Link href="/article" className="text-xs text-primary hover:underline">
          Lees artikel
        </Link>
        <Link href="/knowledge-base" className="text-xs text-primary hover:underline">
          Ga naar kennisbank
        </Link>
      </CardFooter>
    </Card>
  )
}
