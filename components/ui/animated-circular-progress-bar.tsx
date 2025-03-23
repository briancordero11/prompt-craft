"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AnimatedCircularProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max: number
  min: number
  size?: number
  gaugePrimaryColor?: string
  gaugeSecondaryColor?: string
  showValue?: boolean
  valueFormatter?: (value: number) => string
  valueSize?: number
  valueClassName?: string
  strokeWidth?: number
  children?: React.ReactNode
}

export const AnimatedCircularProgressBar = React.forwardRef<HTMLDivElement, AnimatedCircularProgressBarProps>(
  (
    {
      value,
      max,
      min,
      size = 128,
      gaugePrimaryColor = "rgb(79 70 229)",
      gaugeSecondaryColor = "rgba(0, 0, 0, 0.1)",
      showValue = true,
      valueFormatter = (value: number) => `${value}%`,
      valueSize = 24,
      valueClassName,
      strokeWidth = 8,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const normalizedValue = Math.min(Math.max(value, min), max)
    const percentage = ((normalizedValue - min) / (max - min)) * 100
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        style={{
          width: size,
          height: size,
        }}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={gaugeSecondaryColor}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={gaugePrimaryColor}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        {showValue && (
          <div
            className={cn("absolute inset-0 flex items-center justify-center font-medium", valueClassName)}
            style={{ fontSize: valueSize }}
          >
            {valueFormatter(normalizedValue)}
          </div>
        )}
        {children}
      </div>
    )
  },
)

AnimatedCircularProgressBar.displayName = "AnimatedCircularProgressBar"

