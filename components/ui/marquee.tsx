"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  direction?: "left" | "right"
  reverse?: boolean
  fade?: boolean
  className?: string
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ pauseOnHover, direction = "left", reverse, fade, className, children, ...props }, ref) => {
    const reverseDirection = reverse ? (direction === "left" ? "right" : "left") : direction

    return (
      <div
        ref={ref}
        className={cn("group relative flex gap-4 overflow-hidden [--duration:40s] [--gap:1rem]", className)}
        {...props}
      >
        <div
          className={cn(
            "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-[--gap]",
            reverseDirection === "right" && "animate-marquee-reverse",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className={cn(
            "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-[--gap]",
            reverseDirection === "right" && "animate-marquee-reverse",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
        {fade && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-gray-100"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-gray-100"></div>
          </>
        )}
      </div>
    )
  },
)

Marquee.displayName = "Marquee"

