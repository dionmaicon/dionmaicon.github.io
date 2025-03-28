<template>
    <NuxtLink class="outlined_theme_button mx-6" :to="path" no-rel>
        <!-- float img right if prepend ortherwise -->
        <img
            v-if="prepend"
            class="outlined_theme_button_icon mx-2"
            :alt="text"
            :src="useAsset(`icons/outline/${icon}.svg`)"
        />
        <span :class="prepend ? 'mr-2' : 'ml-2'">{{ text }}</span>
        <img
            v-if="!prepend"
            :alt="text"
            class="outlined_theme_button_icon mx-2"
            :src="useAsset(`icons/outline/${icon}.svg`)"
        />
    </NuxtLink>
</template>

<script>
export default {
    name: "ThemeButton",
    props: {
        path: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            default: () => "",
        },
        prepend: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        useAsset(path) {
            const assets = import.meta.glob(
                "~/assets/icons/**/*.{jpeg,jpg,png,gif,svg}",
                {
                    eager: true,
                    import: "default",
                },
            );
            // @ts-expect-error: wrong type info
            return assets["/assets/" + path];
        },
    },
};
</script>

<style scoped>
.outlined_theme_button {
    /* Add your button styles here */
    display: inline-block;
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    border: 1px solid #e2e8f0;
}

.outlined_theme_button_icon {
    display: inline-block;
}
</style>
