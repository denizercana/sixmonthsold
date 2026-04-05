import { Leaf, Snowflake, Sparkles, Heart, Flower2, Infinity } from "lucide-react"

interface ChapterIconProps {
  icon: string
  className?: string
}

export function ChapterIcon({ icon, className }: ChapterIconProps) {
  const icons: Record<string, React.ReactNode> = {
    leaf: <Leaf className={className} />,
    snowflake: <Snowflake className={className} />,
    sparkles: <Sparkles className={className} />,
    heart: <Heart className={className} />,
    flower: <Flower2 className={className} />,
    infinity: <Infinity className={className} />,
  }

  return icons[icon] || <Heart className={className} />
}
