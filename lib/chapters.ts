export interface Chapter {
  id: number
  month: number
  year: number
  roman: string
  title: string
  subtitle: string
  message: string
  quote: string
  monthName: string
  dayCount: number
  image: string
  gradient: string 
  icon: string 
}

// Fixed 7-Chapter Timeline (October - April)
export const chapters: Chapter[] = [
  {
    id: 1,
    month: 10,
    year: 2025,
    roman: "I",
    title: "The Beginning",
    subtitle: "",
    monthName: "October",
    dayCount: 30,
    message: "Our first date on September 27th was the best I’ve ever had. I still remember the way our eyes would shine because we were laughing together constantly. Between all the mutual things we shared and the way we just clicked, it was clear that 'getting along' was an understatement. All the low-chance coincidences that brought us together finally made sense because it wasn't just luck. It was the moment I realized I had finally found what I was looking for.",
    quote: "And suddenly, all the love songs made sense.",
    image: "/images/chapter-1.jpg",
    gradient: "from-amber-900/40 via-orange-800/30 to-rose-900/40",
    icon: "leaf",
  },
  {
    id: 2,
    month: 11,
    year: 2025,
    roman: "II",
    title: "Falling Fast",
    subtitle: "",
    monthName: "November",
    dayCount: 60,
    message: "By November, the distance between us only proved how much we had already built. We were both struggling in our own ways, but those long study days and our nature walks became the anchor that kept us close. It was about the way we showed up for each other when things were actually hard.",
    quote: "You are my favorite kind of mystery.",
    image: "/images/chapter-2.jpg",
    gradient: "from-orange-900/40 via-red-800/30 to-brown-900/40",
    icon: "sparkles",
  },
  {
    id: 3,
    month: 12,
    year: 2025,
    roman: "III",
    title: "Winter is Coming",
    subtitle: "",
    monthName: "December",
    dayCount: 91,
    message: "The road led us to the Smokies in December, where the world finally felt still. Between the walls of that cabin and the slow rhythm of a dance by the campfire, the distance we had carried simply vanished. It was there, under the shadow of the peaks, that I realized it was never about the destination or the landscape. It was you, standing in front of me. In that moment, the mountains were just a backdrop to the realization that I was finally home.",
    quote: "You are my sun on the coldest days.",
    image: "/images/chapter-3.jpg",
    gradient: "from-sky-900/40 via-blue-800/30 to-indigo-900/40",
    icon: "snowflake",
  },
  {
    id: 4,
    month: 1,
    year: 2026,
    roman: "IV",
    title: "New Year",
    subtitle: "",
    monthName: "January",
    dayCount: 122,
    message: "Starting 2026 with you by my side brought a quiet glow to the winter. It was a month of new beginnings, not just for the year, but for a new age. As we brought our friends into our shared world and the circles around us grew, our own center stayed just as calm. In the middle of it all, I found a way to show you that we could make it if we try, just the two of us.",    quote: "Home is wherever I'm with you.",
    image: "/images/chapter-4.jpg",
    gradient: "from-rose-900/40 via-pink-800/30 to-red-900/40",
    icon: "heart",
  },
  {
    id: 5,
    month: 2,
    year: 2026,
    roman: "V",
    title: "A Way Back to You",
    subtitle: "",
    monthName: "February",
    dayCount: 151,
    message: "February brought the return of the distance, turning our days into a series of glowing screens and late-night conversations. While you navigated a season that felt heavy and gray, I tried to build a bridge back to you, piece by piece, through a puzzle meant to make you smile. Even with miles between us, we found a way to be present in the quiet moments, proving that we didn't need to be in the same room to hold each other up.",
    quote: "Every ending with you is just a new beginning.",
    image: "/images/chapter-5.jpg",
    gradient: "from-violet-900/40 via-purple-800/30 to-fuchsia-900/40",
    icon: "sparkles",
  },
  {
    id: 6,
    month: 3,
    year: 2026,
    roman: "VI",
    title: "Finally March",
    subtitle: "",
    monthName: "March",
    dayCount: 181,
    message: "March brought the end of the long road, finally closing the distance that had felt so wide just a month before. Falling back into the ease of being together was a relief that words could barely reach, an exhale that made the world feel small and safe again in your arms. It was a month of widening circles, where I began to see your reflection in the eyes of those who raised you and found my own place within the stories that shaped you. In the quiet of being home again, the world finally felt whole.",
    quote: "Here's to us. Here's to forever.",
    image: "/images/chapter-6.jpg",
    gradient: "from-pink-900/40 via-rose-800/30 to-amber-900/40",
    icon: "infinity",
  },
  {
    id: 7,
    month: 4,
    year: 2026,
    roman: "VII",
    title: "Today",
    subtitle: "",
    monthName: "April",
    dayCount: 190,
    message: "It is now April, and our story is still being written. I'm so excited for every month and every year we haven't seen yet. Open the letter.",
    quote: "The best is yet to come.",
    image: "/images/chapter-7.jpg",
    gradient: "from-emerald-900/40 via-teal-800/30 to-cyan-900/40",
    icon: "calendar",
  }
];

export function getCurrentChapter(): Chapter {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  const chapter = chapters.find(ch => ch.month === currentMonth && ch.year === currentYear);
  return chapter || chapters[chapters.length - 1];
}

export function getChapterIndex(): number {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  const index = chapters.findIndex(ch => ch.month === currentMonth && ch.year === currentYear);
  return index >= 0 ? index : chapters.length - 1;
}