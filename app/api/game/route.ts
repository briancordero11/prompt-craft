import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";  // Ensure db is correctly imported

export async function POST(req: NextRequest) {
  try {
    console.log("✅ Received POST request at /api/game");

    const { difficulty } = await req.json();
    console.log("📌 Difficulty received:", difficulty);

    if (!difficulty || !["easy", "medium", "hard", "challenge"].includes(difficulty)) {
      console.error("❌ Invalid difficulty:", difficulty);
      return NextResponse.json({ error: "Invalid difficulty level" }, { status: 400 });
    }

    console.log("🚀 Creating game session...");
    const gameSession = await db.gameSession.create({
      data: {
        difficulty,
        gameSessionImages: { create: [] }, // Placeholder (update with actual logic)
        scores: { create: [] },
        currentRound: 0,
        totalRounds: 5,
        timeLimit: 60,
        userId: "test-user-id", // Replace with actual user ID logic
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
