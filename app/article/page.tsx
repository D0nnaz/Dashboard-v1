"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Clock } from "lucide-react"
import Link from "next/link"

export default function ArticlePage() {
  // Log article read to history when the page loads
  useEffect(() => {
    // In a real app, this would call an API to log the article read
    console.log("Article read logged to history")
  }, [])

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

        <Card className="mx-auto max-w-3xl">
          <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-blue-500/10 p-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-medium">Bias begrijpen in AI-systemen</h2>
                <p className="text-sm text-muted-foreground">Gepubliceerd op 10 mei 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>5 min leestijd</span>
            </div>
          </CardHeader>

          <CardContent className="prose prose-invert max-w-none pt-6">
            <h3>Wat is bias in AI?</h3>
            <p>
              Bias in AI verwijst naar systematische en herhaalbare fouten in een computersysteem die oneerlijke
              uitkomsten veroorzaken, zoals het bevoordelen van een bepaalde gebruikersgroep boven anderen.
              AI-bias kan bestaande vooroordelen in de samenleving weerspiegelen en versterken, met name tegen
              gemarginaliseerde groepen.
            </p>

            <h3>Veelvoorkomende vormen van bias</h3>
            <ul>
              <li>
                <strong>Selectiebias:</strong> Wanneer de data waarmee het model is getraind geen goede afspiegeling is
                van de populatie die het moet bedienen.
              </li>
              <li>
                <strong>Meetbias:</strong> Wanneer de manier waarop data wordt verzameld of gemeten systematisch
                vertekende resultaten oplevert.
              </li>
              <li>
                <strong>Algoritmische bias:</strong> Wanneer het algoritme zelf systematisch bevooroordeelde beslissingen neemt.
              </li>
              <li>
                <strong>Bevestigingsbias:</strong> Wanneer systemen zijn ontworpen om bestaande overtuigingen te bevestigen in plaats van ze ter discussie te stellen.
              </li>
            </ul>

            <h3>Voorbeelden uit de praktijk</h3>
            <p>
              In 2018 stopte een groot techbedrijf met een AI-recruitmenttool nadat bleek dat deze mannelijke
              kandidaten bevoordeelde. Het systeem was getraind op cv’s van de afgelopen 10 jaar, waarvan het
              merendeel afkomstig was van mannen — een weerspiegeling van de mannelijke dominantie in de techindustrie.
            </p>
            <p>
              Gezichtsherkenningssystemen laten structureel hogere foutpercentages zien bij vrouwen en mensen met een
              donkere huidskleur. Dit leidt tot zorgen over het gebruik ervan in de rechtshandhaving en beveiliging.
            </p>

            <h3>Bias beperken</h3>
            <p>Het aanpakken van bias in AI vereist een veelzijdige aanpak:</p>
            <ol>
              <li>
                <strong>Diversiteit in trainingsdata:</strong> Zorg ervoor dat trainingsdata een diverse populatie en situaties weerspiegelt.
              </li>
              <li>
                <strong>Regelmatige audits:</strong> Test systemen bij verschillende demografische groepen om ongelijkheden te identificeren.
              </li>
              <li>
                <strong>Diversiteit in teams:</strong> Betrek mensen met verschillende achtergronden in het ontwikkelproces.
              </li>
              <li>
                <strong>Transparantie:</strong> Wees open over hoe het systeem werkt en wat de beperkingen zijn.
              </li>
              <li>
                <strong>Continue monitoring:</strong> Houd het systeem voortdurend in de gaten om nieuwe vormen van bias op te sporen.
              </li>
            </ol>

            <h3>Ethische overwegingen</h3>
            <p>
              Naarmate AI meer verweven raakt met ons dagelijks leven, is het aanpakken van bias niet alleen een technische uitdaging — het is een ethische noodzaak.
              Bevooroordeelde AI-systemen kunnen ongelijkheden versterken en reproduceren, met gevolgen voor zaken als
              werving, zorg en justitie.
            </p>
            <p>
              Ontwikkelaars en organisaties dragen de verantwoordelijkheid om hun AI-systemen eerlijk en inclusief te maken.
              Dit betekent niet alleen technische bias oplossen, maar ook rekening houden met de bredere maatschappelijke impact.
            </p>

            <h3>Conclusie</h3>
            <p>
              Bias begrijpen en beperken in AI-systemen is essentieel voor technologie die iedereen ten goede komt.
              Door AI te ontwikkelen met aandacht voor ongelijkheid en een toewijding aan eerlijkheid, kunnen we systemen
              bouwen die ongelijkheid verminderen in plaats van versterken.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
