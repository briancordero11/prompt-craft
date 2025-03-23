import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // Create demo user
  const password = await hash("password123", 12)

  const demoUser = await prisma.user.upsert({
    where: { email: "demo@promptcraft.com" },
    update: {},
    create: {
      email: "demo@promptcraft.com",
      name: "Demo User",
      password,
    },
  })

  console.log(`Created demo user: ${demoUser.name}`)

  // Create sample images with ideal prompts
  const images = [
    {
      url: "/images/mountain-lake.jpg",
      idealPrompt:
        "A serene mountain lake surrounded by pine trees with snow-capped peaks in the background under a clear blue sky",
      difficulty: "easy",
      category: "nature",
    },
    {
      url: "/images/cafe-interior.jpg",
      idealPrompt:
        "A cozy cafe interior with wooden tables, hanging plants, and large windows letting in natural light",
      difficulty: "easy",
      category: "interior",
    },
    {
      url: "/images/futuristic-city.jpg",
      idealPrompt: "A futuristic cityscape at night with neon lights, flying vehicles, and tall skyscrapers",
      difficulty: "medium",
      category: "sci-fi",
    },
    {
      url: "/images/butterfly.jpg",
      idealPrompt: "A close-up of a colorful butterfly resting on a purple flower with dew drops",
      difficulty: "medium",
      category: "nature",
    },
    {
      url: "/images/ancient-temple.jpg",
      idealPrompt:
        "An ancient stone temple partially covered in vines and moss, with sunlight streaming through broken walls",
      difficulty: "hard",
      category: "architecture",
    },
    {
      url: "/images/robot.jpg",
      idealPrompt: "A sleek humanoid robot with glowing blue eyes standing in a minimalist white laboratory",
      difficulty: "hard",
      category: "technology",
    },
    {
      url: "/images/abstract-art.jpg",
      idealPrompt:
        "An abstract painting with swirls of vibrant colors including red, blue, and yellow creating a sense of movement and emotion",
      difficulty: "challenge",
      category: "art",
    },
    {
      url: "/images/food-plating.jpg",
      idealPrompt:
        "An elegantly plated gourmet dish with microgreens, colorful sauces, and artistic presentation on a black ceramic plate",
      difficulty: "challenge",
      category: "food",
    },
  ]

  for (const image of images) {
    const createdImage = await prisma.image.upsert({
      where: { id: image.url },
      update: {},
      create: {
        url: image.url,
        idealPrompt: image.idealPrompt,
        difficulty: image.difficulty,
        category: image.category,
      },
    })
    console.log(`Created image: ${createdImage.url}`)
  }

  console.log("Seed completed successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

