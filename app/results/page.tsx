"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2, Trophy, ArrowRight, Home } from "lucide-react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const score = Number.parseInt(searchParams.get("score") || "0")
  const difficulty = searchParams.get("difficulty") || "easy"

  const getFeedbackMessage = () => {
    if (score >= 90) return "Outstanding! You're a prompt engineering master!"
    if (score >= 75) return "Great job! You have strong prompt engineering skills."
    if (score >= 60) return "Good work! You're on your way to becoming a prompt expert."
    if (score >= 40) return "Nice effort! With practice, you'll improve quickly."
    return "Keep practicing! Prompt engineering is a skill that develops over time."
  }

  const getNextChallenge = () => {
    switch (difficulty) {
      case "easy":
        return { text: "Try Intermediate Mode", path: "/play/medium" }
      case "medium":
        return { text: "Try Expert Mode", path: "/play/hard" }
      case "hard":
        return { text: "Try Time Challenge", path: "/play/challenge" }
      case "challenge":
        return { text: "Play Again", path: "/play/challenge" }
      default:
        return { text: "Try Another Mode", path: "/play/easy" }
    }
  }

  const nextChallenge = getNextChallenge()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold">Your Results</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="text-8xl font-bold text-indigo-600">{score}</div>
                <div className="absolute top-0 right-0 transform translate-x-full -translate-y-1/4 text-2xl text-gray-500">
                  /100
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xl font-medium text-gray-900">{getFeedbackMessage()}</p>
                <p className="mt-2 text-gray-500">You completed the {difficulty} difficulty challenge.</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full max-w-md">
                <Button
                  onClick={() => router.push(nextChallenge.path)}
                  className="flex items-center justify-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  {nextChallenge.text}
                </Button>

                <Button
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="flex items-center justify-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Button>
              </div>

              <div className="mt-6">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-gray-500"
                  onClick={() => {
                    // In a real app, this would open a share dialog
                    alert("Share functionality would be implemented here")
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  Share your results
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Leaderboard Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-500">
                  Sign up or log in to save your scores and compete on the global leaderboard!
                </p>
                <Button onClick={() => router.push("/signup")} className="w-full">
                  Create Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

