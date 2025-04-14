"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { observe, unobserve, isVisible } = useIntersectionObserver()

  useEffect(() => {
    const currentRef = ref.current
    if (currentRef) {
      observe(currentRef)
    }

    return () => {
      if (currentRef) {
        unobserve(currentRef)
      }
    }
  }, [observe, unobserve]) // These dependencies are now stable

  return (
    <div
      ref={ref}
      className={`section-fade-in ${isVisible(ref.current) ? "visible" : ""} ${
        centered ? "text-center" : ""
      } mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
