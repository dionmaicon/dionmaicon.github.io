import type { Post } from "~/types/IPost";

export default class PostMetaHead {
  static prepareHead(post: Post) {
    if (import.meta.client) {
      const meta = [
        {
          hid: "og:url",
          name: "og:url",
          content: window.location.href,
        },
        {
          hid: "robots",
          name: "robots",
          content:
            "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
      ];
      return meta;
    }
  }
}
