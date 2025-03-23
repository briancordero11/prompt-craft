"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Calendar, Trophy, Users } from "lucide-react"
import Link from "next/link"

interface UserStats {
  gamesPlayed: number
  averageScore: number
  bestScore: number
  rank: number
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [stats, setStats] = useState<UserStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login")
    }

    if (status === "authenticated") {
      // Fetch user stats
      // This would be a real API call in production
      setTimeout(() => {
        setStats({
          gamesPlayed: 12,
          averageScore: 78,
          bestScore: 92,
          rank: 42,
        })
        setIsLoading(false)
      }, 1000)
    }
  }, [status])

  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome, {session?.user?.name || "User"}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Games Played</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.gamesPlayed || 0}</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.averageScore || 0}</div>
            <p className="text-xs text-muted-foreground">+5 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Best Score</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.bestScore || 0}</div>
            <p className="text-xs text-muted-foreground">Expert mode</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Global Rank</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{stats?.rank || "--"}</div>
            <p className="text-xs text-muted-foreground">Top 10%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent games and scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Expert Mode</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
                <div className="text-lg font-bold">85</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Medium Mode</p>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                </div>
                <div className="text-lg font-bold">92</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Challenge Mode</p>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                </div>
                <div className="text-lg font-bold">78</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Play Again</CardTitle>
            <CardDescription>Choose a difficulty level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/play/easy">
                <Button variant="outline" className="w-full">
                  Easy
                </Button>
              </Link>
              <Link href="/play/medium">
                <Button variant="outline" className="w-full">
                  Medium
                </Button>
              </Link>
              <Link href="/play/hard">
                <Button variant="outline" className="w-full">
                  Hard
                </Button>
              </Link>
              <Link href="/play/challenge">
                <Button variant="outline" className="w-full">
                  Challenge
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Leaderboard Preview</CardTitle>
          <CardDescription>Top players this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                  1
                </div>
                <p className="font-medium">Sarah Chen</p>
              </div>
              <div className="text-lg font-bold">98</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/80 text-white flex items-center justify-center mr-3">
                  2
                </div>
                <p className="font-medium">Alex Johnson</p>
              </div>
              <div className="text-lg font-bold">95</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/60 text-white flex items-center justify-center mr-3">
                  3
                </div>
                <p className="font-medium">Michael Rodriguez</p>
              </div>
              <div className="text-lg font-bold">93</div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/leaderboard">
                <Button variant="outline">View Full Leaderboard</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

