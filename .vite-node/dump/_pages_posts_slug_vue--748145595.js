// /pages/posts/[slug].vue
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/ThemeButton.vue", {"importedNames":["default"]});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/ImageLoader.vue", {"importedNames":["default"]});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/client-only.js", {"importedNames":["default"]});const __vite_ssr_import_3__ = await __vite_ssr_import__("vue", {"importedNames":["createVNode"]});const __vite_ssr_import_4__ = await __vite_ssr_import__("vue", {"importedNames":["withAsyncContext","defineComponent"]});const __vite_ssr_import_5__ = await __vite_ssr_import__("/utils/PostMapper.ts", {"importedNames":["default"]});const __vite_ssr_import_6__ = await __vite_ssr_import__("highlight.js", {"importedNames":["default"]});const __vite_ssr_import_7__ = await __vite_ssr_import__("vue-router", {"importedNames":["useRoute"]});const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt-graphql-request/dist/utils.mjs", {"importedNames":["gql"]});const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js", {"importedNames":["useNuxtApp","useRuntimeConfig"]});const __vite_ssr_import_10__ = await __vite_ssr_import__("vue", {"importedNames":["ref","computed","onMounted"]});const __vite_ssr_import_11__ = await __vite_ssr_import__("/utils/PostMetaHead.ts", {"importedNames":["default"]});const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs", {"importedNames":["useSeoMeta","useHead"]});const __vite_ssr_import_13__ = await __vite_ssr_import__("vue", {"importedNames":["resolveComponent","withCtx","mergeProps"]});const __vite_ssr_import_14__ = await __vite_ssr_import__("vue/server-renderer", {"importedNames":["ssrRenderComponent","ssrRenderAttrs","ssrInterpolate"]});const __vite_ssr_import_15__ = await __vite_ssr_import__("vue", {"importedNames":["useSSRContext"]});const __vite_ssr_import_16__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper", {"importedNames":["default"]});
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










