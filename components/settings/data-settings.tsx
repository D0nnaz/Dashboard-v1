import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Download, RefreshCw, Trash2, UserX } from "lucide-react"

export function DataSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gegevens exporteren</CardTitle>
          <CardDescription>Download een kopie van je gegevens</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Je export bevat je ethics score, quiz resultaten, dilemma reacties en activiteitengeschiedenis.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exporteer alle gegevens
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ethics Score resetten</CardTitle>
          <CardDescription>Begin opnieuw met een nieuwe ethics score</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Dit zal je ethics score naar nul resetten, maar je activiteitengeschiedenis behouden.
          </p>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Reset ethics score
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Weet je het zeker?</AlertDialogTitle>
                <AlertDialogDescription>
                  Deze actie zal je ethics score naar nul resetten. Dit kan niet ongedaan worden gemaakt.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuleren</AlertDialogCancel>
                <AlertDialogAction>Score resetten</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alle gegevens verwijderen</CardTitle>
          <CardDescription>Verwijder permanent al je gegevens</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Dit zal permanent al je gegevens verwijderen, inclusief je ethics score, quiz resultaten, dilemma reacties
            en activiteitengeschiedenis.
          </p>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Verwijder alle gegevens
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Weet je het absoluut zeker?</AlertDialogTitle>
                <AlertDialogDescription>
                  Deze actie kan niet ongedaan worden gemaakt. Dit zal permanent al je gegevens verwijderen en je
                  records van onze servers verwijderen.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuleren</AlertDialogCancel>
                <AlertDialogAction>Alle gegevens verwijderen</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account verwijderen</CardTitle>
          <CardDescription>Verwijder permanent je account</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Dit zal permanent je account en alle bijbehorende gegevens verwijderen. Deze actie kan niet ongedaan worden
            gemaakt.
          </p>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="gap-2">
                <UserX className="h-4 w-4" />
                Account verwijderen
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Weet je het absoluut zeker?</AlertDialogTitle>
                <AlertDialogDescription>
                  Deze actie kan niet ongedaan worden gemaakt. Dit zal permanent je account verwijderen en al je
                  gegevens van onze servers verwijderen.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuleren</AlertDialogCancel>
                <AlertDialogAction>Account verwijderen</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  )
}
