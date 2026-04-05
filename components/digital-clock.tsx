"use client"

import { useState, useEffect } from "react"

export function DigitalClock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="text-7xl md:text-9xl font-serif font-light tracking-wider text-foreground/90">
          --:--
        </div>
        <div className="text-lg md:text-xl font-sans uppercase tracking-[0.3em] text-foreground/60">
          Loading...
        </div>
      </div>
    )
  }

  const hours = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  
  const dayName = time.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
  const month = time.toLocaleDateString("en-US", { month: "long" })
  const day = time.getDate()

  return (
    <div className="flex flex-col items-center gap-4 animate-in fade-in duration-1000">
      <div className="text-7xl md:text-9xl font-serif font-light tracking-wider text-foreground/90 tabular-nums">
        {hours}:{minutes}
      </div>
      <div className="text-lg md:text-xl font-sans uppercase tracking-[0.3em] text-foreground/60">
        {dayName}, {month} {day}
      </div>
    </div>
  )
}
