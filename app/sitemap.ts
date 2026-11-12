import type { MetadataRoute } from "next";

const routes = [
  ["", "daily", 1],
  ["/train", "weekly", 0.95],
  ["/play", "weekly", 0.85],
  ["/openings", "weekly", 0.85],
  ["/grindbook", "monthly", 0.8],
  ["/repertoire", "monthly", 0.75],
  ["/insights", "monthly", 0.7],
  ["/founder", "monthly", 0.6],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(([path, changeFrequency, priority]) => ({
    url: `https://chessgrind.fyi${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
