// /components/ThemeSelector.vue
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/icons/outline/chevron-down.svg", {"importedNames":["default"]});const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/icons/outline/chevron-left.svg", {"importedNames":["default"]});const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/icons/outline/chevron-right.svg", {"importedNames":["default"]});const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/icons/outline/chevron-up.svg", {"importedNames":["default"]});const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/icons/outline/light-bulb.svg", {"importedNames":["default"]});const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/icons/outline/moon.svg", {"importedNames":["default"]});const __vite_ssr_import_6__ = await __vite_ssr_import__("vue", {"importedNames":["mergeProps"]});const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer", {"importedNames":["ssrRenderAttr","ssrRenderClass","ssrRenderAttrs"]});const __vite_ssr_import_8__ = await __vite_ssr_import__("vue", {"importedNames":["useSSRContext"]});const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper", {"importedNames":["default"]});
const _sfc_main = {
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
            };
            return "bg-black text-white";
        },

        getThemeSVG() {
            if (this.selected === 0) {
                return "light-bulb";
            };
            return "moon";
        },
    },
    methods: {
        changeTheme() {
            if (this.selected < 2) {
                this.selected += 1;
            } else {
                this.selected = 0;
            };
            this.$colorMode.preference = this.colors[this.selected].value;
        },
        useAsset(path) {
            const assets = /* #__PURE__ */ Object.assign({"/assets/icons/outline/chevron-down.svg": __vite_ssr_import_0__.default,"/assets/icons/outline/chevron-left.svg": __vite_ssr_import_1__.default,"/assets/icons/outline/chevron-right.svg": __vite_ssr_import_2__.default,"/assets/icons/outline/chevron-up.svg": __vite_ssr_import_3__.default,"/assets/icons/outline/light-bulb.svg": __vite_ssr_import_4__.default,"/assets/icons/outline/moon.svg": __vite_ssr_import_5__.default





});
            // @ts-expect-error: wrong type info
            return assets["/assets/" + path];
        },
    },
};




