"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { GameSession } from "@/components/game/game-session"
import type { GameDifficulty, GameSession as GameSessionType } from "@/lib/game-engine"
import { Loader2 } from "lucide-react"

export default function PlayPage() {
  const params = useParams()
  const difficulty = params.difficulty as GameDifficulty
  const [session, setSession] = useState<GameSessionType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const createGameSession = async () => {
      try {
        const response = await fetch("/api/game", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ difficulty }),
        })

        if (!response.ok) {
          throw new Error("Failed to create game session")
        }

        const gameSession = await response.json()
        setSession(gameSession)
      } catch (error) {
        console.error("Error creating game session:", error)
        setError("Failed to start game. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    createGameSession()
  }, [difficulty])

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-xl text-gray-600">Loading game...</p>
      </div>
    )
  }

  if (error || !session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Error</h1>
          <p className="mt-2 text-gray-600">{error || "Failed to load game"}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <GameSession initialSession={session} />
    </div>
  )
}

