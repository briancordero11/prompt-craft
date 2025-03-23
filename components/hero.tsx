"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AvatarCircles } from "@/components/avatar-circles"
import { Trophy, Clock, Target } from "lucide-react"
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar"

// Mock data for leaderboard
const topPlayers = [
  { id: 1, name: "Sarah Chen", score: 98, accuracy: 96, speed: "1:24", avatar: "/placeholder.svg?height=40&width=40" },
  {
    id: 2,
    name: "Alex Johnson",
    score: 95,
    accuracy: 94,
    speed: "1:32",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    score: 93,
    accuracy: 92,
    speed: "1:45",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Jamie Taylor",
    score: 91,
    accuracy: 90,
    speed: "1:38",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  { id: 5, name: "Chris Lee", score: 89, accuracy: 88, speed: "1:52", avatar: "/placeholder.svg?height=40&width=40" },
]

// Mock data for avatar circles
const avatars = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/89768406", profileUrl: "#" },
]

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Master the art of</span>{" "}
                  <span className="block text-indigo-600 xl:inline">prompt engineering</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Practice describing images with precision and learn to craft the perfect prompts for AI image
                  generation. Challenge yourself, track your progress, and climb the leaderboards.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/play">
                      <Button size="lg" className="px-8 py-3 text-base">
                        Play Now
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/learn">
                      <Button variant="outline" size="lg" className="px-8 py-3 text-base">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    Join our growing community of prompt engineers
                  </p>
                  <AvatarCircles numPeople={250} avatarUrls={avatars} />
                </div>
              </div>

              <div className="lg:col-span-2">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                      Daily Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-5 text-sm font-medium text-gray-500 pb-2 border-b">
                        <div className="col-span-2">Player</div>
                        <div className="text-center">Score</div>
                        <div className="text-center">Accuracy</div>
                        <div className="text-center">Speed</div>
                      </div>

                      {topPlayers.map((player, index) => (
                        <div key={player.id} className="grid grid-cols-5 items-center">
                          <div className="col-span-2 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mr-3 font-bold">
                              {index + 1}
                            </div>
                            <div className="flex items-center">
                              <img
                                src={player.avatar || "/placeholder.svg"}
                                alt={player.name}
                                className="h-8 w-8 rounded-full mr-2"
                              />
                              <span className="font-medium truncate">{player.name}</span>
                            </div>
                          </div>
                          <div className="text-center font-bold">{player.score}</div>
                          <div className="text-center flex justify-center items-center">
                            <Target className="h-4 w-4 text-green-500 mr-1" />
                            {player.accuracy}%
                          </div>
                          <div className="text-center flex justify-center items-center">
                            <Clock className="h-4 w-4 text-blue-500 mr-1" />
                            {player.speed}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline" asChild>
                        <Link href="/leaderboard">View Full Leaderboard</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <AnimatedCircularProgressBar
                      max={100}
                      min={0}
                      value={92}
                      size={80}
                      gaugePrimaryColor="rgb(79 70 229)"
                    />
                    <p className="mt-2 text-sm font-medium text-gray-700">Avg. Accuracy</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <AnimatedCircularProgressBar
                      max={100}
                      min={0}
                      value={78}
                      size={80}
                      gaugePrimaryColor="rgb(16 185 129)"
                    />
                    <p className="mt-2 text-sm font-medium text-gray-700">Daily Players</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <AnimatedCircularProgressBar
                      max={100}
                      min={0}
                      value={85}
                      size={80}
                      gaugePrimaryColor="rgb(245 158 11)"
                    />
                    <p className="mt-2 text-sm font-medium text-gray-700">Skill Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

