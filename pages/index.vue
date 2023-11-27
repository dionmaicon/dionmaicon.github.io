<template>
<div>
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 p-4">
        <div v-for="post in posts" :key="post.id">
            <div class="shadow rounded-md p-4 min-h-350">
                
                <h2 class="font-bold text-lg my-2">{{ post.title }}</h2>
                
                <div class="text-left" v-html="post.excerpt"></div>
                
                <div class="text-right my-4">
                  <ThemeButton :path="`/posts/${post.slug}`" :prepend="false" icon="chevron-right" text="Read more"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import type { WPPost } from '~/types/IPost';

const runtimeConfig = useRuntimeConfig()

interface Response {
    data: WPPost[];
}

const response = await useFetch<Response>(
    `${runtimeConfig.public.apiBase}/software`
);

const postsAsRef = ref<WPPost[]>((response.data || []) as unknown as WPPost[]);

const posts = computed(() => postsAsRef.value.map(post => PostMapper.toDomain(post)));

if (process.client) {
  useSeoMeta({
      title: "Dion's Blog",
      description: "For good or bad, I'll talk about it anyway :)",
      ogTitle: "Dion's  Blog",
      ogDescription: "For good or bad, I'll talk about it anyway :)",
      ogImage: `/images/main.jpg`,
      ogUrl: window.location.href,
      twitterTitle: "Dion's Blog",
      twitterDescription: "For good or bad, I'll talk about it anyway :)",
      twitterImage: '/images/main.jpg',
      twitterCard: 'summary'
  })

  useHead({
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
  })
}


</script>
