import { Suspense } from "react"
import { Header } from "@/components/header"
import { SettingsTabs } from "@/components/settings/settings-tabs"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6">
      <Header />

      <div className="mt-8">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Terug naar dashboard
            </Link>
          </Button>
        </div>
        <h2 className="mb-6 text-xl font-medium text-foreground">Instellingen</h2>
        <Suspense fallback={<div className="p-4 text-center">Instellingen laden...</div>}>
          <SettingsTabs />
        </Suspense>
      </div>
    </div>
  )
}
