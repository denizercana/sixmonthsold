"use client"

import { useEffect, useState, RefObject } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
}

export function useInView(
  ref: RefObject<Element | null>,
  options: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false)
  const { threshold = 0.1, rootMargin = "0px" } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, threshold, rootMargin])

  return isInView
}
