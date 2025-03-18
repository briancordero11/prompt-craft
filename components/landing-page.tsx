"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { GameModes } from "@/components/game-modes"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <Features />
      <GameModes />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

