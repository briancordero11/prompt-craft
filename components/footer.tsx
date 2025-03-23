"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PromptCraft</h3>
            <p className="text-gray-400">
              Master the art of prompt engineering through gamified practice and challenges.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Play</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/play/easy" className="text-gray-400 hover:text-white">
                  Beginner Mode
                </Link>
              </li>
              <li>
                <Link href="/play/medium" className="text-gray-400 hover:text-white">
                  Intermediate Mode
                </Link>
              </li>
              <li>
                <Link href="/play/hard" className="text-gray-400 hover:text-white">
                  Expert Mode
                </Link>
              </li>
              <li>
                <Link href="/play/challenge" className="text-gray-400 hover:text-white">
                  Time Challenge
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="text-gray-400 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-400 hover:text-white">
                  Game History
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-gray-400 hover:text-white">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-400 hover:text-white">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/become-sponsor" className="text-gray-400 hover:text-white">
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PromptCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

