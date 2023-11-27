<template>
  <div class="relative" :style="{ width: width, height: 'auto' }">
    <img
      ref="image"
      :src="srcLoaded"
      :alt="alt"
      :style="{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        width: width,
        height: 'auto',
        margin: '0 auto'
      }"
    >

    <div
      v-if="!loaded"
      class="absolute inset-0 w-full h-full flex items-center justify-center"
      :style="{
        backgroundColor: '#f1f5f9',
        width: width
      }"
    >
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageLoader',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'image'
    },
    width: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      loaded: false,
      observer: null
    }
  },
  computed: {
    srcLoaded() {
      return this.loaded ? this.srcImage : null
    }
  },
  created() {
    this.srcImage = this.src
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loaded = true
          this.observer.disconnect()
        }
      })
    })

    if (this.$refs.image) {
      this.observer.observe(this.$refs.image)
    }
  }
}
</script>
