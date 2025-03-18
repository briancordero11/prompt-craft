"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type GameModeCardProps = {
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard" | "challenge"
  imageUrl: string
  linkUrl: string
}

const difficultyColors = {
  easy: "bg-green-100 text-green-800 hover:bg-green-200",
  medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  hard: "bg-red-100 text-red-800 hover:bg-red-200",
  challenge: "bg-purple-100 text-purple-800 hover:bg-purple-200",
}

function GameModeCard({ title, description, difficulty, imageUrl, linkUrl }: GameModeCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <img className="h-full w-full object-cover" src={imageUrl || "/placeholder.svg"} alt={title} />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-500">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={linkUrl} className="text-indigo-600 font-medium hover:text-indigo-500">
          Play Now &rarr;
        </Link>
      </CardFooter>
    </Card>
  )
}

export function GameModes() {
  const gameModes = [
    {
      title: "Beginner Mode",
      description: "Practice with simple images and get detailed feedback to improve your prompt writing skills.",
      difficulty: "easy" as const,
      imageUrl: "/placeholder.svg?height=400&width=600",
      linkUrl: "/play/easy",
    },
    {
      title: "Intermediate Mode",
      description: "More complex images with multiple elements. Test your ability to notice details.",
      difficulty: "medium" as const,
      imageUrl: "/placeholder.svg?height=400&width=600",
      linkUrl: "/play/medium",
    },
    {
      title: "Expert Mode",
      description: "Challenge yourself with complex, artistic images that require precise descriptions.",
      difficulty: "hard" as const,
      imageUrl: "/placeholder.svg?height=400&width=600",
      linkUrl: "/play/hard",
    },
    {
      title: "Time Challenge",
      description: "Race against the clock! How accurately can you describe images under time pressure?",
      difficulty: "challenge" as const,
      imageUrl: "/placeholder.svg?height=400&width=600",
      linkUrl: "/play/challenge",
    },
  ]

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Game Modes</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Challenge yourself at every level
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose your difficulty and start improving your prompt engineering skills today.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {gameModes.map((mode) => (
              <GameModeCard key={mode.title} {...mode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

