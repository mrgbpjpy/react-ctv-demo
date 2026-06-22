export type ContentCategory = "Live" | "Local News" | "Weather" | "Sports";

export type VideoItem = {
    id: string;
    title: string;
    category: ContentCategory;
    description: string;
    duration: string;
    imageUrl: string;
    isLive?: boolean;
    videoUrl?: string;
};

export type ContentRow = {
  id: string;
  title: string;
  items: VideoItem[];
};