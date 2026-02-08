'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-full bg-black/50">
            <div className="text-cyan-400 animate-pulse">Loading 3D Scene...</div>
        </div>
    ),
})

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const splineRef = useRef<any>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current || !splineRef.current) return

            const rect = containerRef.current.getBoundingClientRect()

            // Calculate normalized mouse position (-1 to 1)
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
            const y = -((e.clientY - rect.top) / rect.height) * 2 + 1

            // Emit the event to Spline. Some scenes might use custom events
            // but 'mouseMove' is a standard way to pass coordinates.
            if (splineRef.current.emitEvent) {
                splineRef.current.emitEvent('mouseMove', { x, y })
            }

            // Also some scenes use fixed object names or positions.
            // We can try to set variables if the scene is configured that way
            if (splineRef.current.setVariable) {
                splineRef.current.setVariable('mouse_x', x)
                splineRef.current.setVariable('mouse_y', y)
            }
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('mousemove', handleMouseMove)
            return () => container.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const onLoad = (spline: any) => {
        splineRef.current = spline
    }

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <Suspense fallback={<div className="h-full bg-black/50 animate-pulse" />}>
                <Spline scene={scene} onLoad={onLoad} />
            </Suspense>
        </div>
    )
}
