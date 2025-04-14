"use client"

import { useEffect } from "react"

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax-layer")
      const scrollPosition = window.scrollY

      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat((element as HTMLElement).dataset.speed || "0.5")
        const yPos = scrollPosition * speed
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}
