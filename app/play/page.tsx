import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, Clock, Award } from "lucide-react"

export default function PlayPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">How PromptCraft Works</h1>
          <p className="mt-4 text-xl text-gray-600">
            Improve your prompt engineering skills through our interactive game
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Game Mechanics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 text-indigo-500 mr-2" />
                  Core Gameplay
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  In PromptCraft, you'll be shown an image and asked to write a detailed description (prompt) that
                  captures all the key elements of the image.
                </p>
                <p className="text-gray-700">
                  Our AI system will analyze your prompt and compare it to an ideal description, scoring your accuracy
                  and providing detailed feedback on what you captured well and what you missed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-indigo-500 mr-2" />
                  Scoring System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Your score is calculated based on how well your prompt matches the ideal description. We analyze:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Key object identification</li>
                  <li>Attribute accuracy (colors, sizes, positions)</li>
                  <li>Contextual understanding</li>
                  <li>Descriptive quality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-500 mr-2" />
                  Game Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Select a difficulty level</li>
                  <li>View an image (5 images per session)</li>
                  <li>Write your prompt description</li>
                  <li>Submit and receive immediate feedback</li>
                  <li>Review your score and areas for improvement</li>
                  <li>Move to the next image</li>
                  <li>Complete the session to see your overall results</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 text-indigo-500 mr-2" />
                  Progression
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">As you play more games, you'll:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Build a history of your performance</li>
                  <li>Track improvement over time</li>
                  <li>Unlock achievements</li>
                  <li>Climb the global leaderboard</li>
                  <li>Gain access to more challenging image sets</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Difficulty</h2>
          <p className="text-gray-600 mb-8">
            Start with Easy mode if you're new, or challenge yourself with harder difficulties
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700" size="lg" asChild>
              <Link href="/play/easy">Easy</Link>
            </Button>
            <Button className="bg-yellow-600 hover:bg-yellow-700" size="lg" asChild>
              <Link href="/play/medium">Medium</Link>
            </Button>
            <Button className="bg-red-600 hover:bg-red-700" size="lg" asChild>
              <Link href="/play/hard">Hard</Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" size="lg" asChild>
              <Link href="/play/challenge">Challenge</Link>
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
          <p className="text-gray-700 mb-4">PromptCraft is built using modern web technologies:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Frontend:</strong> Next.js with React for a responsive, interactive UI
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS for clean, consistent design
            </li>
            <li>
              <strong>Authentication:</strong> NextAuth.js for secure user accounts
            </li>
            <li>
              <strong>Data Storage:</strong> Mock database for this demo, scalable to real databases
            </li>
            <li>
              <strong>AI Analysis:</strong> Natural Language Processing algorithms to compare user prompts with ideal
              descriptions
            </li>
            <li>
              <strong>Scoring Engine:</strong> Custom algorithm that evaluates semantic similarity, key term
              identification, and descriptive quality
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

