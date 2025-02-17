<template>
    <div>
        <div class="text-center">
            <ImageLoader src="images/logo.png" alt="Blog Logo" width="32" />
        </div>
        <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 p-4">
            <div v-for="post in posts" :key="post.id">
                <div class="shadow rounded-md p-4 min-h-350">
                    <h2 class="font-bold text-lg my-2">{{ post.title }}</h2>

                    <div class="text-left" v-html="post.excerpt"></div>

                    <div class="text-right my-4">
                        <ThemeButton
                            :path="`/posts/${post.slug}`"
                            :prepend="false"
                            icon="chevron-right"
                            text="Read post"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { WPPost, GQPostsResponse } from "~/types/IPost";
import { gql } from "nuxt-graphql-request/utils";
const { $graphql } = useNuxtApp();

const runtimeConfig = useRuntimeConfig();

interface Response {
    data: WPPost[];
}

const query = gql`
    query allPosts {
        dmposts {
            nodes {
                id
                title
                date
                slug
                content
                excerpt
            }
        }
    }
`;

const response = await $graphql.default.request<GQPostsResponse>(query);

const postsAsRef = ref<WPPost[]>(
    (response.dmposts.nodes || []) as unknown as WPPost[],
);

const posts = computed(() =>
    (postsAsRef.value || []).map((post) => PostMapper.toDomain(post)),
);
// const posts = [] as unknown as WPPost[];

let url = "https://dionmaicon.github.io/";

if (import.meta.client) {
    url = window.location.href;
}

useSeoMeta({
    title: "Dion's Blog",
    description:
        "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
    ogTitle: "Dion's  Blog",
    ogDescription:
        "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
    ogImage: `/images/main.jpg`,
    ogUrl: url,
    twitterTitle: "Dion's Blog",
    twitterDescription:
        "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
    twitterImage: "/images/main.jpg",
    twitterCard: "summary",
});

useHead({
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
</script>
