import { type NextRequest, NextResponse } from "next/server"
import { getLeaderboard, type GameDifficulty } from "@/lib/game-engine"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const difficulty = searchParams.get("difficulty") as GameDifficulty | undefined
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    const leaderboard = await getLeaderboard(difficulty, limit)

    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error("Error fetching leaderboard:", error)
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 })
  }
}

