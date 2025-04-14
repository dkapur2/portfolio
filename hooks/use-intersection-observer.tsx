"use client"

import { useCallback, useEffect, useRef, useState } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px" }: UseIntersectionObserverProps = {}) {
  const [entries, setEntries] = useState<Map<Element, boolean>>(new Map())
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Initialize the observer only once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          setEntries((prev) => {
            const newMap = new Map(prev)
            newMap.set(entry.target, entry.isIntersecting)
            return newMap
          })
        })
      },
      { threshold, rootMargin },
    )

    observerRef.current = observer

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin])

  // Memoize these functions to prevent recreation on each render
  const observe = useCallback((element: Element | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element)
      setEntries((prev) => {
        const newMap = new Map(prev)
        newMap.set(element, false)
        return newMap
      })
    }
  }, [])

  const unobserve = useCallback((element: Element | null) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element)
      setEntries((prev) => {
        const newMap = new Map(prev)
        newMap.delete(element)
        return newMap
      })
    }
  }, [])

  const isVisible = useCallback(
    (element: Element | null) => {
      if (!element) return false
      return entries.get(element) || false
    },
    [entries],
  )

  return { observe, unobserve, isVisible }
}
