"use client"

import { useState, useEffect, useRef } from "react"
import { chapters } from "@/lib/chapters"
import { ChapterSection } from "@/components/chapter-section"
import { ProgressBar } from "@/components/progress-bar"
import { SecretHeart } from "@/components/secret-heart"
import { LoveLetterModal } from "@/components/love-letter-modal"

export default function StoryPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeChapter, setActiveChapter] = useState(0)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)

      // Determine active chapter based on scroll position
      const chapterElements = document.querySelectorAll('[data-chapter]')
      chapterElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveChapter(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative bg-background">
      {/* Progress Bar */}
      <ProgressBar progress={scrollProgress} activeChapter={activeChapter} />

      {/* Story Title / Intro */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-rose-950/20 animate-gradient" />
        
        {/* Floating blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        
        <div className="relative z-10 text-center max-w-2xl">
          <p className="text-xs font-sans uppercase tracking-[0.5em] text-foreground/40 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            A Digital Storybook
          </p>
          
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-foreground mb-6 animate-in fade-in zoom-in-95 duration-1000 delay-200">
            Our Story
          </h1>
          
          <p className="text-lg md:text-xl font-serif italic text-foreground/60 mb-12 animate-in fade-in duration-1000 delay-500">
            Six chapters. One hundred and eighty days. A lifetime of memories.
          </p>
          
          <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <span className="text-sm font-sans text-foreground/30">Scroll to begin</span>
            <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((chapter, index) => (
        <ChapterSection 
          key={chapter.id} 
          chapter={chapter} 
          index={index}
          isLast={index === chapters.length - 1}
        />
      ))}

      {/* Secret Heart Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <SecretHeart onClick={() => setIsLetterOpen(true)} />
      </div>

      {/* Love Letter Modal */}
      <LoveLetterModal 
        isOpen={isLetterOpen} 
        onClose={() => setIsLetterOpen(false)} 
      />
    </div>
  )
}
