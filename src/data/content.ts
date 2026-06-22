import type { ContentRow } from "../types/types";

export const contentRows: ContentRow[] = [
  {
    id: "live",
    title: "Live",
    items: [
      {
        id: "live-1",
        title: "LocalTV Live",
        category: "Live",
        description: "Watch live local coverage and breaking news.",
        duration: "LIVE",
        imageUrl: "/images/LocalTV-Live.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/6402b77c-b61f-4a06-96ca-c8420a2becf4-1080.mp4",
        isLive: true,
      },
      {
        id: "live-2",
        title: "Breaking Coverage",
        category: "Live",
        description: "Developing stories from your local area.",
        duration: "LIVE",
        imageUrl: "/images/Breaking-Coverage.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/cccc3e60-0291-4ecc-aa56-39b2e2c7d0d5-720.mp4",
        isLive: true,
      },
    ],
  },
  {
    id: "news",
    title: "Local News",
    items: [
      {
        id: "news-1",
        title: "Top Local Stories",
        category: "Local News",
        description: "Latest headlines from your area.",
        duration: "12 min",
        imageUrl: "/images/Top-Local-Stories.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/0eb052d0-fd51-43e6-aa33-ecdbf77a5d40-818.mp4",
      },
      {
        id: "news-2",
        title: "Community Update",
        category: "Local News",
        description: "Stories impacting families, schools, and neighborhoods.",
        duration: "9 min",
        imageUrl: "/images/Community-Update.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/264ff760-803e-430e-8d81-15648e904183-804.mp4",
      },
    ],
  },
  {
    id: "weather",
    title: "Weather",
    items: [
      {
        id: "weather-1",
        title: "Local Weather Update",
        category: "Weather",
        description: "Get the latest weather updates for your area.",
        duration: "5 min",
        imageUrl: "/images/Local-Weather-Update.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/fb70d459-48d2-4db5-adba-813c84f9200a-1080.mp4",
      },
      {
        id: "weather-2",
        title: "Storm Tracker",
        category: "Weather",
        description: "Radar updates and severe weather coverage.",
        duration: "7 min",
        imageUrl: "/images/Storm-Tracker.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/ff8fe61b-026f-4f07-b66b-2a790d6f6ab1-804.mp4",
      },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    items: [
      {
        id: "sports-1",
        title: "Local Sports Highlights",
        category: "Sports",
        description: "Catch up on the latest local sports news and highlights.",
        duration: "10 min",
        imageUrl: "/images/Local-Sports-Highlights.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/2f80a29a-11e8-47bd-b3ab-d438f53b8bcf-720.mp4",
      },
      {
        id: "sports-2",
        title: "Friday Night Recap",
        category: "Sports",
        description: "High school and regional sports recap.",
        duration: "14 min",
        imageUrl: "/images/Friday-Night-Recap.png",
        videoUrl:
          "https://video.blender.org/download/web-videos/bd0084a5-1d26-4816-ab5e-1bad9e2fb990-1080.mp4",
      },
    ],
  },
];