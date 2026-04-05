"use client"

import { Mail } from "lucide-react"

interface SecretHeartProps {
  onClick: () => void
}

export function SecretHeart({ onClick }: SecretHeartProps) {
  return (
    <button
      onClick={onClick}
      className="group p-3 rounded-full text-foreground/30 hover:text-foreground/70 hover:bg-white/5 transition-all duration-500 animate-in fade-in duration-1000 delay-700"
      aria-label="Read my letter to you"
    >
      <Mail 
        className="w-5 h-5 transition-all duration-500 group-hover:scale-110" 
      />
    </button>
  )
}
