// /components/ThemeButton.vue
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js", {"importedNames":["default"]});const __vite_ssr_import_1__ = await __vite_ssr_import__("vue", {"importedNames":["createBlock","createVNode"]});const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/icons/outline/chevron-down.svg", {"importedNames":["default"]});const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/icons/outline/chevron-left.svg", {"importedNames":["default"]});const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/icons/outline/chevron-right.svg", {"importedNames":["default"]});const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/icons/outline/chevron-up.svg", {"importedNames":["default"]});const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/icons/outline/light-bulb.svg", {"importedNames":["default"]});const __vite_ssr_import_7__ = await __vite_ssr_import__("/assets/icons/outline/moon.svg", {"importedNames":["default"]});const __vite_ssr_import_8__ = await __vite_ssr_import__("vue", {"importedNames":["resolveComponent","withCtx","createCommentVNode","openBlock","toDisplayString","mergeProps"]});const __vite_ssr_import_9__ = await __vite_ssr_import__("vue/server-renderer", {"importedNames":["ssrRenderAttr","ssrRenderClass","ssrRenderComponent","ssrInterpolate"]});const __vite_ssr_import_10__ = await __vite_ssr_import__("/components/ThemeButton.vue?vue&type=style&index=0&scoped=5e120270&lang.css");const __vite_ssr_import_11__ = await __vite_ssr_import__("vue", {"importedNames":["useSSRContext"]});const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper", {"importedNames":["default"]});
/* Injection by vite-plugin-vue-inspector Start */

function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector'];
    delete vnode.props['data-v-inspector'];
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  };
  return vnode
}
function _createBlock(...args) { return _interopVNode((0,__vite_ssr_import_1__.createBlock)(...args)) }
function _createVNode(...args) { return _interopVNode((0,__vite_ssr_import_1__.createVNode)(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
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
            const assets = /* #__PURE__ */ Object.assign({"/assets/icons/outline/chevron-down.svg": __vite_ssr_import_2__.default,"/assets/icons/outline/chevron-left.svg": __vite_ssr_import_3__.default,"/assets/icons/outline/chevron-right.svg": __vite_ssr_import_4__.default,"/assets/icons/outline/chevron-up.svg": __vite_ssr_import_5__.default,"/assets/icons/outline/light-bulb.svg": __vite_ssr_import_6__.default,"/assets/icons/outline/moon.svg": __vite_ssr_import_7__.default





});
            // @ts-expect-error: wrong type info
            return assets["/assets/" + path];
        },
    },
};




