<template>
    <div class="logo">
        <img
            v-if="src"
            :src="src"
            :alt="alt"
            :width="width"
            :height="height"
            class="logo-image"
        />
        <span v-else class="logo-text">{{ text || 'Logo' }}</span>
    </div>
</template>

<script>
export default {
    name: "Logo",
    props: {
        src: {
            type: String,
            default: "",
        },
        alt: {
            type: String,
            default: "Logo",
        },
        width: {
            type: [String, Number],
            default: "auto",
        },
        height: {
            type: [String, Number],
            default: "auto",
        },
        text: {
            type: String,
            default: "",
        },
    },
};
</script>

<style scoped>
.logo {
    display: inline-block;
}

.logo-image {
    display: block;
}

.logo-text {
    font-weight: bold;
    font-size: 1.5rem;
}
</style>
