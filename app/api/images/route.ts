import { NextResponse } from "next/server"

// This would be replaced with a real database or API call in production
const images = [
  {
    id: 1,
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "A serene mountain lake surrounded by pine trees with snow-capped peaks in the background under a clear blue sky",
    difficulty: "easy",
  },
  {
    id: 2,
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A cozy cafe interior with wooden tables, hanging plants, and large windows letting in natural light",
    difficulty: "easy",
  },
  {
    id: 3,
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A futuristic cityscape at night with neon lights, flying vehicles, and tall skyscrapers",
    difficulty: "medium",
  },
  {
    id: 4,
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt: "A close-up of a colorful butterfly resting on a purple flower with dew drops",
    difficulty: "medium",
  },
  {
    id: 5,
    url: "/placeholder.svg?height=600&width=800",
    idealPrompt:
      "An ancient stone temple partially covered in vines and moss, with sunlight streaming through broken walls",
    difficulty: "hard",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const difficulty = searchParams.get("difficulty")

  let filteredImages = images

  if (difficulty) {
    filteredImages = images.filter((image) => image.difficulty === difficulty)
  }

  return NextResponse.json(filteredImages)
}

