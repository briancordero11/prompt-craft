"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { GameDifficulty } from "@/lib/game-engine"
import { Loader2 } from "lucide-react"

interface LeaderboardEntry {
  user: {
    id: string
    name: string | null
    image: string | null
  }
  averageScore: number
  gamesPlayed: number
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [difficulty, setDifficulty] = useState<GameDifficulty | "all">("all")

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true)
      try {
        const url = difficulty === "all" ? "/api/leaderboard" : `/api/leaderboard?difficulty=${difficulty}`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard")
        }

        const data = await response.json()
        setLeaderboard(data)
      } catch (error) {
        console.error("Error fetching leaderboard:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLeaderboard()
  }, [difficulty])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Global Leaderboard</h1>

      <Card>
        <CardHeader>
          <CardTitle>Top Players</CardTitle>
          <CardDescription>See who's mastering prompt engineering</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={(value) => setDifficulty(value as GameDifficulty | "all")}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Modes</TabsTrigger>
              <TabsTrigger value="easy">Easy</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="hard">Hard</TabsTrigger>
              <TabsTrigger value="challenge">Challenge</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="space-y-4">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={entry.user.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/80 text-white flex items-center justify-center mr-4">
                          {index + 1}
                        </div>
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={entry.user.image || undefined} alt={entry.user.name || "User"} />
                          <AvatarFallback>{entry.user.name?.charAt(0) || "U"}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{entry.user.name || "Anonymous User"}</p>
                          <p className="text-sm text-muted-foreground">{entry.gamesPlayed} games played</p>
                        </div>
                      </div>
                      <div className="text-xl font-bold">{entry.averageScore}</div>
                    </div>
                  ))}

                  {leaderboard.length === 0 && !isLoading && (
                    <div className="text-center py-12 text-muted-foreground">No leaderboard data available yet</div>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="easy">
              {/* Same structure as "all" tab but filtered for easy difficulty */}
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="space-y-4">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={entry.user.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500/80 text-white flex items-center justify-center mr-4">
                          {index + 1}
                        </div>
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={entry.user.image || undefined} alt={entry.user.name || "User"} />
                          <AvatarFallback>{entry.user.name?.charAt(0) || "U"}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{entry.user.name || "Anonymous User"}</p>
                          <p className="text-sm text-muted-foreground">{entry.gamesPlayed} games played</p>
                        </div>
                      </div>
                      <div className="text-xl font-bold">{entry.averageScore}</div>
                    </div>
                  ))}

                  {leaderboard.length === 0 && !isLoading && (
                    <div className="text-center py-12 text-muted-foreground">
                      No leaderboard data available for Easy mode
                    </div>
                  )}
                </div>
              )}
            </TabsContent>

            {/* Similar TabsContent for medium, hard, and challenge difficulties */}
            <TabsContent value="medium">{/* Similar structure */}</TabsContent>
            <TabsContent value="hard">{/* Similar structure */}</TabsContent>
            <TabsContent value="challenge">{/* Similar structure */}</TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

