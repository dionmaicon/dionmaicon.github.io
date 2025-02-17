export type PostTypeSEO = {
  canonical: string;
  title: string;
  metaDesc: string;
  focuskw: string;
  metaRobotsNoindex: string;
  metaRobotsNofollow: string;
  opengraphAuthor: string;
  opengraphDescription: string;
  opengraphTitle: string;
  opengraphImage: {
    altText: string;
    sourceUrl: string;
    srcSet: string;
  };
  opengraphUrl: string;
  opengraphSiteName: string;
  opengraphPublishedTime: string;
  opengraphModifiedTime: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: {
    altText: string;
    sourceUrl: string;
    srcSet: string;
  };
  breadcrumbs: {
    url: string;
    text: string;
  };
  cornerstone: string;
  schema: {
    pageType: string;
    articleType: string;
    raw: string;
  };
  readingTime: string;
  fullHead: string;
};

export type GQPostsResponse = {
  dmposts: {
    nodes: {
      title: string;
      content: string;
      slug: string;
      id: number;
      excerpt: string;
    }[];
  };
};

export type GQSinglePostResponse = {
  dmpost: {
    title: string;
    id: string;
    content: string;
  };
};

export type WPPost = {
  id: number;
  date: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  seo: PostTypeSEO;
  featuredImage: {
    node: {
      id: string;
      sourceUrl: string;
    };
  };
};

export type Post = {
  id: number;
  slug: string;
  date: string;
  tags: string[];
  title: string;
  content: string;
  excerpt: string;
  seo: PostTypeSEO;
  featuredImage: string;
};
