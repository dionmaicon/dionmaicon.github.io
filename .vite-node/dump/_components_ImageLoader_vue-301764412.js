// /components/ImageLoader.vue
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue", {"importedNames":["mergeProps"]});const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer", {"importedNames":["ssrRenderAttr","ssrRenderStyle","ssrRenderAttrs"]});const __vite_ssr_import_2__ = await __vite_ssr_import__("vue", {"importedNames":["useSSRContext"]});const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper", {"importedNames":["default"]});
const _sfc_main = {
    name: "ImageLoader",
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: "image",
        },
        width: {
            type: String,
            required: true,
        },
        height: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            loaded: false,
            observer: null,
        };
    },
    computed: {
        srcLoaded() {
            return this.loaded ? this.srcImage : null;
        },
    },
    created() {
        this.srcImage = this.src;
    },
    mounted() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.loaded = true;
                    this.observer.disconnect();
                }
            });
        });

        if (this.$refs.image) {
            this.observer.observe(this.$refs.image);
        }
    },
};




function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,__vite_ssr_import_1__.ssrRenderAttrs)((0,__vite_ssr_import_0__.mergeProps)({
      class: "relative",
      style: { width: $props.width, height: 'auto' },
      "data-v-inspector": "components/ImageLoader.vue:2:5"
    }, _attrs))
  }><img${
    (0,__vite_ssr_import_1__.ssrRenderAttr)("src", $options.srcLoaded)
  }${
    (0,__vite_ssr_import_1__.ssrRenderAttr)("alt", $props.alt)
  } style="${
    (0,__vite_ssr_import_1__.ssrRenderStyle)({
                opacity: $data.loaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                width: $props.width,
                height: 'auto',
                margin: '0 auto',
            })
  }" data-v-inspector="components/ImageLoader.vue:3:9">`);
  if (!$data.loaded) {
    _push(`<div class="absolute inset-0 w-full h-full flex items-center justify-center" style="${(0,__vite_ssr_import_1__.ssrRenderStyle)({
                backgroundColor: '#f1f5f9',
                width: $props.width,
                height: $props.height || 'auto',
            })}" data-v-inspector="components/ImageLoader.vue:16:9"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-inspector="components/ImageLoader.vue:25:13"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-inspector="components/ImageLoader.vue:31:17"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" data-v-inspector="components/ImageLoader.vue:39:17"></path></svg></div>`)
  } else {
    _push(`<!---->`)
  };
  _push(`</div>`)
}



const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = (0,__vite_ssr_import_2__.useSSRContext)()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ImageLoader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};

__vite_ssr_exports__.default = /*#__PURE__*/(0,__vite_ssr_import_3__.default)(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/media/dd/Data/Projects/dionmaicon.github.io/components/ImageLoader.vue"]])

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQTtBQWdEQSxLQUFLLFVBQVU7SUFDWCxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDbkIsS0FBSyxFQUFFO1FBQ0gsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtRQUNsQixDQUFDO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7UUFDbEIsQ0FBQztRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLEtBQUs7UUFDbkIsQ0FBQztJQUNMLENBQUM7O0lBRUQsSUFBSSxDQUFDLEVBQUU7UUFDSCxNQUFLLENBQUU7WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBQ0QsUUFBUSxFQUFFO1FBQ04sU0FBUyxDQUFDLEVBQUU7WUFDUixNQUFLLENBQUUsSUFBSSxDQUFDLE1BQUssQ0FBRSxFQUFFLElBQUksQ0FBQyxRQUFPLENBQUUsRUFBRSxJQUFJO1FBQzdDLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxDQUFDLEVBQUU7UUFDTixJQUFJLENBQUMsUUFBTyxDQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUc7SUFDNUIsQ0FBQztJQUNELE9BQU8sQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLFFBQU8sQ0FBRSxFQUFFLEdBQUUsQ0FBRSxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDbEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUMsQ0FBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxNQUFLLENBQUUsRUFBRSxJQUFJO29CQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QjtZQUNKLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQzs7UUFFRixFQUFDLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0M7SUFDSixDQUFDO0FBQ0wsQ0FBQzs7Ozs7O0VBakdEO09BQUE7TUFDUyxLQUFLLEVBQUMsVUFBVTtNQUFFLEtBQUssV0FBVyxZQUFLO01BQW9CLGtCQUFnQixFQUFDO09BRHJGOztPQUFBLHFDQUlhLEtBQUcsRUFBRSxrQkFBUzs7T0FKM0IscUNBS2EsS0FBRyxFQUFFLFVBQUc7O09BTHJCO3lCQU0rQyxZQUFNOzt1QkFBeUYsWUFBSzs7Ozs7T0FVaEksWUFBTTtJQWhCekI7O3VCQWtCeUYsWUFBSzt3QkFBMEIsYUFBTTs7O0lBbEI5SDs7RUFBQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSW1hZ2VMb2FkZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIiA6c3R5bGU9XCJ7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiAnYXV0bycgfVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL0ltYWdlTG9hZGVyLnZ1ZToyOjVcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgcmVmPVwiaW1hZ2VcIlxuICAgICAgICAgICAgOnNyYz1cInNyY0xvYWRlZFwiXG4gICAgICAgICAgICA6YWx0PVwiYWx0XCJcbiAgICAgICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBsb2FkZWQgPyAxIDogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICAgIH1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9JbWFnZUxvYWRlci52dWU6Mzo5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICB2LWlmPVwiIWxvYWRlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YxZjVmOScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0IHx8ICdhdXRvJyxcbiAgICAgICAgICAgIH1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9JbWFnZUxvYWRlci52dWU6MTY6OVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFuaW1hdGUtc3BpbiAtbWwtMSBtci0zIGgtNSB3LTUgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9JbWFnZUxvYWRlci52dWU6MjU6MTNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvSW1hZ2VMb2FkZXIudnVlOjMxOjE3XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwib3BhY2l0eS03NVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0elwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL0ltYWdlTG9hZGVyLnZ1ZTozOToxN1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiSW1hZ2VMb2FkZXJcIixcbiAgICBwcm9wczoge1xuICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiaW1hZ2VcIixcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBvYnNlcnZlcjogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNyY0xvYWRlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZCA/IHRoaXMuc3JjSW1hZ2UgOiBudWxsO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zcmNJbWFnZSA9IHRoaXMuc3JjO1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kcmVmcy5pbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuJHJlZnMuaW1hZ2UpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2NvbXBvbmVudHMvSW1hZ2VMb2FkZXIudnVlIn0=
