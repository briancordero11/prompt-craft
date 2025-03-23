"use client"

import { useEffect, useState } from "react"

interface TimerProps {
  seconds: number
  onTimeUp: () => void
  isActive: boolean
}

export function Timer({ seconds, onTimeUp, isActive }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    if (!isActive) return

    if (timeLeft <= 0) {
      onTimeUp()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, isActive, onTimeUp])

  // Reset timer when seconds prop changes
  useEffect(() => {
    setTimeLeft(seconds)
  }, [seconds])

  const minutes = Math.floor(timeLeft / 60)
  const remainingSeconds = timeLeft % 60

  return (
    <div className={`font-mono text-xl ${timeLeft < 10 ? "text-red-600 animate-pulse" : ""}`}>
      {minutes.toString().padStart(2, "0")}:{remainingSeconds.toString().padStart(2, "0")}
    </div>
  )
}

