"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface AvatarCirclesProps {
  numPeople: number
  avatarUrls: {
    imageUrl: string
    profileUrl: string
  }[]
  className?: string
  size?: "sm" | "md" | "lg"
}

export function AvatarCircles({ numPeople, avatarUrls, className, size = "md" }: AvatarCirclesProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  }

  const avatarSize = sizeClasses[size]
  const remainingCount = numPeople - avatarUrls.length

  return (
    <div className={cn("flex -space-x-2 overflow-hidden", className)}>
      {avatarUrls.map((avatar, index) => (
        <Link
          key={index}
          href={avatar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("relative inline-block rounded-full ring-2 ring-white", avatarSize)}
        >
          <img
            className="rounded-full object-cover"
            src={avatar.imageUrl || "/placeholder.svg"}
            alt={`Avatar ${index + 1}`}
          />
        </Link>
      ))}
      {remainingCount > 0 && (
        <div
          className={cn(
            "relative inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-600 ring-2 ring-white",
            avatarSize,
          )}
        >
          <span className="font-medium">+{remainingCount}</span>
        </div>
      )}
    </div>
  )
}