function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;

  _push((0,__vite_ssr_import_9__.ssrRenderComponent)(_component_NuxtLink, (0,__vite_ssr_import_8__.mergeProps)({
    class: "outlined_theme_button mx-6",
    to: $props.path,
    "no-rel": "",
    "data-v-inspector": "components/ThemeButton.vue:2:5"
  }, _attrs), {
    default: (0,__vite_ssr_import_8__.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!-- float img right if prepend ortherwise -->`);
        if ($props.prepend) {
          _push(`<img class="outlined_theme_button_icon mx-2"${
            (0,__vite_ssr_import_9__.ssrRenderAttr)("alt", $props.text)
          }${
            (0,__vite_ssr_import_9__.ssrRenderAttr)("src", $options.useAsset(`icons/outline/${$props.icon}.svg`))
          } data-v-inspector="components/ThemeButton.vue:4:9" data-v-5e120270${
            _scopeId
          }>`)
        } else {
          _push(`<!---->`)
        };
        _push(`<span class="${
          (0,__vite_ssr_import_9__.ssrRenderClass)($props.prepend ? 'mr-2' : 'ml-2')
        }" data-v-inspector="components/ThemeButton.vue:10:9" data-v-5e120270${
          _scopeId
        }>${
          (0,__vite_ssr_import_9__.ssrInterpolate)($props.text)
        }</span>`);
        if (!$props.prepend) {
          _push(`<img${
            (0,__vite_ssr_import_9__.ssrRenderAttr)("alt", $props.text)
          } class="outlined_theme_button_icon mx-2"${
            (0,__vite_ssr_import_9__.ssrRenderAttr)("src", $options.useAsset(`icons/outline/${$props.icon}.svg`))
          } data-v-inspector="components/ThemeButton.vue:11:9" data-v-5e120270${
            _scopeId
          }>`)
        } else {
          _push(`<!---->`)
        }
      } else {
        return [
          (0,__vite_ssr_import_8__.createCommentVNode)(" float img right if prepend ortherwise "),
          ($props.prepend)
            ? ((0,__vite_ssr_import_8__.openBlock)(), _createBlock("img", {
                key: 0,
                class: "outlined_theme_button_icon mx-2",
                alt: $props.text,
                src: $options.useAsset(`icons/outline/${$props.icon}.svg`),
                "data-v-inspector": "components/ThemeButton.vue:4:9"
              }, null, 8 /* PROPS */, ["alt", "src"]))
            : (0,__vite_ssr_import_8__.createCommentVNode)("v-if", true),
          _createVNode("span", {
            class: $props.prepend ? 'mr-2' : 'ml-2',
            "data-v-inspector": "components/ThemeButton.vue:10:9"
          }, (0,__vite_ssr_import_8__.toDisplayString)($props.text), 3 /* TEXT, CLASS */),
          (!$props.prepend)
            ? ((0,__vite_ssr_import_8__.openBlock)(), _createBlock("img", {
                key: 1,
                alt: $props.text,
                class: "outlined_theme_button_icon mx-2",
                src: $options.useAsset(`icons/outline/${$props.icon}.svg`),
                "data-v-inspector": "components/ThemeButton.vue:11:9"
              }, null, 8 /* PROPS */, ["alt", "src"]))
            : (0,__vite_ssr_import_8__.createCommentVNode)("v-if", true)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}




const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = (0,__vite_ssr_import_11__.useSSRContext)()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ThemeButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};

__vite_ssr_exports__.default = /*#__PURE__*/(0,__vite_ssr_import_12__.default)(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-5e120270"],['__file',"/media/dd/Data/Projects/dionmaicon.github.io/components/ThemeButton.vue"]])

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLEtBQUssVUFBVTtJQUNYLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUNuQixLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2xCLENBQUM7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2xCLENBQUM7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUUsSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDWCxLQUFJLENBQUUsTUFBSyxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7WUFPL0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFFLElBQUcsQ0FBRTtZQUNoQyxNQUFLLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7O0VBckREO0lBQ2MsS0FBSyxFQUFDLDRCQUE0QjtJQUFFLEVBQUUsRUFBRSxXQUFJO0lBQUUsUUFBTSxFQUFOLEVBQU07SUFBQyxrQkFBZ0IsRUFBQztLQURwRjtJQUFBLDJDQUNJLENBZVc7VUFoQmY7UUFBQTtZQUlrQixjQUFPO1VBSnpCO2VBQUEscUNBTWEsS0FBRyxFQUFFLFdBQUk7O2VBTnRCLHFDQU9hLEtBQUcsRUFBRSxpQkFBUSxrQkFBa0IsV0FBSTs7WUFQaEQ7OztVQUFBOztRQUFBO2FBQUEsc0NBU3NCLGNBQU87O1VBVDdCOzthQUFBLHNDQVN1RyxXQUFJOzthQUV4RixjQUFPO1VBWDFCO2VBQUEscUNBWWEsS0FBRyxFQUFFLFdBQUk7O2VBWnRCLHFDQWNhLEtBQUcsRUFBRSxpQkFBUSxrQkFBa0IsV0FBSTs7WUFkaEQ7OztVQUFBOzs7O2FBRVEsb0ZBQThDO1dBRXBDLGNBQU87c0RBRGpCLGFBS0U7Z0JBUlY7Z0JBS1ksS0FBSyxFQUFDLGlDQUFpQztnQkFDdEMsR0FBRyxFQUFFLFdBQUk7Z0JBQ1QsR0FBRyxFQUFFLGlCQUFRLGtCQUFrQixXQUFJO2dCQUFTLGtCQUFnQixFQUFDOztpQkFQMUU7VUFTUSxhQUE2RztZQUF0RyxLQUFLLEVBQUUsY0FBTztZQUFvQixrQkFBZ0IsRUFBQzt1REFBcUMsV0FBSTtZQUV4RixjQUFPO3NEQURsQixhQUtFO2dCQWZWO2dCQVlhLEdBQUcsRUFBRSxXQUFJO2dCQUNWLEtBQUssRUFBQyxpQ0FBaUM7Z0JBQ3RDLEdBQUcsRUFBRSxpQkFBUSxrQkFBa0IsV0FBSTtnQkFBUyxrQkFBZ0IsRUFBQzs7aUJBZDFFOzs7O0lBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlRoZW1lQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPE51eHRMaW5rIGNsYXNzPVwib3V0bGluZWRfdGhlbWVfYnV0dG9uIG14LTZcIiA6dG89XCJwYXRoXCIgbm8tcmVsIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RoZW1lQnV0dG9uLnZ1ZToyOjVcIj5cbiAgICAgICAgPCEtLSBmbG9hdCBpbWcgcmlnaHQgaWYgcHJlcGVuZCBvcnRoZXJ3aXNlIC0tPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgICB2LWlmPVwicHJlcGVuZFwiXG4gICAgICAgICAgICBjbGFzcz1cIm91dGxpbmVkX3RoZW1lX2J1dHRvbl9pY29uIG14LTJcIlxuICAgICAgICAgICAgOmFsdD1cInRleHRcIlxuICAgICAgICAgICAgOnNyYz1cInVzZUFzc2V0KGBpY29ucy9vdXRsaW5lLyR7aWNvbn0uc3ZnYClcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UaGVtZUJ1dHRvbi52dWU6NDo5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gOmNsYXNzPVwicHJlcGVuZCA/ICdtci0yJyA6ICdtbC0yJ1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RoZW1lQnV0dG9uLnZ1ZToxMDo5XCI+e3sgdGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgdi1pZj1cIiFwcmVwZW5kXCJcbiAgICAgICAgICAgIDphbHQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzPVwib3V0bGluZWRfdGhlbWVfYnV0dG9uX2ljb24gbXgtMlwiXG4gICAgICAgICAgICA6c3JjPVwidXNlQXNzZXQoYGljb25zL291dGxpbmUvJHtpY29ufS5zdmdgKVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RoZW1lQnV0dG9uLnZ1ZToxMTo5XCJcbiAgICAgICAgLz5cbiAgICA8L051eHRMaW5rPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlRoZW1lQnV0dG9uXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICBwcmVwZW5kOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXNlQXNzZXQocGF0aCkge1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0gaW1wb3J0Lm1ldGEuZ2xvYihcbiAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ljb25zLyoqLyoue2pwZWcsanBnLHBuZyxnaWYsc3ZnfVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWFnZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydDogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3cm9uZyB0eXBlIGluZm9cbiAgICAgICAgICAgIHJldHVybiBhc3NldHNbXCIvYXNzZXRzL1wiICsgcGF0aF07XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5vdXRsaW5lZF90aGVtZV9idXR0b24ge1xuICAgIC8qIEFkZCB5b3VyIGJ1dHRvbiBzdHlsZXMgaGVyZSAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbn1cblxuLm91dGxpbmVkX3RoZW1lX2J1dHRvbl9pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvY29tcG9uZW50cy9UaGVtZUJ1dHRvbi52dWUifQ==