const _sfc_main = /* @__PURE__ */ (0,__vite_ssr_import_4__.defineComponent)({
  __name: "[slug]",
  async setup(__props, { expose: __expose }) {
    __expose();
    let __temp, __restore;
    const route = (0,__vite_ssr_import_7__.useRoute)();
    const { $graphql } = (0,__vite_ssr_import_9__.useNuxtApp)();
    const slug = route.params.slug;
    const runtimeConfig = (0,__vite_ssr_import_9__.useRuntimeConfig)();
    const query = __vite_ssr_import_8__.gql`
    query dmposts($slug: ID!) {
        dmpost(id: $slug, idType: SLUG) {
            title
            content
            date
            featuredImage {
                node {
                    id
                    sourceUrl
                }
            }
            seo {
                fullHead
                canonical
                title
                metaDesc
                focuskw
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphAuthor
                opengraphDescription
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                breadcrumbs {
                    url
                    text
                }
            }
        }
    }
`;
    const variables = {
      slug
    };
    const response = ([__temp, __restore] = (0,__vite_ssr_import_4__.withAsyncContext)(() => $graphql.default.request(
      query,
      variables
    )), __temp = await __temp, __restore(), __temp);
    const postAsRef = (0,__vite_ssr_import_10__.ref)(response.dmpost || {});
    const post = (0,__vite_ssr_import_10__.ref)(__vite_ssr_import_5__.default.toDomain(postAsRef.value));
    const meta = __vite_ssr_import_11__.default.prepareHead(post.value);
    const getDescription = (yoastMeta) => {
      return yoastMeta?.metaDesc;
    };
    const getOgUrl = () => {
      if (false) {
        return (void 0).location.href;
      };
      return `${runtimeConfig.public.appBase}/posts/${slug}`;
    };
    (0,__vite_ssr_import_12__.useSeoMeta)({
      description: getDescription(post.value.seo),
      ogTitle: post.value.title,
      ogDescription: getDescription(post.value.seo),
      ogImage: post.value.featuredImage,
      ogLocale: "en_US",
      twitterTitle: post.value.title,
      twitterDescription: getDescription(post.value.seo),
      twitterImage: post.value.featuredImage,
      twitterCard: post.value.featuredImage ? "summary_large_image" : "summary",
      ogUrl: getOgUrl()
    });
    const featuredImageWidth = (0,__vite_ssr_import_10__.computed)(() => {
      if (false) {
        return ((void 0).innerWidth > 768 ? 768 : (void 0).innerWidth * 90 / 100) + " px";
      };
      return "100%";
    });
    const formatDate = (date) => {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("en-US", options);
    };
    (0,__vite_ssr_import_12__.useHead)({
      title: `${post.value.title} - Dion's Blog`,
      meta,
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
    (0,__vite_ssr_import_10__.onMounted)(() => {
      if (false) {
        (void 0).scrollTo(0, 0);
        setTimeout(function() {
          (void 0).querySelectorAll("pre").forEach((block) => {
            __vite_ssr_import_6__.default.configure({ ignoreUnescapedHTML: true });
            __vite_ssr_import_6__.default.highlightElement(block);
          });
        }, 1e3);
      }
    });
    const __returned__ = { route, $graphql, slug, runtimeConfig, query, variables, response, postAsRef, post, meta, getDescription, getOgUrl, featuredImageWidth, formatDate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_theme_button = __vite_ssr_import_0__.default;
  const _component_ImageLoader = __vite_ssr_import_1__.default;
  const _component_client_only = __vite_ssr_import_2__.default;
  _push(`<div${(0,__vite_ssr_import_14__.ssrRenderAttrs)((0,__vite_ssr_import_13__.mergeProps)({ "data-v-inspector": "pages/posts/[slug].vue:2:5" }, _attrs))}>`);
  _push((0,__vite_ssr_import_14__.ssrRenderComponent)(_component_theme_button, {
    path: "/",
    icon: "chevron-left",
    text: "Back",
    "data-v-inspector": "pages/posts/[slug].vue:3:9"
  }, null, _parent));
  if (!$setup.post) {
    _push(`<div data-v-inspector="pages/posts/[slug].vue:4:9"><div class="flex justify-center items-center h-screen" data-v-inspector="pages/posts/[slug].vue:5:13"><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" data-v-inspector="pages/posts/[slug].vue:6:17"></div></div></div>`);
  } else {
    _push(`<!---->`);
  };
  if ($setup.post) {
    _push(`<div class="my-6" data-v-inspector="pages/posts/[slug].vue:11:9"><article class="p-6" data-v-inspector="pages/posts/[slug].vue:12:13"><header class="nuxt-content-container" data-v-inspector="pages/posts/[slug].vue:13:17"><h1 class="text-xl text-3xl text-center mb-6 nuxt-content-title" data-v-inspector="pages/posts/[slug].vue:14:21">${(0,__vite_ssr_import_14__.ssrInterpolate)($setup.post.title)}</h1></header><section class="nuxt-content-container my-6" data-v-inspector="pages/posts/[slug].vue:20:17">`);
    if ($setup.post.featuredImage) {
      _push(`<figure class="picture" data-v-inspector="pages/posts/[slug].vue:21:21">`);
      _push((0,__vite_ssr_import_14__.ssrRenderComponent)(_component_ImageLoader, {
        class: "mx-auto",
        src: $setup.post.featuredImage,
        width: $setup.featuredImageWidth,
        height: "350",
        alt: "featuredImage",
        "data-v-inspector": "pages/posts/[slug].vue:22:25"
      }, null, _parent));
      _push(`</figure>`);
    } else {
      _push(`<!---->`);
    };
    _push(`<p class="my-3 text-sm" data-v-inspector="pages/posts/[slug].vue:30:21"> Posted: ${(0,__vite_ssr_import_14__.ssrInterpolate)($setup.formatDate($setup.post.date))}</p></section>`);
    _push((0,__vite_ssr_import_14__.ssrRenderComponent)(_component_client_only, { "data-v-inspector": "pages/posts/[slug].vue:34:17" }, {
      
            /* STABLE */
    }, _parent));
    _push(`</article></div>`);
  } else {
    _push(`<!---->`);
  };
  _push((0,__vite_ssr_import_14__.ssrRenderComponent)(_component_theme_button, {
    path: "/",
    icon: "chevron-left",
    text: "Back",
    "data-v-inspector": "pages/posts/[slug].vue:42:9"
  }, null, _parent));
  _push(`</div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = (0,__vite_ssr_import_15__.useSSRContext)();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ (0,__vite_ssr_import_16__.default)(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/media/dd/Data/Projects/dionmaicon.github.io/pages/posts/[slug].vue"]]);

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssaUJBQWlCLEtBQUs7QUFBQSxVQUMvQixDQUFDO0FBQUEsUUFDTCxHQUFHLEdBQUk7QUFBQSxNQUNYO0FBQUEsSUFDSixDQUFDOzs7Ozs7Ozs7Ozs7QUF6TEQsaUdBQ1Msb0JBQWlCLDZCQUE0QixHQUR0RDtBQUFBO0FBQUEsSUFFc0IsTUFBSztBQUFBLElBQUksTUFBSztBQUFBLElBQWUsTUFBSztBQUFBLElBQU8sb0JBQWlCO0FBQUE7T0FDNUQsYUFBSTtBQUh4QjtBQUFBO0FBQUE7QUFBQTtNQVVtQixhQUFJO0FBVnZCLHFZQWdCMkIsWUFBSyxLQUFLO1FBSUgsWUFBSyxlQUFhO0FBcEJwRDtBQUFBO0FBQUEsUUFzQjRCLE9BQU07QUFBQSxRQUNMLEtBQUssWUFBSztBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1IsUUFBTztBQUFBLFFBQ1AsS0FBSTtBQUFBLFFBQWdCLG9CQUFpQjtBQUFBO0FBMUJqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdJQThCbUMsa0JBQVcsWUFBSyxJQUFJO0FBOUJ2RCxrRkFpQzZCLG9CQUFpQiwrQkFBOEI7QUFBQTtNQWpDNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXlDc0IsTUFBSztBQUFBLElBQUksTUFBSztBQUFBLElBQWUsTUFBSztBQUFBLElBQU8sb0JBQWlCO0FBQUE7QUF6Q2hGIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJbc2x1Z10udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9wb3N0cy9bc2x1Z10udnVlOjI6NVwiPlxuICAgICAgICA8dGhlbWUtYnV0dG9uIHBhdGg9XCIvXCIgaWNvbj1cImNoZXZyb24tbGVmdFwiIHRleHQ9XCJCYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL3Bvc3RzL1tzbHVnXS52dWU6Mzo5XCIgLz5cbiAgICAgICAgPGRpdiB2LWlmPVwiIXBvc3RcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvcG9zdHMvW3NsdWddLnZ1ZTo0OjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlblwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9wb3N0cy9bc2x1Z10udnVlOjU6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTMyIHctMzIgYm9yZGVyLXQtMiBib3JkZXItYi0yIGJvcmRlci1ncmF5LTkwMFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9wb3N0cy9bc2x1Z10udnVlOjY6MTdcIlxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwicG9zdFwiIGNsYXNzPVwibXktNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9wb3N0cy9bc2x1Z10udnVlOjExOjlcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicC02XCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL3Bvc3RzL1tzbHVnXS52dWU6MTI6MTNcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwibnV4dC1jb250ZW50LWNvbnRhaW5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9wb3N0cy9bc2x1Z10udnVlOjEzOjE3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXhsIHRleHQtM3hsIHRleHQtY2VudGVyIG1iLTYgbnV4dC1jb250ZW50LXRpdGxlXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL3Bvc3RzL1tzbHVnXS52dWU6MTQ6MjFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3N0LnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJudXh0LWNvbnRlbnQtY29udGFpbmVyIG15LTZcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvcG9zdHMvW3NsdWddLnZ1ZToyMDoxN1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHYtaWY9XCJwb3N0LmZlYXR1cmVkSW1hZ2VcIiBjbGFzcz1cInBpY3R1cmVcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvcG9zdHMvW3NsdWddLnZ1ZToyMToyMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlTG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJteC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicG9zdC5mZWF0dXJlZEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCJmZWF0dXJlZEltYWdlV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZmVhdHVyZWRJbWFnZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9wb3N0cy9bc2x1Z10udnVlOjIyOjI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm15LTMgdGV4dC1zbVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9wb3N0cy9bc2x1Z10udnVlOjMwOjIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWQ6IHt7IGZvcm1hdERhdGUocG9zdC5kYXRlKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxjbGllbnQtb25seSBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvcG9zdHMvW3NsdWddLnZ1ZTozNDoxN1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJudXh0LWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwicG9zdC5jb250ZW50XCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL3Bvc3RzL1tzbHVnXS52dWU6MzU6MjFcIlxuICAgICAgICAgICAgICAgICAgICA+PC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvY2xpZW50LW9ubHk+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGhlbWUtYnV0dG9uIHBhdGg9XCIvXCIgaWNvbj1cImNoZXZyb24tbGVmdFwiIHRleHQ9XCJCYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL3Bvc3RzL1tzbHVnXS52dWU6NDI6OVwiIC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IFBvc3RNYXBwZXIgZnJvbSBcIkAvdXRpbHMvUG9zdE1hcHBlclwiO1xuaW1wb3J0IHR5cGUgeyBQb3N0LCBXUFBvc3QsIEdRU2luZ2xlUG9zdFJlc3BvbnNlIH0gZnJvbSBcIn4vdHlwZXMvSVBvc3RcIjtcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJudXh0LWdyYXBocWwtcmVxdWVzdC91dGlsc1wiO1xuY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuY29uc3QgeyAkZ3JhcGhxbCB9ID0gdXNlTnV4dEFwcCgpO1xuY29uc3Qgc2x1ZyA9IHJvdXRlLnBhcmFtcy5zbHVnO1xuY29uc3QgcnVudGltZUNvbmZpZyA9IHVzZVJ1bnRpbWVDb25maWcoKTtcblxuaW50ZXJmYWNlIFJlc3BvbnNlIHtcbiAgICBkYXRhOiBXUFBvc3RbXTtcbn1cblxuY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkgZG1wb3N0cygkc2x1ZzogSUQhKSB7XG4gICAgICAgIGRtcG9zdChpZDogJHNsdWcsIGlkVHlwZTogU0xVRykge1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZW8ge1xuICAgICAgICAgICAgICAgIGZ1bGxIZWFkXG4gICAgICAgICAgICAgICAgY2Fub25pY2FsXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBtZXRhRGVzY1xuICAgICAgICAgICAgICAgIGZvY3Vza3dcbiAgICAgICAgICAgICAgICBtZXRhUm9ib3RzTm9pbmRleFxuICAgICAgICAgICAgICAgIG1ldGFSb2JvdHNOb2ZvbGxvd1xuICAgICAgICAgICAgICAgIG9wZW5ncmFwaEF1dGhvclxuICAgICAgICAgICAgICAgIG9wZW5ncmFwaERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgb3BlbmdyYXBoVGl0bGVcbiAgICAgICAgICAgICAgICBvcGVuZ3JhcGhEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIG9wZW5ncmFwaEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHR3aXR0ZXJUaXRsZVxuICAgICAgICAgICAgICAgIHR3aXR0ZXJEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHR3aXR0ZXJJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVXJsXG4gICAgICAgICAgICAgICAgICAgIHNyY1NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcbmNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBzbHVnLFxufTtcbmNvbnN0IHJlc3BvbnNlID0gYXdhaXQgJGdyYXBocWwuZGVmYXVsdC5yZXF1ZXN0PEdRU2luZ2xlUG9zdFJlc3BvbnNlPihcbiAgICBxdWVyeSxcbiAgICB2YXJpYWJsZXMsXG4pO1xuXG5jb25zdCBwb3N0QXNSZWYgPSByZWY8V1BQb3N0PigocmVzcG9uc2UuZG1wb3N0IHx8IHt9KSBhcyB1bmtub3duIGFzIFdQUG9zdCk7XG5cbmNvbnN0IHBvc3QgPSByZWYoUG9zdE1hcHBlci50b0RvbWFpbihwb3N0QXNSZWYudmFsdWUpKTtcblxuY29uc3QgbWV0YSA9IFBvc3RNZXRhSGVhZC5wcmVwYXJlSGVhZChwb3N0LnZhbHVlKTtcblxuY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoeW9hc3RNZXRhOiBQb3N0W1wic2VvXCJdKSA9PiB7XG4gICAgcmV0dXJuIHlvYXN0TWV0YT8ubWV0YURlc2M7XG59O1xuY29uc3QgZ2V0T2dVcmwgPSAoKSA9PiB7XG4gICAgaWYgKGltcG9ydC5tZXRhLmNsaWVudCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIHJldHVybiBgJHtydW50aW1lQ29uZmlnLnB1YmxpYy5hcHBCYXNlfS9wb3N0cy8ke3NsdWd9YDtcbn07XG5cbnVzZVNlb01ldGEoe1xuICAgIGRlc2NyaXB0aW9uOiBnZXREZXNjcmlwdGlvbihwb3N0LnZhbHVlLnNlbyksXG4gICAgb2dUaXRsZTogcG9zdC52YWx1ZS50aXRsZSxcbiAgICBvZ0Rlc2NyaXB0aW9uOiBnZXREZXNjcmlwdGlvbihwb3N0LnZhbHVlLnNlbyksXG4gICAgb2dJbWFnZTogcG9zdC52YWx1ZS5mZWF0dXJlZEltYWdlLFxuICAgIG9nTG9jYWxlOiBcImVuX1VTXCIsXG4gICAgdHdpdHRlclRpdGxlOiBwb3N0LnZhbHVlLnRpdGxlLFxuICAgIHR3aXR0ZXJEZXNjcmlwdGlvbjogZ2V0RGVzY3JpcHRpb24ocG9zdC52YWx1ZS5zZW8pLFxuICAgIHR3aXR0ZXJJbWFnZTogcG9zdC52YWx1ZS5mZWF0dXJlZEltYWdlLFxuICAgIHR3aXR0ZXJDYXJkOiBwb3N0LnZhbHVlLmZlYXR1cmVkSW1hZ2UgPyBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiA6IFwic3VtbWFyeVwiLFxuICAgIG9nVXJsOiBnZXRPZ1VybCgpLFxufSk7XG5cbmNvbnN0IGZlYXR1cmVkSW1hZ2VXaWR0aCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAoaW1wb3J0Lm1ldGEuY2xpZW50KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAod2luZG93LmlubmVyV2lkdGggPiA3NjggPyA3NjggOiAod2luZG93LmlubmVyV2lkdGggKiA5MCkgLyAxMDApICtcbiAgICAgICAgICAgIFwiIHB4XCJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiMTAwJVwiO1xufSk7XG5cbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9O1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn07XG5cbnVzZUhlYWQoe1xuICAgIHRpdGxlOiBgJHtwb3N0LnZhbHVlLnRpdGxlfSAtIERpb24ncyBCbG9nYCxcbiAgICBtZXRhLFxuICAgIGh0bWxBdHRyczoge1xuICAgICAgICBsYW5nOiBcImVuXCIsXG4gICAgfSxcbiAgICBsaW5rOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbDogXCJpY29uXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgaHJlZjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAgICAgfSxcbiAgICBdLFxufSk7XG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gICAgaWYgKGltcG9ydC5tZXRhLmNsaWVudCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZVwiKS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIGhsanMuY29uZmlndXJlKHsgaWdub3JlVW5lc2NhcGVkSFRNTDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBobGpzLmhpZ2hsaWdodEVsZW1lbnQoYmxvY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9wYWdlcy9wb3N0cy9bc2x1Z10udnVlIn0=
