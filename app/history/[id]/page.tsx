"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"

// Types for mock data
interface GameDetail {
  id: string
  date: Date
  difficulty: "easy" | "medium" | "hard" | "challenge"
  score: number
  imageId: string
  imageUrl: string
  userPrompt: string
  idealPrompt: string
  feedback: string
  timeSpent: number // in seconds
}

export default function GameDetailPage() {
  const { data: session, status } = useSession()
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [gameDetail, setGameDetail] = useState<GameDetail | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
      return
    }

    if (status === "authenticated") {
      // In a real app, this would be an API call to fetch the game details
      // For preview, we'll use mock data
      setTimeout(() => {
        // Mock data for the game with the given ID
        const mockGameDetail: GameDetail = {
          id: params.id as string,
          date: new Date("2023-05-15T14:30:00"),
          difficulty: "medium",
          score: 85,
          imageId: "3",
          imageUrl: "/images/futuristic-city.jpg",
          userPrompt: "A futuristic city with neon lights and flying cars",
          idealPrompt: "A futuristic cityscape at night with neon lights, flying vehicles, and tall skyscrapers",
          feedback:
            'Good job! You identified most key elements. The ideal prompt also included: "cityscape, night, skyscrapers".',
          timeSpent: 65, // 1 minute and 5 seconds
        }

        setGameDetail(mockGameDetail)
        setIsLoading(false)
      }, 1000)
    }
  }, [status, params.id, router])

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

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  if (!gameDetail) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-red-600">Game Not Found</h1>
          <p className="mt-2 text-gray-600">
            The game you're looking for doesn't exist or you don't have access to it.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/history">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to History
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/history">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to History
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Game Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Image</CardTitle>
            <CardDescription>The image you were asked to describe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden">
              <img src={gameDetail.imageUrl || "/placeholder.svg"} alt="Game image" className="w-full h-auto" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Performance</CardTitle>
              <Badge className={getDifficultyColor(gameDetail.difficulty)}>
                {gameDetail.difficulty.charAt(0).toUpperCase() + gameDetail.difficulty.slice(1)}
              </Badge>
            </div>
            <CardDescription>Your performance details for this game</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Date</h3>
              <p className="flex items-center text-gray-700">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(gameDetail.date)}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Time Spent</h3>
              <p className="flex items-center text-gray-700">
                <Clock className="h-4 w-4 mr-2" />
                {formatTime(gameDetail.timeSpent)}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Score</h3>
              <div className="flex items-center">
                <div className={`text-4xl font-bold ${getScoreColor(gameDetail.score)}`}>{gameDetail.score}</div>
                <div className="ml-2 text-xl text-gray-500">/100</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Your Prompt</h3>
              <p className="p-3 bg-gray-50 rounded-md text-gray-700">{gameDetail.userPrompt}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Ideal Prompt</h3>
              <p className="p-3 bg-gray-50 rounded-md text-gray-700">{gameDetail.idealPrompt}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Feedback</h3>
              <p className="p-3 bg-gray-50 rounded-md text-gray-700">{gameDetail.feedback}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/play/${gameDetail.difficulty}`}>Play Again</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

