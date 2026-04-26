<template>
    <div class="post-page">
        <div v-if="!post" class="flex justify-center items-center h-screen">
            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>

        <div v-if="post" class="post-wrap">
            <div class="post-topbar">
                <NuxtLink to="/" class="back-link">← All posts</NuxtLink>
            </div>

            <article>
                <header class="post-header">
                    <h1 class="post-title">{{ post.title }}</h1>
                    <time class="post-date">{{ formatDate(post.date) }}</time>
                </header>

                <figure v-if="post.featuredImage" class="post-hero">
                    <img :src="post.featuredImage" :alt="post.title" />
                </figure>

                <client-only>
                    <section class="nuxt-content" v-html="post.content" />
                </client-only>
            </article>

            <footer class="post-footer">
                <NuxtLink to="/" class="back-link-bottom">← All posts</NuxtLink>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import PostMapper from "@/utils/PostMapper";
import PostMetaHead from "@/utils/PostMetaHead";
import type { Post, WPPost, GQSinglePostResponse } from "~/types/IPost";
import hljs from "highlight.js";
import { useRoute } from "vue-router";
import { gql } from "nuxt-graphql-request/utils";

const route = useRoute();
const { $graphql } = useNuxtApp();
const slug = route.params.slug;
const runtimeConfig = useRuntimeConfig();

const query = gql`
    query dmposts($slug: ID!) {
        dmpost(id: $slug, idType: SLUG) {
            title
            content
            date
            featuredImage {
                node {
                    id
                    sourceUrl
                }
            }
            seo {
                canonical
                title
                metaDesc
                focuskw
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphAuthor
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                breadcrumbs {
                    url
                    text
                }
            }
        }
    }
`;

const variables = { slug };
const response = await $graphql.default.request<GQSinglePostResponse>(query, variables);

const postAsRef = ref<WPPost>((response.dmpost || {}) as unknown as WPPost);
const post = ref(PostMapper.toDomain(postAsRef.value));
const meta = PostMetaHead.prepareHead(post.value);

const getDescription = (yoastMeta: Post["seo"]) => yoastMeta?.metaDesc;

const SITE_URL = "https://dionmaicon.github.io";

const getCanonical = () => `${SITE_URL}/posts/${slug}`;

const getOgUrl = () => {
    if (import.meta.client) return window.location.href;
    return getCanonical();
};

const description = getDescription(post.value.seo) ?? "";
const author = post.value.seo?.opengraphAuthor || "Dion";

useSeoMeta({
    description,
    ogTitle: post.value.title,
    ogDescription: description,
    ogImage: post.value.featuredImage,
    ogLocale: "en_US",
    ogType: "article",
    articleAuthor: [author],
    articlePublishedTime: post.value.date,
    twitterTitle: post.value.title,
    twitterDescription: description,
    twitterImage: post.value.featuredImage,
    twitterCard: post.value.featuredImage ? "summary_large_image" : "summary",
    ogUrl: getOgUrl(),
});

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.value.title,
    description,
    image: post.value.featuredImage,
    datePublished: post.value.date ? new Date(post.value.date).toISOString() : undefined,
    dateModified: post.value.date ? new Date(post.value.date).toISOString() : undefined,
    author: { "@type": "Person", name: author, url: SITE_URL },
    publisher: {
        "@type": "Organization",
        name: "Dion's Blog",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": getCanonical() },
    url: getCanonical(),
};

const formatDate = (date: string): string =>
    new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

useHead({
    title: `${post.value.title} - Dion's Blog`,
    meta,
    htmlAttrs: { lang: "en" },
    link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        { rel: "canonical", href: getCanonical() },
    ],
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd),
        },
    ],
});

onMounted(() => {
    if (import.meta.client) {
        window.scrollTo(0, 0);
        setTimeout(() => {
            document.querySelectorAll("pre").forEach((block) => {
                hljs.configure({ ignoreUnescapedHTML: true });
                hljs.highlightElement(block);
            });
        }, 1000);
    }
});
</script>

<style scoped>
.post-page {
    min-height: 100vh;
}

.post-wrap {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 16px 60px;
}

.post-topbar {
    display: flex;
    justify-content: flex-end;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 24px;
}

.back-link {
    font-size: 13px;
    font-weight: 600;
    color: var(--color-primary);
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.15s;
}

.back-link:hover {
    opacity: 1;
}

.post-header {
    margin-bottom: 20px;
}

.post-title {
    font-size: clamp(22px, 5vw, 36px);
    font-weight: 800;
    line-height: 1.25;
    margin-bottom: 8px;
}

.post-date {
    font-size: 13px;
    opacity: 0.45;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.post-hero {
    margin: 0 0 28px;
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
}

.post-hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.post-footer {
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
}

.back-link-bottom {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-primary);
    text-decoration: none;
    opacity: 0.75;
    transition: opacity 0.15s;
}

.back-link-bottom:hover {
    opacity: 1;
}
</style>
