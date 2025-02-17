// /pages/index.vue
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/ImageLoader.vue", {"importedNames":["default"]});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/ThemeButton.vue", {"importedNames":["default"]});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue", {"importedNames":["withAsyncContext","defineComponent"]});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt-graphql-request/dist/utils.mjs", {"importedNames":["gql"]});

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js", {"importedNames":["useNuxtApp","useRuntimeConfig"]});
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue", {"importedNames":["ref","computed"]});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/utils/PostMapper.ts", {"importedNames":["default"]});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs", {"importedNames":["useSeoMeta","useHead"]});const __vite_ssr_import_8__ = await __vite_ssr_import__("vue", {"importedNames":["resolveComponent","mergeProps"]});const __vite_ssr_import_9__ = await __vite_ssr_import__("vue/server-renderer", {"importedNames":["ssrRenderComponent","ssrRenderAttrs","ssrInterpolate","ssrRenderList"]});const __vite_ssr_import_10__ = await __vite_ssr_import__("vue", {"importedNames":["useSSRContext"]});const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper", {"importedNames":["default"]});
const _sfc_main = /* @__PURE__ */ (0,__vite_ssr_import_2__.defineComponent)({
  __name: "index",
  async setup(__props, { expose: __expose }) {
    __expose();
    let __temp, __restore;
    const { $graphql } = (0,__vite_ssr_import_4__.useNuxtApp)();
    const runtimeConfig = (0,__vite_ssr_import_4__.useRuntimeConfig)();
    const query = __vite_ssr_import_3__.gql`
    query allPosts {
        dmposts {
            nodes {
                id
                title
                date
                slug
                content
                excerpt
            }
        }
    }
`;
    const response = ([__temp, __restore] = (0,__vite_ssr_import_2__.withAsyncContext)(() => $graphql.default.request(query)), __temp = await __temp, __restore(), __temp);
    const postsAsRef = (0,__vite_ssr_import_5__.ref)(
      response.dmposts.nodes || []
    );
    const posts = (0,__vite_ssr_import_5__.computed)(
      () => (postsAsRef.value || []).map((post) => __vite_ssr_import_6__.default.toDomain(post))
    );
    let url = "https://dionmaicon.github.io/";
    if (false) {
      url = (void 0).location.href;
    };
    (0,__vite_ssr_import_7__.useSeoMeta)({
      title: "Dion's Blog",
      description: "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
      ogTitle: "Dion's  Blog",
      ogDescription: "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
      ogImage: `/images/main.jpg`,
      ogUrl: url,
      twitterTitle: "Dion's Blog",
      twitterDescription: "Tech Solutions, Philosophy, Cryptos, Libertarianism and other things.",
      twitterImage: "/images/main.jpg",
      twitterCard: "summary"
    });
    (0,__vite_ssr_import_7__.useHead)({
      htmlAttrs: {
        lang: "en"
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico"
        }
      ]
    });
    const __returned__ = { $graphql, runtimeConfig, query, response, postsAsRef, posts, get url() {
      return url;
    }, set url(v) {
      url = v;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ImageLoader = __vite_ssr_import_0__.default;
  const _component_ThemeButton = __vite_ssr_import_1__.default;
  _push(`<div${(0,__vite_ssr_import_9__.ssrRenderAttrs)((0,__vite_ssr_import_8__.mergeProps)({ "data-v-inspector": "pages/index.vue:2:5" }, _attrs))}><div class="text-center" data-v-inspector="pages/index.vue:3:9">`);
  _push((0,__vite_ssr_import_9__.ssrRenderComponent)(_component_ImageLoader, {
    src: "images/logo.png",
    alt: "Logo",
    width: "32",
    "data-v-inspector": "pages/index.vue:4:13"
  }, null, _parent));
  _push(`</div><div class="grid gap-4 grid-cols-1 lg:grid-cols-2 p-4" data-v-inspector="pages/index.vue:6:9"><!--[-->`);
  (0,__vite_ssr_import_9__.ssrRenderList)($setup.posts, (post) => {
    _push(`<div data-v-inspector="pages/index.vue:7:13"><div class="shadow rounded-md p-4 min-h-350" data-v-inspector="pages/index.vue:8:17"><h2 class="font-bold text-lg my-2" data-v-inspector="pages/index.vue:9:21">${(0,__vite_ssr_import_9__.ssrInterpolate)(post.title)}</h2><div class="text-left" data-v-inspector="pages/index.vue:11:21">${post.excerpt ?? ""}</div><div class="text-right my-4" data-v-inspector="pages/index.vue:13:21">`);
    _push((0,__vite_ssr_import_9__.ssrRenderComponent)(_component_ThemeButton, {
      path: `/posts/${post.slug}`,
      prepend: false,
      icon: "chevron-right",
      text: "Read post",
      "data-v-inspector": "pages/index.vue:14:25"
    }, null, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = (0,__vite_ssr_import_10__.useSSRContext)();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ (0,__vite_ssr_import_11__.default)(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/media/dd/Data/Projects/dionmaicon.github.io/pages/index.vue"]]);

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQTs7O0FBNEJBOzs7Ozs7Ozs7OztBQUNBLFVBQU0sRUFBRSxTQUFTLE9BQUksa0NBQVc7QUFFaEMsVUFBTSxtQkFBZ0Isd0NBQWlCO0FBTXZDLFVBQU0sUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZWQsVUFBTSxZQUFXLHVFQUFNLFNBQVMsUUFBUSxRQUF5QixLQUFLO0FBRXRFLFVBQU0sZ0JBQWE7QUFBQSxNQUNkLFNBQVMsUUFBUSxTQUFTLENBQUM7QUFBQSxJQUNoQztBQUVBLFVBQU0sV0FBUTtBQUFBLE1BQVMsT0FDbEIsV0FBVyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw4QkFBVyxTQUFTLElBQUksQ0FBQztBQUFBLElBQ3BFO0FBR0EsUUFBSSxNQUFNO0FBRVYsUUFBSSxPQUFvQjtBQUNwQixZQUFNLFNBQU8sU0FBUztBQUFBLElBQzFCO0FBRUEseUNBQVc7QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGFBQ0k7QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGVBQ0k7QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLG9CQUNJO0FBQUEsTUFDSixjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsSUFDakIsQ0FBQztBQUVELHNDQUFRO0FBQUEsTUFDSixXQUFXO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDVjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0Y7QUFBQSxVQUNJLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNWO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBaEdELCtGQUNTLG9CQUFpQixzQkFBcUIsR0FEL0M7QUFBQTtBQUFBLElBR3lCLEtBQUk7QUFBQSxJQUFrQixLQUFJO0FBQUEsSUFBTyxPQUFNO0FBQUEsSUFBSyxvQkFBaUI7QUFBQTtBQUh0RjtBQUFBLDBDQU1nQyxjQU5oQyxDQU13QixTQUFJO0FBTjVCLG1RQVFrRyxLQUFLLEtBQUsseUVBRXpELEtBQUssV0FBTztBQVYvRDtBQUFBLE1BYzZCLE1BQUksVUFBWSxLQUFLLElBQUk7QUFBQSxNQUN6QixTQUFTO0FBQUEsTUFDVixNQUFLO0FBQUEsTUFDTCxNQUFLO0FBQUEsTUFBWSxvQkFBaUI7QUFBQTtBQWpCOUQ7QUFBQTtBQUFBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbmRleC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL2luZGV4LnZ1ZToyOjVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL2luZGV4LnZ1ZTozOjlcIj5cbiAgICAgICAgICAgIDxJbWFnZUxvYWRlciBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9XCIzMlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9pbmRleC52dWU6NDoxM1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBnYXAtNCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBwLTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvaW5kZXgudnVlOjY6OVwiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cInBvc3QgaW4gcG9zdHNcIiA6a2V5PVwicG9zdC5pZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9pbmRleC52dWU6NzoxM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3cgcm91bmRlZC1tZCBwLTQgbWluLWgtMzUwXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL2luZGV4LnZ1ZTo4OjE3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LWxnIG15LTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvaW5kZXgudnVlOjk6MjFcIj57eyBwb3N0LnRpdGxlIH19PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZWZ0XCIgdi1odG1sPVwicG9zdC5leGNlcnB0XCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL2luZGV4LnZ1ZToxMToyMVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IG15LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvaW5kZXgudnVlOjEzOjIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGF0aD1cImAvcG9zdHMvJHtwb3N0LnNsdWd9YFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnByZXBlbmQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJSZWFkIHBvc3RcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvaW5kZXgudnVlOjE0OjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB0eXBlIHsgV1BQb3N0LCBHUVBvc3RzUmVzcG9uc2UgfSBmcm9tIFwifi90eXBlcy9JUG9zdFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIm51eHQtZ3JhcGhxbC1yZXF1ZXN0L3V0aWxzXCI7XG5jb25zdCB7ICRncmFwaHFsIH0gPSB1c2VOdXh0QXBwKCk7XG5cbmNvbnN0IHJ1bnRpbWVDb25maWcgPSB1c2VSdW50aW1lQ29uZmlnKCk7XG5cbmludGVyZmFjZSBSZXNwb25zZSB7XG4gICAgZGF0YTogV1BQb3N0W107XG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IGFsbFBvc3RzIHtcbiAgICAgICAgZG1wb3N0cyB7XG4gICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgICAgIGV4Y2VycHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IHJlc3BvbnNlID0gYXdhaXQgJGdyYXBocWwuZGVmYXVsdC5yZXF1ZXN0PEdRUG9zdHNSZXNwb25zZT4ocXVlcnkpO1xuXG5jb25zdCBwb3N0c0FzUmVmID0gcmVmPFdQUG9zdFtdPihcbiAgICAocmVzcG9uc2UuZG1wb3N0cy5ub2RlcyB8fCBbXSkgYXMgdW5rbm93biBhcyBXUFBvc3RbXSxcbik7XG5cbmNvbnN0IHBvc3RzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAocG9zdHNBc1JlZi52YWx1ZSB8fCBbXSkubWFwKChwb3N0KSA9PiBQb3N0TWFwcGVyLnRvRG9tYWluKHBvc3QpKSxcbik7XG4vLyBjb25zdCBwb3N0cyA9IFtdIGFzIHVua25vd24gYXMgV1BQb3N0W107XG5cbmxldCB1cmwgPSBcImh0dHBzOi8vZGlvbm1haWNvbi5naXRodWIuaW8vXCI7XG5cbmlmIChpbXBvcnQubWV0YS5jbGllbnQpIHtcbiAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbn1cblxudXNlU2VvTWV0YSh7XG4gICAgdGl0bGU6IFwiRGlvbidzIEJsb2dcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUZWNoIFNvbHV0aW9ucywgUGhpbG9zb3BoeSwgQ3J5cHRvcywgTGliZXJ0YXJpYW5pc20gYW5kIG90aGVyIHRoaW5ncy5cIixcbiAgICBvZ1RpdGxlOiBcIkRpb24ncyAgQmxvZ1wiLFxuICAgIG9nRGVzY3JpcHRpb246XG4gICAgICAgIFwiVGVjaCBTb2x1dGlvbnMsIFBoaWxvc29waHksIENyeXB0b3MsIExpYmVydGFyaWFuaXNtIGFuZCBvdGhlciB0aGluZ3MuXCIsXG4gICAgb2dJbWFnZTogYC9pbWFnZXMvbWFpbi5qcGdgLFxuICAgIG9nVXJsOiB1cmwsXG4gICAgdHdpdHRlclRpdGxlOiBcIkRpb24ncyBCbG9nXCIsXG4gICAgdHdpdHRlckRlc2NyaXB0aW9uOlxuICAgICAgICBcIlRlY2ggU29sdXRpb25zLCBQaGlsb3NvcGh5LCBDcnlwdG9zLCBMaWJlcnRhcmlhbmlzbSBhbmQgb3RoZXIgdGhpbmdzLlwiLFxuICAgIHR3aXR0ZXJJbWFnZTogXCIvaW1hZ2VzL21haW4uanBnXCIsXG4gICAgdHdpdHRlckNhcmQ6IFwic3VtbWFyeVwiLFxufSk7XG5cbnVzZUhlYWQoe1xuICAgIGh0bWxBdHRyczoge1xuICAgICAgICBsYW5nOiBcImVuXCIsXG4gICAgfSxcbiAgICBsaW5rOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbDogXCJpY29uXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgaHJlZjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAgICAgfSxcbiAgICBdLFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL3BhZ2VzL2luZGV4LnZ1ZSJ9
