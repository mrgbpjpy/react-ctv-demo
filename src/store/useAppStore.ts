import { create } from "zustand";

import type { ContentRow, VideoItem } from "../types/types";
import { getHomeContent } from "../services/contentService";

type AppStore = {
  rows: ContentRow[];
  isLoading: boolean;
  focusedRowIndex: number;
  focusedItemIndex: number;
  selectedVideo: VideoItem | null;

  loadContent: () => Promise<void>;
  moveLeft: () => void;
  moveRight: () => void;
  moveUp: () => void;
  moveDown: () => void;
  selectFocusedVideo: () => void;
  closeVideo: () => void;
};

export const useAppStore = create<AppStore>((set, get) => ({
  rows: [],
  isLoading: true,
  focusedRowIndex: 0,
  focusedItemIndex: 0,
  selectedVideo: null,

  loadContent: async () => {
    set({ isLoading: true });

    const rows = await getHomeContent();

    set({
      rows,
      isLoading: false,
      focusedRowIndex: 0,
      focusedItemIndex: 0,
    });
  },

  moveLeft: () =>
    set((state) => ({
      focusedItemIndex: Math.max(0, state.focusedItemIndex - 1),
    })),

  moveRight: () =>
    set((state) => {
      const row = state.rows[state.focusedRowIndex];

      if (!row) {
        return state;
      }

      return {
        focusedItemIndex: Math.min(
          row.items.length - 1,
          state.focusedItemIndex + 1
        ),
      };
    }),

  moveUp: () =>
  set((state) => {
    const nextRowIndex = Math.max(0, state.focusedRowIndex - 1);

    return {
      focusedRowIndex: nextRowIndex,
      focusedItemIndex: 0,
    };
  }),

  moveDown: () =>
  set((state) => {
    const nextRowIndex = Math.min(
      state.rows.length - 1,
      state.focusedRowIndex + 1
    );

    return {
      focusedRowIndex: nextRowIndex,
      focusedItemIndex: 0,
    };
  }),

  selectFocusedVideo: () => {
    const { rows, focusedRowIndex, focusedItemIndex } = get();
    const selected = rows[focusedRowIndex]?.items[focusedItemIndex];

    if (!selected) return;

    set({ selectedVideo: selected });
  },

  closeVideo: () => set({ selectedVideo: null }),
}));