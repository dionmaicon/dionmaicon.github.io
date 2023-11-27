<template>
    <div>
       <theme-button path="/" icon="chevron-left" text="Back"/>
        <div v-if="!post">
            <div class="flex justify-center items-center h-screen">
                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        </div>
        <div v-if="post" class="my-6">
            <article class="p-6">
                <header class="nuxt-content-container">
                    <h1 class="text-xl text-3xl text-center mb-6 nuxt-content-title">
                        {{ post.title }}
                    </h1>
                </header>
                <section class="nuxt-content-container my-6">
                  <figure v-if="post.featured_image" class="picture">
                      <ImageLoader
                      class="mx-auto"
                      :src="post.featured_image"
                      :width="featuredImageWidth"
                      alt="featuredImage"
                    />
                  </figure>
                  <p class="my-3 text-sm">
                    Posted: {{ formatDate(post.date) }}
                  </p>
                </section>
                <client-only>
                  <section class="nuxt-content" v-html="post.content" ></section>
                </client-only>
            </article>
        </div>
      <theme-button path="/" icon="chevron-left" text="Back"/>
    </div>
</template>


<script setup lang="ts">
import PostMapper from "@/utils/PostMapper";
import type { Post, WPPost } from "~/types/IPost";
import hljs from 'highlight.js'
import { useRoute } from "vue-router";
const route = useRoute();
const slug = route.params.slug;

const runtimeConfig = useRuntimeConfig();

interface Response {
    data: WPPost[];
}

const response = await useFetch<Response>(
    `${runtimeConfig.public.apiBase}/software?slug=${slug}`
);

const posts = ref<WPPost[]>((response.data || []) as unknown as WPPost[]);

const post = ref(PostMapper.toDomain(posts.value[0]));

const meta = PostMetaHead.prepareHead(post.value);

const getDescription = (yoastMeta: Post["yoast_meta"]) => {
    const description = yoastMeta.filter(meta => meta.name === 'description')

    if (description.length > 0) {
    return description[0].content
    }
    return ''
};

useSeoMeta({
  description: getDescription(post.value.yoast_meta),
  ogTitle: post.value.title,
  ogDescription: getDescription(post.value.yoast_meta),
  ogImage: post.value.featured_image,
  ogLocale: 'en_US',
  twitterTitle: post.value.title,
  twitterDescription: getDescription(post.value.yoast_meta),
  twitterImage: post.value.featured_image,
  twitterCard: post.value.featured_image ? 'summary_large_image' : 'summary'
})

const featuredImageWidth = computed(() => {
    if (process.client) {
        return (
          (window.innerWidth > 768 ? 768 : (window.innerWidth * 90) / 100) +
          ' px'
        )
    }
    return "100%"
});

const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

useHead({
    title: `${post.value.title} - Dion's Blog`,
    meta,
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico'
      }
    ],
});

onMounted(() => {
    if (process.client) {
        window.scrollTo(0, 0);
        setTimeout(function() {
        document.querySelectorAll('pre')
          .forEach((block) => {
            hljs.highlightElement(block)
          });
      }, 1000)
    }
});

</script>
