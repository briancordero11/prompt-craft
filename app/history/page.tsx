"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, Calendar, BarChart, Clock, Trophy } from "lucide-react"
import Link from "next/link"

// Types for mock data
interface GameHistoryItem {
  id: string
  date: Date
  difficulty: "easy" | "medium" | "hard" | "challenge"
  score: number
  imageId: string
  imageUrl: string
  prompt: string
}

export default function HistoryPage() {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState<GameHistoryItem[]>([])

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login")
    }

    if (status === "authenticated") {
      // In a real app, this would be an API call to fetch the user's game history
      // For preview, we'll use mock data
      setTimeout(() => {
        setHistory([
          {
            id: "1",
            date: new Date("2023-05-15T14:30:00"),
            difficulty: "easy",
            score: 85,
            imageId: "1",
            imageUrl: "/images/mountain-lake.jpg",
            prompt: "A beautiful mountain lake with trees and mountains in the background",
          },
          {
            id: "2",
            date: new Date("2023-05-14T10:15:00"),
            difficulty: "medium",
            score: 72,
            imageId: "3",
            imageUrl: "/images/futuristic-city.jpg",
            prompt: "A futuristic city with neon lights and flying cars",
          },
          {
            id: "3",
            date: new Date("2023-05-12T16:45:00"),
            difficulty: "hard",
            score: 68,
            imageId: "5",
            imageUrl: "/images/ancient-temple.jpg",
            prompt: "An old temple with vines and sunlight coming through the walls",
          },
          {
            id: "4",
            date: new Date("2023-05-10T09:20:00"),
            difficulty: "challenge",
            score: 91,
            imageId: "7",
            imageUrl: "/images/abstract-art.jpg",
            prompt: "An abstract painting with swirls of red, blue, and yellow colors creating movement",
          },
          {
            id: "5",
            date: new Date("2023-05-08T11:10:00"),
            difficulty: "easy",
            score: 95,
            imageId: "2",
            imageUrl: "/images/cafe-interior.jpg",
            prompt:
              "A cozy cafe with wooden tables, plants hanging from the ceiling, and large windows with natural light",
          },
        ])
        setIsLoading(false)
      }, 1000)
    }
  }, [status])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "hard":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "challenge":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    if (score >= 50) return "text-orange-600"
    return "text-red-600"
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Game History</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
          <TabsTrigger value="challenge">Challenge</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Games</CardTitle>
              <CardDescription>View your complete game history across all difficulty levels</CardDescription>
            </CardHeader>
            <CardContent>
              {history.length > 0 ? (
                <div className="space-y-4">
                  {history.map((game) => (
                    <div key={game.id} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                      <div className="w-full md:w-32 h-24 overflow-hidden rounded-md">
                        <img
                          src={game.imageUrl || "/placeholder.svg"}
                          alt="Game image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <div className="flex items-center gap-2 mb-2 md:mb-0">
                            <Badge className={getDifficultyColor(game.difficulty)}>
                              {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formatDate(game.date)}
                            </span>
                          </div>
                          <div className={`text-xl font-bold ${getScoreColor(game.score)}`}>{game.score}/100</div>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Your prompt:</span> {game.prompt}
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/history/${game.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">You haven't played any games yet.</p>
                  <Button asChild>
                    <Link href="/play/easy">Start Playing</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar content for other tabs, filtered by difficulty */}
        <TabsContent value="easy">{/* Similar structure but filtered for easy games */}</TabsContent>
        <TabsContent value="medium">{/* Similar structure but filtered for medium games */}</TabsContent>
        <TabsContent value="hard">{/* Similar structure but filtered for hard games */}</TabsContent>
        <TabsContent value="challenge">{/* Similar structure but filtered for challenge games */}</TabsContent>
      </Tabs>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Your overall performance statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Average Score</h3>
                </div>
                <p className="text-3xl font-bold text-primary">82</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Games Played</h3>
                </div>
                <p className="text-3xl font-bold text-primary">{history.length}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Best Score</h3>
                </div>
                <p className="text-3xl font-bold text-primary">95</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

