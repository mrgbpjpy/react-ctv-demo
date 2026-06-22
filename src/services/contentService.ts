import { contentRows } from "../data/content";
import type { ContentRow } from "../types/types";

export async function getHomeContent(): Promise<ContentRow[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(contentRows);
    }, 500);
  });
}