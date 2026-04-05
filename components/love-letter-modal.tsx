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
          <p className="text-foreground/60 italic">My Dearest,</p>
          
          <p>
            Six months ago, I couldn&apos;t have imagined how completely you would change my world. 
            Every moment with you feels like a gift I never knew I was waiting for.
          </p>

          <p>
            You have this incredible way of making ordinary days feel extraordinary. 
            Your laugh is my favorite sound, your smile my favorite sight. 
            The way you look at me makes me feel seen in a way I&apos;ve never experienced before.
          </p>

          <p>
            I love how you remember the little things — the way I take my coffee, 
            the songs that make me nostalgic, the dreams I&apos;ve shared only with you. 
            You pay attention to the details that others overlook, 
            and that attention is a form of love I treasure deeply.
          </p>

          <p>
            Thank you for being patient with me, for growing with me, 
            for choosing me every single day. Thank you for the late-night conversations, 
            the comfortable silences, the adventures big and small.
          </p>

          <p>
            These six months have been the beginning of something beautiful. 
            I can&apos;t wait to see where our story takes us next — 
            through every season, every challenge, every celebration.
          </p>

          <p>
            You are my person. My favorite hello and my hardest goodbye. 
            My calm in the chaos. My home.
          </p>

          <p className="text-right italic text-foreground/60 pt-4">
            Forever yours,<br />
            <span className="text-foreground/80">With all my love</span>
          </p>
        </div>
      </div>
    </div>
  )
}
