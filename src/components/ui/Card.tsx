"use client"

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'bordered'
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const baseStyles = "rounded-xl transition-all duration-300"
    
    const variants = {
      default: "bg-white dark:bg-slate-900 shadow-sm",
      glass: "bg-white/10 dark:bg-slate-900/10 backdrop-blur-lg border border-white/20 dark:border-slate-700/20",
      elevated: "bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl",
      bordered: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
    }

    const hoverEffects = hover ? "hover:shadow-xl hover:-translate-y-1" : ""

    return (
      <div
        className={cn(baseStyles, variants[variant], hoverEffects, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-4", className)} {...props} />
  )
)

CardHeader.displayName = "CardHeader"

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)

CardContent.displayName = "CardContent"

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-4", className)} {...props} />
  )
)

CardFooter.displayName = "CardFooter" 