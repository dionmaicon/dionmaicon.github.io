<template>
    <div>
        <theme-button path="/" icon="chevron-left" text="Back" />
        <div v-if="!post">
            <div class="flex justify-center items-center h-screen">
                <div
                    class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
                ></div>
            </div>
        </div>
        <div v-if="post" class="my-6">
            <article class="p-6">
                <header class="nuxt-content-container">
                    <h1
                        class="text-xl text-3xl text-center mb-6 nuxt-content-title"
                    >
                        {{ post.title }}
                    </h1>
                </header>
                <section class="nuxt-content-container my-6">
                    <figure v-if="post.featuredImage" class="picture">
                        <ImageLoader
                            class="mx-auto"
                            :src="post.featuredImage"
                            :width="featuredImageWidth"
                            height="350"
                            alt="featuredImage"
                        />
                    </figure>
                    <p class="my-3 text-sm">
                        Posted: {{ formatDate(post.date) }}
                    </p>
                </section>
                <client-only>
                    <section
                        class="nuxt-content"
                        v-html="post.content"
                    ></section>
                </client-only>
            </article>
        </div>
        <theme-button path="/" icon="chevron-left" text="Back" />
    </div>
</template>

<script setup lang="ts">
import PostMapper from "@/utils/PostMapper";
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
const variables = {
    slug,
};
const response = await $graphql.default.request<GQSinglePostResponse>(
    query,
    variables,
);

const postAsRef = ref<WPPost>((response.dmpost || {}) as unknown as WPPost);

const post = ref(PostMapper.toDomain(postAsRef.value));

const meta = PostMetaHead.prepareHead(post.value);

const getDescription = (yoastMeta: Post["seo"]) => {
    return yoastMeta?.metaDesc;
};
const getOgUrl = () => {
    if (import.meta.client) {
        return window.location.href;
    }
    return `${runtimeConfig.public.appBase}/posts/${slug}`;
};

useSeoMeta({
    description: getDescription(post.value.seo),
    ogTitle: post.value.title,
    ogDescription: getDescription(post.value.seo),
    ogImage: post.value.featuredImage,
    ogLocale: "en_US",
    twitterTitle: post.value.title,
    twitterDescription: getDescription(post.value.seo),
    twitterImage: post.value.featuredImage,
    twitterCard: post.value.featuredImage ? "summary_large_image" : "summary",
    ogUrl: getOgUrl(),
});

const featuredImageWidth = computed(() => {
    if (import.meta.client) {
        return (
            (window.innerWidth > 768 ? 768 : (window.innerWidth * 90) / 100) +
            " px"
        );
    }
    return "100%";
});

const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
};

useHead({
    title: `${post.value.title} - Dion's Blog`,
    meta,
    htmlAttrs: {
        lang: "en",
    },
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon.ico",
        },
    ],
});

onMounted(() => {
    if (import.meta.client) {
        window.scrollTo(0, 0);
        setTimeout(function () {
            document.querySelectorAll("pre").forEach((block) => {
                hljs.configure({ ignoreUnescapedHTML: true });
                hljs.highlightElement(block);
            });
        }, 1000);
    }
});
</script>
