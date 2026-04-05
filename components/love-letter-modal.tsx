"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface LoveLetterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoveLetterModal({ isOpen, onClose }: LoveLetterModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500"
      onClick={onClose}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
      
      {/* Modal content */}
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl p-8 md:p-12 animate-in zoom-in-95 slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-white/10 transition-all duration-300"
          aria-label="Close letter"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Letter header */}
        <div className="text-center mb-8">
          <span className="text-sm font-sans uppercase tracking-[0.4em] text-foreground/40">
            A Letter For You
          </span>
        </div>

        {/* Letter content */}
        <div className="space-y-6 font-serif text-lg md:text-xl leading-relaxed text-foreground/85">
          <p className="text-foreground/60 italic">Dear Tyler,</p>
          
          <p>
            Six months ago, I couldn&apos;t have imagined how completely you would change my world. 
          </p>

          <p>
            You always find a way to make ordinary days feel extraordinary. 
            Your laugh is my favorite sound, your scent is my favorite place to hide. 
            The way you look at me makes me feel seen, heard, and loved. 
          </p>

          <p>
            Thank you for being patient with me, for growing with me, thank you for holding my hands and always being the first person to believe in me when I forget how to believe in myself. 
            Thank you for tearing up with me during those hard late-night conversations. 
            Thank you for being kind and gentle, and for always making time for me.
          </p>

          <p>
            These six months have been the beginning of something beautiful. 
            I can&apos;t wait to see where our story takes us next — through every season, 
            every challenge, and every celebration.
          </p>

          <p className="font-medium">
            You are my person. My favorite hello and my hardest goodbye. 
            My calm in the chaos. I love you.
          </p>

          <div className="text-right pt-8">
            <p className="text-foreground/50 text-sm uppercase tracking-widest pb-1">Best,</p>
            <p className="text-foreground/90 font-medium text-3xl italic">Deniz</p>
          </div>
        </div>
      </div>
    </div>
  )
}