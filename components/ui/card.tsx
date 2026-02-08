import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'cyber' | 'cyber-reverse' }
>(({ className, variant = 'default', ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-50 shadow transition-all duration-300",
            variant === 'cyber' && "cyber-clip glow-shadow-cyan border-cyan-500/30",
            variant === 'cyber-reverse' && "cyber-clip-reverse glow-shadow-purple border-purple-500/30",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export { Card }
