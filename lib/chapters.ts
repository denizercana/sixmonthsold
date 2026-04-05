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
    message: "The first full month of us. October was when I realized that meeting you in September wasn't just luck—it was the start of something incredible.",
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
    message: "November brought the chill, but you brought the warmth. I knew I wanted you by my side for every season to come.",
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
    title: "First Winter",
    subtitle: "",
    monthName: "December",
    dayCount: 91,
    message: "Our first December together. Between the lights and the holiday magic, the best part was simply having you to hold onto.",
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
    title: "New Beginnings",
    subtitle: "",
    monthName: "January",
    dayCount: 122,
    message: "Starting 2026 with you by my side. January taught me that my love for you grows stronger with every passing day.",
    quote: "Home is wherever I'm with you.",
    image: "/images/chapter-4.jpg",
    gradient: "from-rose-900/40 via-pink-800/30 to-red-900/40",
    icon: "heart",
  },
  {
    id: 5,
    month: 2,
    year: 2026,
    roman: "V",
    title: "Love Month",
    subtitle: "",
    monthName: "February",
    dayCount: 151,
    message: "Five months in and every day still feels like a dream. You make every ordinary Tuesday feel like a celebration of love.",
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
    title: "March Madness",
    subtitle: "",
    monthName: "March",
    dayCount: 181,
    message: "Six months of laughter, growth, and building a life together. March 27th was our half-year mark, and it's been the best adventure yet.",
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
    message: "It is now April, and our story is still being written. I'm so excited for every month and every year we haven't seen yet.",
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