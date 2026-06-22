import type { VideoItem } from "../types/types";

type HeroProps = {
  video: VideoItem;
};

export function Hero({ video }: HeroProps) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">FOX LOCAL</p>
        <h1>{video.title}</h1>
        <p>{video.description}</p>
        <p className="hint">
  Navigate with ← → ↑ ↓ • Press Enter to Play • Esc to Exit
</p>
      </div>
    </section>
  );
}