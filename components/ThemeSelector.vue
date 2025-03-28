<template>
    <div class="relative">
        <button
            :class="`
          ${getThemeSelectorStyle}
          flex
          items-center
          px-2
          py-2
          border
          rounded-full
          theme-border-cyan
          text-teal-lighter
          border-teal-light
          hover:border-white
        `"
            @click="changeTheme"
        >
            <img
                :src="useAsset(`icons/outline/${getThemeSVG}.svg`)"
                :alt="getThemeSVG"
            />
        </button>
    </div>
</template>
<script>
export default {
    name: "ThemeSelector",
    data() {
        return {
            colors: [
                { title: "Dark", value: "dark" },
                { title: "Light", value: "light" },
                { title: "Sepia", value: "sepia" },
            ],
            selected: 0,
        };
    },
    computed: {
        getThemeSelectorStyle() {
            if (this.selected === 0) {
                return "bg-white text-black";
            }
            return "bg-black text-white";
        },

        getThemeSVG() {
            if (this.selected === 0) {
                return "light-bulb";
            }
            return "moon";
        },
    },
    methods: {
        changeTheme() {
            if (this.selected < 2) {
                this.selected += 1;
            } else {
                this.selected = 0;
            }
            this.$colorMode.preference = this.colors[this.selected].value;
        },
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
