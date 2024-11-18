import type { CollectionEntry } from "astro:content";
import mapFilter from "./mapFilter";

const getSortedPosts = (posts: CollectionEntry<"map">[]) => {
  return posts
    .filter(mapFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedPosts;
