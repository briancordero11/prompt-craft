"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Timer } from "@/components/timer"

type GameProps = {
  difficulty: "easy" | "medium" | "hard" | "challenge"
}

// This would come from an API in the real app
const sampleImages = [
  {
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "A serene mountain lake surrounded by pine trees with snow-capped peaks in the background under a clear blue sky",
  },
  {
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A cozy cafe interior with wooden tables, hanging plants, and large windows letting in natural light",
  },
  {
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A futuristic cityscape at night with neon lights, flying vehicles, and tall skyscrapers",
  },
  {
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A close-up of a colorful butterfly resting on a purple flower with dew drops",
  },
  {
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "An ancient stone temple partially covered in vines and moss, with sunlight streaming through broken walls",
  },
]

export function Game({ difficulty }: GameProps) {
  const router = useRouter()
  const [userPrompt, setUserPrompt] = useState("")
  const [score, setScore] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [round, setRound] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [currentImage, setCurrentImage] = useState(sampleImages[0])

  // Set time based on difficulty
  const getTimeForDifficulty = () => {
    switch (difficulty) {
      case "easy":
        return 120
      case "medium":
        return 90
      case "hard":
        return 60
      case "challenge":
        return 30
      default:
        return 60
    }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeForDifficulty())

  // Update current image when round changes
  useEffect(() => {
    setCurrentImage(sampleImages[round % sampleImages.length])
  }, [round])

  const calculateScore = (userInput: string, idealPrompt: string): number => {
    // This is a simplified scoring algorithm
    // In a real app, you'd want to use NLP techniques to compare semantic similarity

    const userWords = new Set(userInput.toLowerCase().split(/\s+/))
    const idealWords = new Set(idealPrompt.toLowerCase().split(/\s+/))

    let matches = 0
    idealWords.forEach((word) => {
      if (userWords.has(word)) matches++
    })

    const coverage = matches / idealWords.size
    const precision = matches / userWords.size

    // F1 score: harmonic mean of precision and recall (coverage)
    const f1 = (2 * (precision * coverage)) / (precision + coverage || 1) // Avoid division by zero

    return Math.round(f1 * 100)
  }

  const generateFeedback = (userInput: string, idealPrompt: string, score: number): string => {
    if (score >= 90) {
      return "Excellent! Your description captures all the key elements perfectly."
    } else if (score >= 70) {
      return `Good job! You identified most key elements. The ideal prompt also included: "${getMissingElements(userInput, idealPrompt)}".`
    } else if (score >= 50) {
      return `Nice start! You captured some elements, but missed: "${getMissingElements(userInput, idealPrompt)}". Try to be more detailed in your descriptions.`
    } else {
      return `Keep practicing! Your description missed key elements like: "${getMissingElements(userInput, idealPrompt)}". Remember to describe all visible objects, colors, and atmosphere.`
    }
  }

  const getMissingElements = (userInput: string, idealPrompt: string): string => {
    // Simplified function to identify missing elements
    const userWords = new Set(userInput.toLowerCase().split(/\s+/))
    const idealWords = idealPrompt.toLowerCase().split(/\s+/)

    const missingKeywords = idealWords.filter((word) => word.length > 3 && !userWords.has(word)).slice(0, 3)

    return missingKeywords.join(", ")
  }

  const handleSubmit = () => {
    const calculatedScore = calculateScore(userPrompt, currentImage.idealPrompt)
    setScore(calculatedScore)
    setFeedback(generateFeedback(userPrompt, currentImage.idealPrompt, calculatedScore))
    setIsSubmitted(true)
    setTotalScore((prevTotal) => prevTotal + calculatedScore)
  }

  const handleTimeUp = () => {
    if (!isSubmitted) {
      handleSubmit()
    }
  }

  const handleNext = () => {
    if (round < 4) {
      // 5 rounds total (0-4)
      setRound(round + 1)
      setUserPrompt("")
      setScore(null)
      setFeedback(null)
      setIsSubmitted(false)
      setTimeLeft(getTimeForDifficulty())
    } else {
      // End of game, navigate to results
      router.push(`/results?score=${Math.round(totalScore / 5)}&difficulty=${difficulty}`)
    }
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode - Round {round + 1}/5
        </h1>
        <div className="mt-4">
          <Progress value={(round + 1) * 20} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Describe this image</span>
              {difficulty !== "easy" && <Timer seconds={timeLeft} onTimeUp={handleTimeUp} isActive={!isSubmitted} />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src={currentImage.url || "/placeholder.svg"}
                alt="Image to describe"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <Textarea
              placeholder="Write your description here... Be as detailed as possible."
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              className="min-h-32"
              disabled={isSubmitted}
            />
            <div className="mt-4 flex justify-center">
              {!isSubmitted ? (
                <Button onClick={handleSubmit} disabled={userPrompt.length < 10}>
                  Submit Description
                </Button>
              ) : (
                <Button onClick={handleNext}>{round < 4 ? "Next Image" : "See Results"}</Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Your Score</h3>
                  <div className="mt-2 flex items-center">
                    <div className="text-5xl font-bold text-indigo-600">{score}</div>
                    <div className="ml-2 text-xl text-gray-500">/100</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Feedback</h3>
                  <p className="mt-2 text-gray-700">{feedback}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Ideal Prompt</h3>
                  <p className="mt-2 text-gray-700 p-4 bg-gray-100 rounded-md">{currentImage.idealPrompt}</p>
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

