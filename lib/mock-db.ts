// Mock database implementation with no Prisma dependencies
import { v4 as uuidv4 } from "uuid"

// Types for our data models
export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  password: string | null
  createdAt: Date
  updatedAt: Date
}

export type Image = {
  id: string
  url: string
  idealPrompt: string
  difficulty: string
  category: string | null
  createdAt: Date
  updatedAt: Date
}

export type Score = {
  id: string
  score: number
  userPrompt: string
  userId: string
  imageId: string
  createdAt: Date
}

// Mock data
const users: User[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@promptcraft.com",
    emailVerified: new Date(),
    image: null,
    password: "$2b$12$K8Y6JzKC6z8kS6kS6kS6kO6kS6kS6kS6kS6kS6kS6kS6kS6kS6", // hashed 'password123'
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    emailVerified: new Date(),
    image: "/placeholder.svg?height=40&width=40",
    password: null,
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
  },
  {
    id: "3",
    name: "Alex Johnson",
    email: "alex@example.com",
    emailVerified: new Date(),
    image: "/placeholder.svg?height=40&width=40",
    password: null,
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-02-01"),
  },
]

const images: Image[] = [
  {
    id: "1",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "A serene mountain lake surrounded by pine trees with snow-capped peaks in the background under a clear blue sky",
    difficulty: "easy",
    category: "nature",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: "2",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A cozy cafe interior with wooden tables, hanging plants, and large windows letting in natural light",
    difficulty: "easy",
    category: "interior",
    createdAt: new Date("2023-01-02"),
    updatedAt: new Date("2023-01-02"),
  },
  {
    id: "3",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A futuristic cityscape at night with neon lights, flying vehicles, and tall skyscrapers",
    difficulty: "medium",
    category: "sci-fi",
    createdAt: new Date("2023-01-03"),
    updatedAt: new Date("2023-01-03"),
  },
  {
    id: "4",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A close-up of a colorful butterfly resting on a purple flower with dew drops",
    difficulty: "medium",
    category: "nature",
    createdAt: new Date("2023-01-04"),
    updatedAt: new Date("2023-01-04"),
  },
  {
    id: "5",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "An ancient stone temple partially covered in vines and moss, with sunlight streaming through broken walls",
    difficulty: "hard",
    category: "architecture",
    createdAt: new Date("2023-01-05"),
    updatedAt: new Date("2023-01-05"),
  },
  {
    id: "6",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A sleek humanoid robot with glowing blue eyes standing in a minimalist white laboratory",
    difficulty: "hard",
    category: "technology",
    createdAt: new Date("2023-01-06"),
    updatedAt: new Date("2023-01-06"),
  },
  {
    id: "7",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "An abstract painting with swirls of vibrant colors including red, blue, and yellow creating a sense of movement and emotion",
    difficulty: "challenge",
    category: "art",
    createdAt: new Date("2023-01-07"),
    updatedAt: new Date("2023-01-07"),
  },
  {
    id: "8",
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "An elegantly plated gourmet dish with microgreens, colorful sauces, and artistic presentation on a black ceramic plate",
    difficulty: "challenge",
    category: "food",
    createdAt: new Date("2023-01-08"),
    updatedAt: new Date("2023-01-08"),
  },
]

const scores: Score[] = [
  {
    id: "1",
    score: 92,
    userPrompt: "A beautiful mountain lake with trees and mountains in the background",
    userId: "1",
    imageId: "1",
    createdAt: new Date("2023-02-01"),
  },
  {
    id: "2",
    score: 85,
    userPrompt: "A cafe with wooden tables and plants hanging from the ceiling",
    userId: "1",
    imageId: "2",
    createdAt: new Date("2023-02-02"),
  },
  {
    id: "3",
    score: 78,
    userPrompt: "A futuristic city with neon lights and flying cars",
    userId: "1",
    imageId: "3",
    createdAt: new Date("2023-02-03"),
  },
  {
    id: "4",
    score: 95,
    userPrompt: "A serene mountain lake with pine trees and snow-capped mountains under a blue sky",
    userId: "2",
    imageId: "1",
    createdAt: new Date("2023-02-04"),
  },
  {
    id: "5",
    score: 88,
    userPrompt: "A cozy cafe with wooden tables, plants, and large windows with natural light",
    userId: "2",
    imageId: "2",
    createdAt: new Date("2023-02-05"),
  },
  {
    id: "6",
    score: 90,
    userPrompt: "A butterfly on a purple flower with water droplets",
    userId: "3",
    imageId: "4",
    createdAt: new Date("2023-02-06"),
  },
]