function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,__vite_ssr_import_7__.ssrRenderAttrs)((0,__vite_ssr_import_6__.mergeProps)({
      class: "relative",
      "data-v-inspector": "components/ThemeSelector.vue:2:5"
    }, _attrs))
  }><button class="${
    (0,__vite_ssr_import_7__.ssrRenderClass)(`
          ${$options.getThemeSelectorStyle}
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
        `)
  }" data-v-inspector="components/ThemeSelector.vue:3:9"><img${
    (0,__vite_ssr_import_7__.ssrRenderAttr)("src", $options.useAsset(`icons/outline/${$options.getThemeSVG}.svg`))
  }${
    (0,__vite_ssr_import_7__.ssrRenderAttr)("alt", $options.getThemeSVG)
  } data-v-inspector="components/ThemeSelector.vue:19:13"></button></div>`)
}



const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = (0,__vite_ssr_import_8__.useSSRContext)()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ThemeSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};

__vite_ssr_exports__.default = /*#__PURE__*/(0,__vite_ssr_import_9__.default)(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/media/dd/Data/Projects/dionmaicon.github.io/components/ThemeSelector.vue"]])

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQTtBQTBCQSxLQUFLLFVBQVU7SUFDWCxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDckIsSUFBSSxDQUFDLEVBQUU7UUFDSCxNQUFLLENBQUU7WUFDSCxNQUFNLEVBQUU7Z0JBQ0osRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0wsQ0FBQztJQUNELFFBQVEsRUFBRTtRQUNOLHFCQUFxQixDQUFDLEVBQUU7WUFDcEIsRUFBQyxDQUFFLENBQUMsSUFBSSxDQUFDLFFBQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JCLE1BQUssQ0FBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQztZQUNBLE1BQUssQ0FBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxDQUFDOztRQUVELFdBQVcsQ0FBQyxFQUFFO1lBQ1YsRUFBQyxDQUFFLENBQUMsSUFBSSxDQUFDLFFBQU8sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JCLE1BQUssQ0FBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkI7WUFDQSxNQUFLLENBQUUsQ0FBQyxJQUFJLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxXQUFXLENBQUMsRUFBRTtZQUNWLEVBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQyxRQUFPLENBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFPLENBQUUsQ0FBQyxFQUFFLENBQUM7WUFDdEIsRUFBRSxJQUFHLENBQUU7Z0JBQ0gsSUFBSSxDQUFDLFFBQU8sQ0FBRSxFQUFFLENBQUM7WUFDckI7WUFDQSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBUyxDQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSztRQUNqRSxDQUFDO1FBQ0QsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNYLEtBQUksQ0FBRSxNQUFLLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztZQU8vQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUUsSUFBRyxDQUFFO1lBQ2hDLE1BQUssQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQzs7Ozs7O0VBMUVEO09BQUE7TUFDUyxLQUFLLEVBQUMsVUFBVTtNQUFDLGtCQUFnQixFQUFDO09BRDNDOztPQUFBO1lBR2tDLDhCQUFxQjs7Ozs7Ozs7Ozs7OztPQUh2RCxxQ0FtQmlCLEtBQUcsRUFBRSxpQkFBUSxrQkFBa0Isb0JBQVc7O09BbkIzRCxxQ0FvQmlCLEtBQUcsRUFBRSxvQkFBVyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGhlbWVTZWxlY3Rvci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RoZW1lU2VsZWN0b3IudnVlOjI6NVwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICA6Y2xhc3M9XCJgXG4gICAgICAgICAgJHtnZXRUaGVtZVNlbGVjdG9yU3R5bGV9XG4gICAgICAgICAgZmxleFxuICAgICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICAgIHB4LTJcbiAgICAgICAgICBweS0yXG4gICAgICAgICAgYm9yZGVyXG4gICAgICAgICAgcm91bmRlZC1mdWxsXG4gICAgICAgICAgdGhlbWUtYm9yZGVyLWN5YW5cbiAgICAgICAgICB0ZXh0LXRlYWwtbGlnaHRlclxuICAgICAgICAgIGJvcmRlci10ZWFsLWxpZ2h0XG4gICAgICAgICAgaG92ZXI6Ym9yZGVyLXdoaXRlXG4gICAgICAgIGBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGhlbWVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UaGVtZVNlbGVjdG9yLnZ1ZTozOjlcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgOnNyYz1cInVzZUFzc2V0KGBpY29ucy9vdXRsaW5lLyR7Z2V0VGhlbWVTVkd9LnN2Z2ApXCJcbiAgICAgICAgICAgICAgICA6YWx0PVwiZ2V0VGhlbWVTVkdcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UaGVtZVNlbGVjdG9yLnZ1ZToxOToxM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiVGhlbWVTZWxlY3RvclwiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcnM6IFtcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkRhcmtcIiwgdmFsdWU6IFwiZGFya1wiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJMaWdodFwiLCB2YWx1ZTogXCJsaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJTZXBpYVwiLCB2YWx1ZTogXCJzZXBpYVwiIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IDAsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBnZXRUaGVtZVNlbGVjdG9yU3R5bGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImJnLXdoaXRlIHRleHQtYmxhY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcImJnLWJsYWNrIHRleHQtd2hpdGVcIjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRUaGVtZVNWRygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGlnaHQtYnVsYlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwibW9vblwiO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGFuZ2VUaGVtZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkIDwgMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRjb2xvck1vZGUucHJlZmVyZW5jZSA9IHRoaXMuY29sb3JzW3RoaXMuc2VsZWN0ZWRdLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICB1c2VBc3NldChwYXRoKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSBpbXBvcnQubWV0YS5nbG9iKFxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaWNvbnMvKiovKi57anBlZyxqcGcscG5nLGdpZixzdmd9XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlYWdlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHdyb25nIHR5cGUgaW5mb1xuICAgICAgICAgICAgcmV0dXJuIGFzc2V0c1tcIi9hc3NldHMvXCIgKyBwYXRoXTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvY29tcG9uZW50cy9UaGVtZVNlbGVjdG9yLnZ1ZSJ9
