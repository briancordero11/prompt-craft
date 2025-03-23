"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Timer } from "@/components/game/timer"
import type { GameScore, GameSession as GameSessionType } from "@/lib/game-engine"
import { Loader2 } from "lucide-react"

interface GameSessionProps {
  initialSession: GameSessionType
}

export function GameSession({ initialSession }: GameSessionProps) {
  const router = useRouter()
  const [session, setSession] = useState<GameSessionType>(initialSession)
  const [userPrompt, setUserPrompt] = useState("")
  const [evaluation, setEvaluation] = useState<GameScore | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentImage = session.images[session.currentRound]
  const progress = ((session.currentRound + 1) / session.totalRounds) * 100

  const handleSubmit = async () => {
    if (userPrompt.trim().length < 10) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId: currentImage.id,
          userPrompt,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to evaluate prompt")
      }

      const result = await response.json()
      setEvaluation(result)

      // Update session with new score
      setSession((prev) => ({
        ...prev,
        scores: [...prev.scores, result.score],
      }))

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error evaluating prompt:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTimeUp = () => {
    if (!isSubmitted && !isSubmitting) {
      handleSubmit()
    }
  }

  const handleNext = () => {
    if (session.currentRound < session.totalRounds - 1) {
      // Move to next round
      setSession((prev) => ({
        ...prev,
        currentRound: prev.currentRound + 1,
      }))
      setUserPrompt("")
      setEvaluation(null)
      setIsSubmitted(false)
    } else {
      // Game complete, navigate to results
      const totalScore = session.scores.reduce((sum, score) => sum + score, 0)
      const averageScore = Math.round(totalScore / session.scores.length)

      router.push(`/results?score=${averageScore}&difficulty=${session.difficulty}`)
    }
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {session.difficulty.charAt(0).toUpperCase() + session.difficulty.slice(1)} Mode - Round{" "}
          {session.currentRound + 1}/{session.totalRounds}
        </h1>
        <div className="mt-4">
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Describe this image</span>
              {session.timeLimit > 0 && (
                <Timer seconds={session.timeLimit} onTimeUp={handleTimeUp} isActive={!isSubmitted} />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src={currentImage.url || "/placeholder.svg?height=600&width=800"}
                alt="Image to describe"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <Textarea
              placeholder="Write your description here... Be as detailed as possible."
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              className="min-h-32"
              disabled={isSubmitted || isSubmitting}
            />
            <div className="mt-4 flex justify-center">
              {!isSubmitted ? (
                <Button onClick={handleSubmit} disabled={userPrompt.length < 10 || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Description"
                  )}
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  {session.currentRound < session.totalRounds - 1 ? "Next Image" : "See Results"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-4 text-gray-500">Evaluating your prompt...</p>
              </div>
            ) : isSubmitted && evaluation ? (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Your Score</h3>
                  <div className="mt-2 flex items-center">
                    <div className="text-5xl font-bold text-indigo-600">{evaluation.score}</div>
                    <div className="ml-2 text-xl text-gray-500">/100</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Feedback</h3>
                  <p className="mt-2 text-gray-700">{evaluation.feedback}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Ideal Prompt</h3>
                  <p className="mt-2 text-gray-700 p-4 bg-gray-100 rounded-md">{evaluation.idealPrompt}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Submit your description to see feedback and scoring.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

