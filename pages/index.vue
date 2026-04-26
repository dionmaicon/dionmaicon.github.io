<template>
    <div class="page-wrapper">
        <div class="logo-wrap">
            <ImageLoader src="images/logo.png" alt="Blog Logo" width="56px" />
            <p class="tagline">Tech Solutions, Philosophy, Cryptos &amp; Libertarianism</p>
        </div>

        <div class="search-wrap">
            <div class="search-box">
                <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search posts..."
                    class="search-input"
                />
                <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p v-if="searchQuery" class="result-count">
                {{ filteredPosts.length }} result{{ filteredPosts.length !== 1 ? 's' : '' }}
            </p>
        </div>

        <div class="card-grid">
            <NuxtLink
                v-for="post in visiblePosts"
                :key="post.id"
                :to="`/posts/${post.slug}`"
                class="card"
            >
                <div class="card-image">
                    <img
                        v-if="post.featuredImage"
                        :src="post.featuredImage"
                        :alt="post.title"
                        loading="lazy"
                    />
                    <div v-else class="card-image-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
                <div class="card-body">
                    <time class="card-date">{{ formatDate(post.date) }}</time>
                    <h2 class="card-title">{{ post.title }}</h2>
                    <p v-if="post.description" class="card-desc">{{ post.description }}</p>
                    <span class="card-cta">Read post →</span>
                </div>
            </NuxtLink>
        </div>

        <div v-if="filteredPosts.length === 0" class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>No posts match "<strong>{{ searchQuery }}</strong>"</p>
        </div>

        <div ref="sentinel" class="sentinel" />
    </div>
</template>

<script setup lang="ts">
import type { WPPost, GQPostsResponse } from "~/types/IPost";
import { gql } from "nuxt-graphql-request/utils";

const { $graphql } = useNuxtApp();

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
                featuredImage {
                    node {
                        id
                        sourceUrl
                    }
                }
                seo {
                    metaDesc
                    opengraphDescription
                }
            }
        }
    }
`;

const response = await $graphql.default.request<GQPostsResponse>(query);

const postsAsRef = ref<WPPost[]>(
    (response.dmposts.nodes || []) as unknown as WPPost[],
);

const allPosts = computed(() =>
    (postsAsRef.value || []).map((post) => PostMapper.toDomain(post)),
);

const PAGE_SIZE = 6;
const searchQuery = ref("");
const visibleCount = ref(PAGE_SIZE);

const filteredPosts = computed(() => {
    const q = searchQuery.value.toLowerCase().trim();
    if (!q) return allPosts.value;
    return allPosts.value.filter((post) =>
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q),
    );
});

const visiblePosts = computed(() =>
    filteredPosts.value.slice(0, visibleCount.value),
);

watch(searchQuery, () => {
    visibleCount.value = PAGE_SIZE;
});

const sentinel = ref<HTMLElement | null>(null);

function formatDate(dateStr: string) {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            if (
                entries[0].isIntersecting &&
                visibleCount.value < filteredPosts.value.length
            ) {
                visibleCount.value += PAGE_SIZE;
            }
        },
        { threshold: 0.1 },
    );

    if (sentinel.value) {
        observer.observe(sentinel.value);
    }

    onUnmounted(() => observer.disconnect());
});

let url = "https://dionmaicon.github.io/";
if (import.meta.client) {
    url = window.location.href;
}

useSeoMeta({
    title: "Dion's Blog",
    description: "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
    ogTitle: "Dion's Blog",
    ogDescription: "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
    ogImage: `/images/main.jpg`,
    ogUrl: url,
    twitterTitle: "Dion's Blog",
    twitterDescription: "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
    twitterImage: "/images/main.jpg",
    twitterCard: "summary",
});

useHead({
    htmlAttrs: { lang: "en" },
    link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
});
</script>

<style scoped>
.page-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 60px;
}

/* Logo / hero */
.logo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 24px 0 32px;
}

.tagline {
    font-size: 14px;
    opacity: 0.55;
    letter-spacing: 0.02em;
    text-align: center;
}

/* Search */
.search-wrap {
    max-width: 560px;
    margin: 0 auto 40px;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 0 16px;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.search-box:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
}

.search-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    opacity: 0.45;
}

.search-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 12px 10px;
    font-size: 15px;
    color: var(--color);
}

.search-input::placeholder {
    opacity: 0.4;
}

.search-clear {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    opacity: 0.4;
    color: var(--color);
    display: flex;
    align-items: center;
    transition: opacity 0.15s;
}

.search-clear:hover {
    opacity: 0.8;
}

.search-clear svg {
    width: 16px;
    height: 16px;
}

.result-count {
    font-size: 13px;
    opacity: 0.5;
    text-align: center;
    margin-top: 8px;
}

/* Card grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

@media (max-width: 900px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 560px) {
    .card-grid {
        grid-template-columns: 1fr;
    }
}

/* Card */
.card {
    display: flex;
    flex-direction: column;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    color: var(--color);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.card-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--border-color);
    flex-shrink: 0;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.card:hover .card-image img {
    transform: scale(1.04);
}

.card-image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.25;
}

.card-image-placeholder svg {
    width: 40px;
    height: 40px;
}

.card-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 14px 16px 16px;
    flex-grow: 1;
}

.card-date {
    font-size: 12px;
    opacity: 0.45;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.card-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
}

.card-desc {
    font-size: 13px;
    opacity: 0.6;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
}

.card-cta {
    font-size: 13px;
    color: var(--color-primary);
    font-weight: 600;
    margin-top: 8px;
    opacity: 0.85;
    transition: opacity 0.15s;
}

.card:hover .card-cta {
    opacity: 1;
}

/* Empty state */
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 60px 20px;
    opacity: 0.4;
    text-align: center;
}

.empty-state svg {
    width: 48px;
    height: 48px;
}

/* Sentinel */
.sentinel {
    height: 32px;
}
</style>