// Mock database client
export const mockDb = {
  user: {
    findUnique: async ({ where }: { where: { id?: string; email?: string } }) => {
      if (where.id) {
        return users.find((user) => user.id === where.id) || null
      }
      if (where.email) {
        return users.find((user) => user.email === where.email) || null
      }
      return null
    },
    findFirst: async ({ where }: { where: { email?: string } }) => {
      if (where.email) {
        return users.find((user) => user.email === where.email) || null
      }
      return null
    },
    create: async ({ data }: { data: Partial<User> }) => {
      const newUser: User = {
        id: uuidv4(),
        name: data.name || null,
        email: data.email || null,
        emailVerified: data.emailVerified || null,
        image: data.image || null,
        password: data.password || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      users.push(newUser)
      return newUser
    },
    update: async ({ where, data }: { where: { id: string }; data: Partial<User> }) => {
      const index = users.findIndex((user) => user.id === where.id)
      if (index === -1) return null

      users[index] = { ...users[index], ...data, updatedAt: new Date() }
      return users[index]
    },
  },
  image: {
    findUnique: async ({ where }: { where: { id: string } }) => {
      return images.find((image) => image.id === where.id) || null
    },
    findMany: async ({
      where,
      take,
      orderBy,
    }: {
      where?: { difficulty?: string; category?: string }
      take?: number
      orderBy?: any
    } = {}) => {
      let result = [...images]

      if (where?.difficulty) {
        result = result.filter((image) => image.difficulty === where.difficulty)
      }

      if (where?.category) {
        result = result.filter((image) => image.category === where.category)
      }

      if (take) {
        result = result.slice(0, take)
      }

      return result
    },
  },
  score: {
    create: async ({ data }: { data: Omit<Score, "id" | "createdAt"> }) => {
      const newScore: Score = {
        id: uuidv4(),
        score: data.score,
        userPrompt: data.userPrompt,
        userId: data.userId,
        imageId: data.imageId,
        createdAt: new Date(),
      }
      scores.push(newScore)
      return newScore
    },
    findMany: async ({ where }: { where?: { userId?: string; imageId?: string } } = {}) => {
      let result = [...scores]

      if (where?.userId) {
        result = result.filter((score) => score.userId === where.userId)
      }

      if (where?.imageId) {
        result = result.filter((score) => score.imageId === where.imageId)
      }

      return result
    },
    groupBy: async ({ by, where, _avg, _count, orderBy, take }: any) => {
      // Simplified implementation of groupBy
      const groupedData: Record<string, any> = {}

      // Filter scores based on where condition
      let filteredScores = [...scores]
      if (where?.image?.difficulty) {
        filteredScores = filteredScores.filter((score) => {
          const image = images.find((img) => img.id === score.imageId)
          return image?.difficulty === where.image.difficulty
        })
      }

      // Group by specified field
      for (const score of filteredScores) {
        const key = score[by[0]]
        if (!groupedData[key]) {
          groupedData[key] = {
            [by[0]]: key,
            scores: [],
          }
        }
        groupedData[key].scores.push(score)
      }

      // Calculate aggregates
      const result = Object.values(groupedData).map((group) => {
        const groupScores = (group as any).scores
        const avgScore = groupScores.reduce((sum: number, s: Score) => sum + s.score, 0) / groupScores.length

        return {
          [by[0]]: (group as any)[by[0]],
          _avg: {
            score: avgScore,
          },
          _count: {
            score: groupScores.length,
          },
        }
      })

      // Sort by average score if specified
      if (orderBy?._avg?.score === "desc") {
        result.sort((a, b) => b._avg.score - a._avg.score)
      }

      // Limit results if specified
      return take ? result.slice(0, take) : result
    },
  },
}

export const db = mockDb

