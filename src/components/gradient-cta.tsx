"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import type { ReactNode } from "react"

interface GradientCTAProps {
  children: ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export function GradientCTA({
  children,
  className = "",
  colors = ["#001c80", "#1ac7ff", "#04ffb1", "#ff1ff1"],
  speed = 0.25,
}: GradientCTAProps) {
  return (
    <div className={`relative overflow-hidden  rounded-2xl ${className}`}>
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <MeshGradient
          colors={colors}
          speed={speed}
          distortion={1}
        
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">{children}</div>
    </div>
  )
}
