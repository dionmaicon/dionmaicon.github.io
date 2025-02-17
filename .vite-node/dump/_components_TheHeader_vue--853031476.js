// /components/TheHeader.vue
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js", {"importedNames":["default"]});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/ThemeSelector.vue", {"importedNames":["default"]});const __vite_ssr_import_2__ = await __vite_ssr_import__("vue", {"importedNames":["resolveComponent","withCtx","createTextVNode","mergeProps"]});const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer", {"importedNames":["ssrRenderComponent","ssrRenderStyle","ssrRenderAttrs"]});const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheHeader.vue?vue&type=style&index=0&lang.css");const __vite_ssr_import_5__ = await __vite_ssr_import__("vue", {"importedNames":["useSSRContext"]});const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper", {"importedNames":["default"]});
const _sfc_main = {};



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  const _component_theme_selector = __vite_ssr_import_1__.default;

  _push(`<header${
    (0,__vite_ssr_import_3__.ssrRenderAttrs)((0,__vite_ssr_import_2__.mergeProps)({
      className: "relative w-full p-6 h-85px mx-auto the-header",
      "data-v-inspector": "components/TheHeader.vue:2:5"
    }, _attrs))
  }><div class="w-full mx-auto flex justify-between container" data-v-inspector="components/TheHeader.vue:3:9"><h1 class="title" style="${
    (0,__vite_ssr_import_3__.ssrRenderStyle)({"display":"inline-block"})
  }" data-v-inspector="components/TheHeader.vue:4:13">`);
  _push((0,__vite_ssr_import_3__.ssrRenderComponent)(_component_NuxtLink, {
    to: "/",
    class: "no-underline",
    "data-v-inspector": "components/TheHeader.vue:5:17"
  }, {
    default: (0,__vite_ssr_import_2__.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Dion&#39;s Blog `)
      } else {
        return [
          (0,__vite_ssr_import_2__.createTextVNode)(" Dion's Blog ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent));
  _push(`</h1>`);
  _push((0,__vite_ssr_import_3__.ssrRenderComponent)(_component_theme_selector, {
    style: {"display":"inline-block"},
    "data-v-inspector": "components/TheHeader.vue:9:13"
  }, null, _parent));
  _push(`</div></header>`)
}




const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = (0,__vite_ssr_import_5__.useSSRContext)()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};

__vite_ssr_exports__.default = /*#__PURE__*/(0,__vite_ssr_import_6__.default)(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/media/dd/Data/Projects/dionmaicon.github.io/components/TheHeader.vue"]])

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQTs7Ozs7Ozs7OztPQUFBOzRDQUNzQjtNQUFnRCxvQkFBaUIsOEJBQThCO09BRHJIOztJQUFBLGtCQUc4Qiw2QkFBOEI7O0VBSDVEO09BSTRCLElBQUMseUNBQUc7SUFBQyxLQUFLLEVBQUM7SUFBZSxvQkFBaUI7O0lBSnZFO1dBQUE7UUFBQTs7O2NBQUE7Ozs7SUFBQTs7RUFBQTtFQUFBO09BUTRCLHVFQUE4QjtJQUFDLGtCQUFnQixPQUFDOztFQVI1RSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGhlSGVhZGVyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgcC02IGgtODVweCBteC1hdXRvIHRoZS1oZWFkZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UaGVIZWFkZXIudnVlOjI6NVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZTozOjlcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZTo0OjEzXCI+IFxuICAgICAgICAgICAgICAgIDxOdXh0TGluayB0bz1cIi9cIiBjbGFzcz1cIm5vLXVuZGVybGluZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RoZUhlYWRlci52dWU6NToxN1wiPiBcbiAgICAgICAgICAgICAgICAgICAgRGlvbidzIEJsb2cgICAgXG4gICAgICAgICAgICAgICAgPC9OdXh0TGluaz5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8dGhlbWUtc2VsZWN0b3Igc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZTo5OjEzXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCAnU291cmNlIFNhbnMgUHJvJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgICAgICAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbn1cblxuLnRoZS1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9jb21wb25lbnRzL1RoZUhlYWRlci52dWUifQ==
