import type { Post, WPPost } from "~/types/IPost";

export default class PostMapper {
  static toDomain(post: WPPost) {
    return {
      id: post.id,
      slug: post.slug,
      date: post.date,
      tags: [],
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      seo: post.seo,
      featuredImage: post.featuredImage?.node?.sourceUrl,
    } as Post;
  }
}
