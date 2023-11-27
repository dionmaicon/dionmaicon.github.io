import type { Post, WPPost } from "~/types/IPost";

export default class PostMapper {
    static toDomain(post: WPPost) {
        return {
            id: post.id,
            slug: post.slug,
            date: post.date,
            tags: [],
            title: post.title.rendered,
            content: post.content.rendered,
            excerpt: post.excerpt.rendered,
            yoast_meta: post.yoast_meta,
            yoast_title: post.yoast_title,
            featured_image: post.featured_image,
        } as Post;
    }
}

