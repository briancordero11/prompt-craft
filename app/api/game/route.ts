import { type NextRequest, NextResponse } from "next/server"
import { createGameSession, type GameDifficulty } from "@/lib/game-engine"

export async function POST(req: NextRequest) {
  try {
    const { difficulty } = await req.json()

    if (!difficulty || !["easy", "medium", "hard", "challenge"].includes(difficulty)) {
      return NextResponse.json({ error: "Invalid difficulty level" }, { status: 400 })
    }

    const gameSession = await createGameSession(difficulty as GameDifficulty)

    return NextResponse.json(gameSession)
  } catch (error) {
    console.error("Error creating game session:", error)
    return NextResponse.json({ error: "Failed to create game session" }, { status: 500 })
  }
}

