import { db } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export type GameDifficulty = "easy" | "medium" | "hard" | "challenge"

export interface GameImage {
  id: string
  url: string
  idealPrompt?: string
  difficulty: GameDifficulty
  category?: string
}

export interface GameScore {
  score: number
  feedback: string
  missingElements: string[]
  idealPrompt: string
}

export interface GameSession {
  id: string
  images: GameImage[]
  currentRound: number
  totalRounds: number
  scores: number[]
  difficulty: GameDifficulty
  timeLimit: number
}

export const DIFFICULTY_TIME_LIMITS = {
  easy: 120,
  medium: 90,
  hard: 60,
  challenge: 30,
}

export const ROUNDS_PER_GAME = 5

/**
 * Creates a new game session with the specified difficulty
 */
export async function createGameSession(difficulty: GameDifficulty): Promise<GameSession> {
  // Get random images for the specified difficulty
  const images = await db.image.findMany({
    where: {
      difficulty,
    },
    take: ROUNDS_PER_GAME,
    orderBy: {
      // Random selection
      id: "asc",
    },
  })

  // Map to GameImage type
  const gameImages: GameImage[] = images.map((image) => ({
    id: image.id,
    url: image.url,
    difficulty: image.difficulty as GameDifficulty,
    category: image.category || undefined,
  }))

  return {
    id: crypto.randomUUID(),
    images: gameImages,
    currentRound: 0,
    totalRounds: ROUNDS_PER_GAME,
    scores: [],
    difficulty,
    timeLimit: DIFFICULTY_TIME_LIMITS[difficulty],
  }
}

/**
 * Evaluates a user's prompt against the ideal prompt
 */
export async function evaluatePrompt(imageId: string, userPrompt: string): Promise<GameScore> {
  // Get the image with the ideal prompt
  const image = await db.image.findUnique({
    where: {
      id: imageId,
    },
  })

  if (!image) {
    throw new Error("Image not found")
  }

  const idealPrompt = image.idealPrompt

  // Calculate score using NLP comparison (simplified version)
  const score = calculateScore(userPrompt, idealPrompt)

  // Generate feedback based on score
  const missingElements = getMissingElements(userPrompt, idealPrompt)
  const feedback = generateFeedback(score, missingElements)

  // Save score to database if user is logged in
  const session = await getServerSession(authOptions)
  if (session?.user?.id) {
    await db.score.create({
      data: {
        score,
        userPrompt,
        userId: session.user.id,
        imageId,
      },
    })
  }

  return {
    score,
    feedback,
    missingElements,
    idealPrompt,
  }
}

/**
 * Calculates a similarity score between user prompt and ideal prompt
 */
function calculateScore(userPrompt: string, idealPrompt: string): number {
  // This is a simplified scoring algorithm
  // In a production app, you'd want to use NLP techniques to compare semantic similarity

  const userWords = new Set(userPrompt.toLowerCase().split(/\s+/))
  const idealWords = new Set(idealPrompt.toLowerCase().split(/\s+/))

  let matches = 0
  idealWords.forEach((word) => {
    if (userWords.has(word)) matches++
  })

  const coverage = matches / idealWords.size
  const precision = matches / userWords.size

  // F1 score: harmonic mean of precision and recall (coverage)
  const f1 = (2 * (precision * coverage)) / (precision + coverage || 1) // Avoid division by zero

  return Math.round(f1 * 100)
}

/**
 * Identifies key elements missing from the user's prompt
 */
function getMissingElements(userPrompt: string, idealPrompt: string): string[] {
  const userWords = new Set(userPrompt.toLowerCase().split(/\s+/))
  const idealWords = idealPrompt.toLowerCase().split(/\s+/)

  // Find important words (longer than 3 chars) that are missing
  const missingKeywords = idealWords.filter((word) => word.length > 3 && !userWords.has(word)).slice(0, 3)

  return missingKeywords
}

/**
 * Generates feedback based on score and missing elements
 */
function generateFeedback(score: number, missingElements: string[]): string {
  const missingElementsText = missingElements.join(", ")

  if (score >= 90) {
    return "Excellent! Your description captures all the key elements perfectly."
  } else if (score >= 70) {
    return `Good job! You identified most key elements. The ideal prompt also included: "${missingElementsText}".`
  } else if (score >= 50) {
    return `Nice start! You captured some elements, but missed: "${missingElementsText}". Try to be more detailed in your descriptions.`
  } else {
    return `Keep practicing! Your description missed key elements like: "${missingElementsText}". Remember to describe all visible objects, colors, and atmosphere.`
  }
}

/**
 * Gets leaderboard data
 */
export async function getLeaderboard(difficulty?: GameDifficulty, limit = 10) {
  // Get top scores grouped by user
  const leaderboardData = await db.score.groupBy({
    by: ["userId"],
    where: difficulty
      ? {
          image: {
            difficulty,
          },
        }
      : undefined,
    _avg: {
      score: true,
    },
    _count: {
      score: true,
    },
    orderBy: {
      _avg: {
        score: "desc",
      },
    },
    take: limit,
  })

  // Get user details for each entry
  const leaderboard = await Promise.all(
    leaderboardData.map(async (entry) => {
      const user = await db.user.findUnique({
        where: {
          id: entry.userId,
        },
        select: {
          id: true,
          name: true,
          image: true,
        },
      })

      return {
        user,
        averageScore: Math.round(entry._avg.score || 0),
        gamesPlayed: entry._count.score,
      }
    }),
  )

  return leaderboard
}

