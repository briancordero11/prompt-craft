"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Banner } from "@/components/ui/banner"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Banner
        id="new-features"
        message="🎉 New features coming soon! Try our improved prompt scoring system."
        variant="rainbow"
        height="2rem"
        hideOnScroll
      />
      <header className="bg-gray-800/90 backdrop-blur-sm text-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-white">PromptCraft</span>
              </Link>
            </div>
            <nav className="hidden sm:flex items-center sm:space-x-8">
              <Link href="/play">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-indigo-100 hover:text-white hover:border-indigo-300">
                  Play
                </span>
              </Link>
              <Link href="/learn">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-indigo-100 hover:text-white hover:border-indigo-300">
                  Learn
                </span>
              </Link>
              <Link href="/leaderboard">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-indigo-100 hover:text-white hover:border-indigo-300">
                  Leaderboard
                </span>
              </Link>
              <Link href="/faq">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-indigo-100 hover:text-white hover:border-indigo-300">
                  FAQ
                </span>
              </Link>
              <Link href="/support">
                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-indigo-100 hover:text-white hover:border-indigo-300">
                  Support
                </span>
              </Link>
            </nav>
            <div className="hidden sm:flex sm:items-center space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-gray-700" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white" asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden bg-gray-800">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="/play">
                <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-indigo-100 hover:bg-gray-700 hover:border-indigo-300 hover:text-white">
                  Play
                </span>
              </Link>
              <Link href="/learn">
                <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-indigo-100 hover:bg-gray-700 hover:border-indigo-300 hover:text-white">
                  Learn
                </span>
              </Link>
              <Link href="/leaderboard">
                <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-indigo-100 hover:bg-gray-700 hover:border-indigo-300 hover:text-white">
                  Leaderboard
                </span>
              </Link>
              <Link href="/faq">
                <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-indigo-100 hover:bg-gray-700 hover:border-indigo-300 hover:text-white">
                  FAQ
                </span>
              </Link>
              <Link href="/support">
                <span className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-indigo-100 hover:bg-gray-700 hover:border-indigo-300 hover:text-white">
                  Support
                </span>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-4 space-x-3">
                <Button variant="outline" className="text-white border-white hover:bg-gray-700" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white" asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

