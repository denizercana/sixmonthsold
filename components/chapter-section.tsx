"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { type Chapter } from "@/lib/chapters"
import { DigitalClock } from "./digital-clock"
import Image from "next/image"

interface ChapterSectionProps {
  chapter: Chapter
  index: number
  isLast: boolean
}

export function ChapterSection({ chapter, index, isLast }: ChapterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  // --- LAST CHAPTER LAYOUT (The Finale) ---
  if (isLast) {
    return (
      <section
        ref={sectionRef}
        data-chapter={index}
        className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient}`} />
        <div className="absolute inset-0 opacity-20">
          <Image src={chapter.image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className={`relative z-10 max-w-2xl w-full transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-foreground/5 backdrop-blur-xl border border-foreground/10 rounded-3xl p-10 md:p-14">
            <div className="text-center mb-8">
            </div>
            <div className="mb-10">
              <DigitalClock />
            </div>
            <div className="text-center mb-6">
              <span className="text-7xl md:text-8xl font-serif font-medium text-foreground/10">
                {chapter.roman}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-10">
              {chapter.title}
            </h2>
            <p className="text-lg md:text-xl font-serif font-light text-foreground/70 leading-relaxed text-center text-pretty">
              {chapter.message}
            </p>
          </div>
        </div>
      </section>
    )
  }

  // --- REGULAR CHAPTERS LAYOUT (Oct - Mar) ---
  return (
    <section
      ref={sectionRef}
      data-chapter={index}
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient}`} />
      
      <div className={`relative z-10 max-w-3xl w-full transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        
        <div className="mb-6">
          <span className="text-xs font-sans uppercase tracking-[0.5em] text-foreground/40">
            {chapter.monthName} {chapter.year}
          </span>
        </div>

        <div className="mb-8">
          <span className="text-[12rem] md:text-[16rem] font-serif font-medium leading-none text-foreground/5">
            {chapter.roman}
          </span>
        </div>

        <div className="-mt-32 md:-mt-44 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-3">
            {chapter.title}
          </h2>
          {chapter.subtitle && (
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-foreground/40 mb-12">
              {chapter.subtitle}
            </p>
          )}
        </div>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-serif font-light text-foreground/70 leading-relaxed text-pretty">
            {chapter.message}
          </p>

          <div className={`mt-16 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0 rotate-2' : 'opacity-0 translate-y-12 rotate-0'}`}>
            <div className="relative bg-white p-3 pb-14 shadow-2xl mx-auto w-fit transform hover:rotate-0 hover:scale-105 transition-transform duration-500">
              <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden bg-gray-100">
                <Image src={chapter.image} alt={chapter.monthName} fill className="object-cover" />
              </div>
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <p className="font-serif italic text-sm text-neutral-600">
                  {chapter.monthName} Memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}