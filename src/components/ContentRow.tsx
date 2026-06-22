import { useEffect, useRef } from "react";
import { VideoCard } from "./VideoCard";
import type { VideoItem } from "../types/types";

type ContentRowProps = {
  title: string;
  videos: VideoItem[];
  rowIndex: number;
  focusedRowIndex: number;
  focusedItemIndex: number;
};

export function ContentRow({
  title,
  videos,
  rowIndex,
  focusedRowIndex,
  focusedItemIndex,
}: ContentRowProps) {
  const rowRef = useRef<HTMLElement | null>(null);
  const isFocusedRow = focusedRowIndex === rowIndex;

  useEffect(() => {
    if (!isFocusedRow || !rowRef.current) return;

    const row = rowRef.current;
    const rect = row.getBoundingClientRect();

    const targetY =
  window.scrollY + rect.top - 500;

   window.scrollTo({
  top: Math.max(0, targetY),
  behavior: "smooth",
});
  }, [isFocusedRow]);

  return (
    <section ref={rowRef} className="content-row">
      <h2>{title}</h2>

      <div className="card-row">
        {videos.map((video, itemIndex) => (
          <VideoCard
            key={video.id}
            video={video}
            isFocused={
              focusedRowIndex === rowIndex && focusedItemIndex === itemIndex
            }
          />
        ))}
      </div>
    </section>
  );
}