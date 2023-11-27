export type WPPost = {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    yoast_meta: {
        name: string;
        content: string;
        hid: string;
        property?: string;
    }[];
    yoast_title: string;
    featured_image: string;
}

export type Post = {
    id: number;
    slug: string;
    date: string;
    tags: string[];
    title: string;
    content: string;
    excerpt: string;
    yoast_meta: {
        name: string;
        content: string;
        hid: string;
        property?: string;
    }[];
    yoast_title: string;
    featured_image: string;
}