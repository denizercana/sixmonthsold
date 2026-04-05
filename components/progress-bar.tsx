"use client"

import { chapters } from "@/lib/chapters"

interface ProgressBarProps {
  progress: number
  activeChapter: number
}

export function ProgressBar({ progress, activeChapter }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Background bar */}
      <div className="h-1 bg-foreground/5">
        {/* Progress fill */}
        <div 
          className="h-full bg-gradient-to-r from-amber-500/70 via-rose-500/70 to-pink-500/70 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Chapter markers */}
      <div className="absolute top-4 right-6 flex items-center gap-3">
        <span className="text-xs font-sans uppercase tracking-widest text-foreground/40">
          Chapter
        </span>
        <span className="text-lg font-serif text-foreground/80">
          {chapters[activeChapter]?.roman || 'I'}
        </span>
      </div>
    </div>
  )
}
