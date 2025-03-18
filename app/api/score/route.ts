import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()
  const { userPrompt, idealPrompt } = data

  if (!userPrompt || !idealPrompt) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // This is a simplified scoring algorithm
  // In a real app, you'd want to use NLP techniques to compare semantic similarity
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
  const score = Math.round(f1 * 100)

  // Generate feedback based on score
  let feedback = ""
  let missingElements = []

  // Find missing elements (simplified)
  const idealWordsArray = idealPrompt.toLowerCase().split(/\s+/)
  missingElements = idealWordsArray.filter((word) => word.length > 3 && !userWords.has(word)).slice(0, 3)

  if (score >= 90) {
    feedback = "Excellent! Your description captures all the key elements perfectly."
  } else if (score >= 70) {
    feedback = `Good job! You identified most key elements. The ideal prompt also included: "${missingElements.join(", ")}".`
  } else if (score >= 50) {
    feedback = `Nice start! You captured some elements, but missed: "${missingElements.join(", ")}". Try to be more detailed in your descriptions.`
  } else {
    feedback = `Keep practicing! Your description missed key elements like: "${missingElements.join(", ")}". Remember to describe all visible objects, colors, and atmosphere.`
  }

  return NextResponse.json({
    score,
    feedback,
    idealPrompt,
  })
}

