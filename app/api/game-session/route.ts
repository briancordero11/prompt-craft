import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";  

export async function POST(req: NextRequest) {
  try {
    console.log("✅ Received POST request at /api/game");

    const body = await req.json();
    console.log("📌 Request body:", body);

    const { difficulty } = body;
    if (!difficulty || !["easy", "medium", "hard", "challenge"].includes(difficulty)) {
      console.error("❌ Invalid difficulty:", difficulty);
      return NextResponse.json({ error: "Invalid difficulty level" }, { status: 400 });
    }

    console.log("🚀 Creating game session...");
    const gameSession = await db.gameSession.create({
      data: {
        difficulty,
        gameSessionImages: { create: [] },
        scores: { create: [] },
        currentRound: 0,
        totalRounds: 5,
        timeLimit: 60,
        userId: "test-user-id"  // Replace this later with actual user ID logic
      },
    });

    console.log("✅ Game session created:", gameSession);
    return NextResponse.json(gameSession);
  } catch (error) {
    console.error("❌ Error creating game session:", error);
    return NextResponse.json(
      { error: "Failed to create game session", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
