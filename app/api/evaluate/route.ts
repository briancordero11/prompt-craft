import { type NextRequest, NextResponse } from "next/server"
import { evaluatePrompt } from "@/lib/game-engine"

export async function POST(req: NextRequest) {
  try {
    const { imageId, userPrompt } = await req.json()

    if (!imageId || !userPrompt) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const evaluation = await evaluatePrompt(imageId, userPrompt)

    return NextResponse.json(evaluation)
  } catch (error) {
    console.error("Error evaluating prompt:", error)
    return NextResponse.json({ error: "Failed to evaluate prompt" }, { status: 500 })
  }
}

