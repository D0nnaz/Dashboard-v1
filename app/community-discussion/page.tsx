"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Heart, Send } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Initial community replies
const initialReplies = [
  {
    id: 1,
    author: "Jane Doe",
    initials: "JD",
    content:
      "Ik onthul altijd door AI gegenereerde content aan mijn klanten. Het gaat om het opbouwen van vertrouwen en transparant zijn over mijn proces.",
    timestamp: "2 dagen geleden",
    likes: 12,
  },
  {
    id: 2,
    author: "Mark Smith",
    initials: "MS",
    content:
      "Ik denk dat het afhangt van de klant en het project. Voor creatieve verkenningen vermeld ik het misschien niet, maar voor definitieve leveringen onthul ik het altijd.",
    timestamp: "1 dag geleden",
    likes: 8,
  },
  {
    id: 3,
    author: "Lisa Wong",
    initials: "LW",
    content:
      "Transparantie is voor mij niet-onderhandelbaar. Ik neem AI-gebruik op in mijn contracten en bespreek het vooraf.",
    timestamp: "12 uur geleden",
    likes: 15,
  },
  {
    id: 4,
    author: "David Chen",
    initials: "DC",
    content:
      "Ik heb gemerkt dat klanten eerlijkheid waarderen. Toen ik begon met het onthullen van AI-gebruik, was ik verrast door hoeveel klanten eigenlijk geïnteresseerd waren in het leren over de technologie.",
    timestamp: "6 uur geleden",
    likes: 7,
  },
]

export default function CommunityDiscussionPage() {
  const [replies, setReplies] = useState(initialReplies)
  const [newReply, setNewReply] = useState("")
  const [likedReplies, setLikedReplies] = useState<number[]>([])

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedReplies = localStorage.getItem("communityReplies")
    const savedLikedReplies = localStorage.getItem("likedReplies")

    if (savedReplies) {
      setReplies(JSON.parse(savedReplies))
    }

    if (savedLikedReplies) {
      setLikedReplies(JSON.parse(savedLikedReplies))
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("communityReplies", JSON.stringify(replies))
  }, [replies])

  useEffect(() => {
    localStorage.setItem("likedReplies", JSON.stringify(likedReplies))
  }, [likedReplies])

  const handleAddReply = () => {
    if (newReply.trim()) {
      const newReplyObj = {
        id: replies.length + 1,
        author: "Jij",
        initials: "JI",
        content: newReply,
        timestamp: "Zojuist",
        likes: 0,
      }

      setReplies([...replies, newReplyObj])
      setNewReply("")
    }
  }

  const handleLike = (id: number) => {
    if (likedReplies.includes(id)) {
      // Unlike
      setLikedReplies(likedReplies.filter((replyId) => replyId !== id))
      setReplies(replies.map((reply) => (reply.id === id ? { ...reply, likes: Math.max(0, reply.likes - 1) } : reply)))
    } else {
      // Like
      setLikedReplies([...likedReplies, id])
      setReplies(replies.map((reply) => (reply.id === id ? { ...reply, likes: reply.likes + 1 } : reply)))
    }
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6">
      <Header />

      <div className="mt-8">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Terug naar dilemma
            </Link>
          </Button>
        </div>

        <Card className="mx-auto max-w-3xl">
          <CardHeader className="border-b pb-4">
            <h2 className="text-xl font-medium">Community discussie</h2>
            <p className="text-sm text-muted-foreground">
              Dilemma: Zou je het gebruik van Midjourney-afbeeldingen aan een klant onthullen als ze er niet specifiek
              naar vragen?
            </p>
          </CardHeader>

          <CardContent className="p-4">
            <div className="space-y-6">
              {replies.map((reply) => (
                <div key={reply.id} className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{reply.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{reply.author}</span>
                        <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 gap-1 px-2" onClick={() => handleLike(reply.id)}>
                        <Heart
                          className={cn(
                            "h-3.5 w-3.5",
                            likedReplies.includes(reply.id) ? "fill-red-500 text-red-500" : "text-muted-foreground",
                          )}
                        />
                        <span className="text-xs">{reply.likes}</span>
                      </Button>
                    </div>
                    <p className="text-sm">{reply.content}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 flex gap-2">
                <Textarea
                  placeholder="Voeg je gedachten toe aan de discussie..."
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
                <Button className="self-end" onClick={handleAddReply} disabled={!newReply.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
