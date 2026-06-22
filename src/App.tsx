import { useEffect } from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { ContentRow } from "./components/ContentRow";
import { useAppStore } from "./store/useAppStore";

function App() {
  const {
    rows,
    isLoading,
    focusedRowIndex,
    focusedItemIndex,
    selectedVideo,
    loadContent,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    selectFocusedVideo,
    closeVideo,
  } = useAppStore();

  const focusedVideo = rows[focusedRowIndex]?.items[focusedItemIndex];

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  useEffect(() => {
    function handleRemoteKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") moveLeft();
      if (event.key === "ArrowRight") moveRight();
      if (event.key === "ArrowUp") {
  moveUp();

  window.scrollBy({
    top: -500,
    behavior: "smooth",
  });
}

if (event.key === "ArrowDown") {
  moveDown();

  window.scrollBy({
    top: 500,
    behavior: "smooth",
  });
}
      if (event.key === "Enter") selectFocusedVideo();

      if (
        event.key === "Escape" ||
        event.key === "Backspace" ||
        event.key === "BrowserBack"
      ) {
        closeVideo();
      }
    }

    window.addEventListener("keydown", handleRemoteKey);

    return () => {
      window.removeEventListener("keydown", handleRemoteKey);
    };
  }, [
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    selectFocusedVideo,
    closeVideo,
  ]);

  if (isLoading || !focusedVideo) {
    return (
      <main className="loading-screen">
        <div>
          <h1>LocalTV</h1>
          <p>Loading live and local content...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <NavBar />
      <Hero video={focusedVideo} />

      {rows.map((row, rowIndex) => (
        <ContentRow
          key={row.id}
          title={row.title}
          videos={row.items}
          rowIndex={rowIndex}
          focusedRowIndex={focusedRowIndex}
          focusedItemIndex={focusedItemIndex}
        />
      ))}

      {selectedVideo && (
        <div className="player-overlay">
          <div className="player-card">
            <video
              className="video-player"
              src={selectedVideo.videoUrl}
              controls
              autoPlay
            />

            <div className="player-info">
              <p className="eyebrow">Now Playing</p>
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.description}</p>
              <p className="hint">Press Escape to close</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;