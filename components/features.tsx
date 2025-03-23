"use client"

import { Brain, Trophy, BarChart, Zap, Image, Clock } from "lucide-react"

const features = [
  {
    name: "Skill Development",
    description: "Improve your prompt engineering skills through targeted practice and feedback.",
    icon: Brain,
  },
  {
    name: "Competitive Leaderboards",
    description: "Compete with others and see how your prompt skills rank globally.",
    icon: Trophy,
  },
  {
    name: "Detailed Analytics",
    description: "Track your progress over time with comprehensive performance metrics.",
    icon: BarChart,
  },
  {
    name: "Industry-Specific Challenges",
    description: "Practice with prompts tailored to different industries and use cases.",
    icon: Zap,
  },
  {
    name: "Diverse Image Library",
    description: "Thousands of images across various styles, subjects, and complexity levels.",
    icon: Image,
  },
  {
    name: "Time Challenge Mode",
    description: "Test your prompt writing speed under pressure with timed challenges.",
    icon: Clock,
  },
]

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Level up your prompt engineering
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            PromptCraft offers everything you need to master the art of writing effective prompts for AI image
            generation.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

