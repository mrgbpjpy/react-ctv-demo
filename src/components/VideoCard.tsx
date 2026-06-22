import { useEffect, useRef } from "react";
import type { VideoItem } from "../types/types";

type VideoCardProps = {
  video: VideoItem;
  isFocused: boolean;
};

export function VideoCard({ video, isFocused }: VideoCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const canAutoScroll = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      canAutoScroll.current = true;
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isFocused || !cardRef.current) return;
    if (!canAutoScroll.current) return;

    requestAnimationFrame(() => {
      cardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
  }, [isFocused]);

  return (
    <article
      ref={cardRef}
      className={`video-card ${isFocused ? "focused" : ""}`}
    >
      <img src={video.imageUrl} alt={video.title} />

      <div className="video-card-content">
        <span className={video.isLive ? "badge live" : "badge"}>
          {video.duration}
        </span>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </article>
  );
}