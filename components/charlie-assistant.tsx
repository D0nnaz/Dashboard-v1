"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Define the tone options and their response templates
const toneResponses = {
  friendly: [
    "Dat is een goede vraag over ethiek! Het belangrijkste principe hier is transparantie met je belanghebbenden.",
    "Ik begrijp je zorgen. Bij AI-ethiek is het belangrijk om zowel de technische als sociale implicaties te overwegen.",
    "Bedankt voor het delen. Vanuit ethisch perspectief is het belangrijk om te overwegen hoe dit gebruikersvertrouwen en privacy kan beïnvloeden.",
    "Goed punt! Veel organisaties worstelen met vergelijkbare ethische vragen. Heb je overwogen om je besluitvormingsproces te documenteren?",
  ],
  formal: [
    "Met betrekking tot uw vraag over ethische overwegingen, transparantie met belanghebbenden is een fundamenteel principe om te overwegen.",
    "Uw zorg is terecht. Bij het behandelen van AI-ethiek moet men zowel technische implementatie als maatschappelijke gevolgen evalueren.",
    "Dank voor uw input. Vanuit ethisch oogpunt zou het verstandig zijn om potentiële effecten op gebruikersvertrouwen en privacy te beoordelen.",
    "Een geldige observatie. Talrijke organisaties worden geconfronteerd met vergelijkbare ethische dilemma's. Heeft u een documentatieprotocol voor uw besluitvormingsproces geïmplementeerd?",
  ],
  sarcastic: [
    "Oh, ethiek! Ieders favoriete onderwerp bij etentjes. Maar serieus, transparantie is best een grote zaak hier.",
    "Wow, wat een verrassing - nog een lastige AI-ethiek vraag! Laat me raden, je vraagt je af of de technische dingen net zo belangrijk zijn als de sociale? Spoiler: ze zijn beide belangrijk.",
    "Bedankt voor dat fascinerende inzicht. Heb je misschien, heel misschien, nagedacht over hoe dit gebruikersvertrouwen kan beïnvloeden? Gewoon een wilde gedachte.",
    "Baanbrekende vraag! Je zult geschokt zijn te horen dat je pas de 500e persoon bent die dat vandaag vraagt. Misschien je beslissingen opschrijven? Revolutionair concept, ik weet het.",
  ],
}

export function CharlieAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAwake, setIsAwake] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hallo! Hoe kan ik je helpen met je ethische vragen vandaag?" },
  ])
  const [input, setInput] = useState("")
  const [tone, setTone] = useState("friendly")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("charlieMessages")
    const savedTone = localStorage.getItem("charlieTone")

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }

    if (savedTone) {
      setTone(savedTone)
    }
  }, [])

  // Save messages to localStorage when they change
  useEffect(() => {
    localStorage.setItem("charlieMessages", JSON.stringify(messages))
  }, [messages])

  // Listen for tone changes from settings
  useEffect(() => {
    const handleToneChange = (event: StorageEvent) => {
      if (event.key === "charlieTone" && event.newValue) {
        setTone(event.newValue)
      }
    }

    window.addEventListener("storage", handleToneChange)
    return () => window.removeEventListener("storage", handleToneChange)
  }, [])

  const handleOpen = () => {
    setIsAwake(true)
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      setIsAwake(false)
    }, 300)
  }

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      const updatedMessages = [...messages, { role: "user", content: input }]
      setMessages(updatedMessages)
      localStorage.setItem("charlieMessages", JSON.stringify(updatedMessages))

      // Simulate Charlie's response based on selected tone
      setTimeout(() => {
        const responses = toneResponses[tone as keyof typeof toneResponses] || toneResponses.friendly
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        const newMessages = [...updatedMessages, { role: "assistant", content: randomResponse }]
        setMessages(newMessages)
        localStorage.setItem("charlieMessages", JSON.stringify(newMessages))
      }, 1000)

      setInput("")
    }
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Public method to open Charlie from other components
  useEffect(() => {
    const openCharlie = () => handleOpen()
    window.openCharlie = openCharlie
    return () => {
      delete window.openCharlie
    }
  }, [])

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={handleOpen}
          className={cn("h-12 w-12 rounded-full shadow-lg transition-transform duration-300", isAwake && "scale-110")}
          size="icon"
          aria-label="Open Charlie Assistant"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("transition-transform duration-300", isAwake && "rotate-12")}
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
            <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
            <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor" />
            <path d="M12 16.5C14.33 16.5 16.31 15.04 17.11 13H6.89C7.69 15.04 9.67 16.5 12 16.5Z" fill="currentColor" />
          </svg>
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 z-50 w-80 shadow-lg transition-opacity duration-300 md:w-96">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Charlie</CardTitle>
                  <p className="text-xs text-muted-foreground">Ethics Assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleClose}
                aria-label="Close Charlie Assistant"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="h-[300px] overflow-y-auto p-3">
            <div className="flex flex-col gap-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex w-full", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 p-3">
            <Textarea
              placeholder="Vraag Charlie over ethiek..."
              className="min-h-[40px] resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

// Add global type for the openCharlie function
declare global {
  interface Window {
    openCharlie?: () => void
  }
}
