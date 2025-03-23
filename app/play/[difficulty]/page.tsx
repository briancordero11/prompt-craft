"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { GameSession } from "@/components/game/game-session"
import type { GameDifficulty, GameSession as GameSessionType } from "@/lib/game-engine"
import { Loader2 } from "lucide-react"

export default function PlayPage() {
  const { difficulty } = useParams(); // 🔥 Fetch from URL dynamically
  const [gameSession, setGameSession] = useState<GameSessionType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!difficulty) return; // Prevent running without difficulty

    const createGameSession = async () => {
      try {
        console.log("Sending request to create game session with difficulty:", difficulty);
        const response = await fetch("/api/game", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ difficulty }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Failed to create game session:", errorText);
          throw new Error(`Failed to create game session: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Game session created successfully:", data);
        setGameSession(data);
      } catch (err) {
        console.error("Error creating game session:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    createGameSession();
  }, [difficulty]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!gameSession) {
    return <div className="flex justify-center items-center h-screen">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>;
  }

  return (
    <div>
      <h1>Game Session</h1>
      <pre>{JSON.stringify(gameSession, null, 2)}</pre>
    </div>
  );
}
