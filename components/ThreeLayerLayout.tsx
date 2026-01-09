"use client"

import { ReactNode } from "react"

interface ThreeLayerLayoutProps {
    children: ReactNode
}

export function ThreeLayerLayout({ children }: ThreeLayerLayoutProps) {
    return (
        <div className="relative min-h-screen">
            {/* Layer 1: Background with Grid - handled by AnimatedBackground component */}

            {/* Layer 2: Translucent White Overlay */}
            <div className="fixed inset-0 bg-white/5 pointer-events-none z-0" />

            {/* Layer 3: Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
