// /app.vue
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-layout.js", {"importedNames":["default"]});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHeader.vue", {"importedNames":["default"]});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.js", {"importedNames":["default"]});const __vite_ssr_import_3__ = await __vite_ssr_import__("vue", {"importedNames":["createVNode"]});const __vite_ssr_import_4__ = await __vite_ssr_import__("vue", {"importedNames":["resolveComponent","withCtx","mergeProps"]});const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer", {"importedNames":["ssrRenderComponent","ssrRenderAttrs"]});const __vite_ssr_import_6__ = await __vite_ssr_import__("/app.vue?vue&type=style&index=0&lang.css");const __vite_ssr_import_7__ = await __vite_ssr_import__("vue", {"importedNames":["useSSRContext"]});const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper", {"importedNames":["default"]});
/* Injection by vite-plugin-vue-inspector Start */

function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector'];
    delete vnode.props['data-v-inspector'];
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  };
  return vnode
}
function _createVNode(...args) { return _interopVNode((0,__vite_ssr_import_3__.createVNode)(...args)) }
/* Injection by vite-plugin-vue-inspector End */
const _sfc_main = {};



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default;
  const _component_TheHeader = __vite_ssr_import_1__.default;
  const _component_NuxtPage = __vite_ssr_import_2__.default;

  _push(`<!--[--><!-- Update content: 2 ---><div${(0,__vite_ssr_import_5__.ssrRenderAttrs)((0,__vite_ssr_import_4__.mergeProps)({ "data-v-inspector": "app.vue:3:3" }, _attrs))}>`);
  _push((0,__vite_ssr_import_5__.ssrRenderComponent)(_component_NuxtLayout, { "data-v-inspector": "app.vue:4:5" }, {
    default: (0,__vite_ssr_import_4__.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,__vite_ssr_import_5__.ssrRenderComponent)(_component_TheHeader, { "data-v-inspector": "app.vue:5:7" }, null, _parent, _scopeId));
        _push((0,__vite_ssr_import_5__.ssrRenderComponent)(_component_NuxtPage, {
          class: "container",
          "data-v-inspector": "app.vue:6:7"
        }, null, _parent, _scopeId))
      } else {
        return [
          _createVNode(_component_TheHeader, { "data-v-inspector": "app.vue:5:7" }),
          _createVNode(_component_NuxtPage, {
            class: "container",
            "data-v-inspector": "app.vue:6:7"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent));
  _push(`</div><!--]-->`)
}




const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = (0,__vite_ssr_import_7__.useSSRContext)()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};

__vite_ssr_exports__.default = /*#__PURE__*/(0,__vite_ssr_import_8__.default)(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/media/dd/Data/Projects/dionmaicon.github.io/app.vue"]])

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsd0ZBR2dCLHFDQUFpQixTQUFhO09BSDlDLDZDQU1pQjtXQU5qQjtRQUFBO1FBQUE7YUFLZ0IsNkNBQWlCO1VBQUMsa0JBQWdCOzs7O2NBRDVDO1VBQ0EsYUFBNEQ7c0JBQTVDLG9CQUFXO1lBQUMsa0JBQWdCOzs7OztJQUxsRDs7RUFBQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYXBwLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gVXBkYXRlIGNvbnRlbnQ6IDIgLS0tPlxuICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJhcHAudnVlOjM6M1wiPlxuICAgIDxOdXh0TGF5b3V0IGRhdGEtdi1pbnNwZWN0b3I9XCJhcHAudnVlOjQ6NVwiPlxuICAgICAgPFRoZUhlYWRlciBkYXRhLXYtaW5zcGVjdG9yPVwiYXBwLnZ1ZTo1OjdcIj48L1RoZUhlYWRlcj5cbiAgICAgIDxOdXh0UGFnZSBjbGFzcz1cImNvbnRhaW5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJhcHAudnVlOjY6N1wiLz5cbiAgICA8L051eHRMYXlvdXQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjwvc3R5bGU+Il0sImZpbGUiOiIvYXBwLnZ1ZSJ9
