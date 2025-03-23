"use client"

import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { GameModes } from "@/components/game-modes"
import { HowItWorks } from "@/components/how-it-works"
import { SponsorsMarquee } from "@/components/sponsors-marquee"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <SponsorsMarquee />
      <GameModes />
      <HowItWorks />
      <Features />
    </div>
  )
}

