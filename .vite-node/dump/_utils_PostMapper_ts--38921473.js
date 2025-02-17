// /utils/PostMapper.ts
class PostMapper {
  static toDomain(post) {
    return {
      id: post.id,
      slug: post.slug,
      date: post.date,
      tags: [],
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      seo: post.seo,
      featuredImage: post.featuredImage?.node?.sourceUrl
    };
  }
}

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, value: PostMapper });

//# sourceMappingSource=vite-node
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBRUEsTUFBcUIsV0FBVztBQUFBLEVBQzlCLE9BQU8sU0FBUyxNQUFjO0FBQzVCLFdBQU87QUFBQSxNQUNMLElBQUksS0FBSztBQUFBLE1BQ1QsTUFBTSxLQUFLO0FBQUEsTUFDWCxNQUFNLEtBQUs7QUFBQSxNQUNYLE1BQU0sQ0FBQztBQUFBLE1BQ1AsT0FBTyxLQUFLO0FBQUEsTUFDWixTQUFTLEtBQUs7QUFBQSxNQUNkLFNBQVMsS0FBSztBQUFBLE1BQ2QsS0FBSyxLQUFLO0FBQUEsTUFDVixlQUFlLEtBQUssZUFBZSxNQUFNO0FBQUEsSUFDM0M7QUFBQSxFQUNGO0FBQ0YiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlBvc3RNYXBwZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQb3N0LCBXUFBvc3QgfSBmcm9tIFwifi90eXBlcy9JUG9zdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0TWFwcGVyIHtcbiAgc3RhdGljIHRvRG9tYWluKHBvc3Q6IFdQUG9zdCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogcG9zdC5pZCxcbiAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcbiAgICAgIGRhdGU6IHBvc3QuZGF0ZSxcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgdGl0bGU6IHBvc3QudGl0bGUsXG4gICAgICBjb250ZW50OiBwb3N0LmNvbnRlbnQsXG4gICAgICBleGNlcnB0OiBwb3N0LmV4Y2VycHQsXG4gICAgICBzZW86IHBvc3Quc2VvLFxuICAgICAgZmVhdHVyZWRJbWFnZTogcG9zdC5mZWF0dXJlZEltYWdlPy5ub2RlPy5zb3VyY2VVcmwsXG4gICAgfSBhcyBQb3N0O1xuICB9XG59XG4iXSwiZmlsZSI6Ii91dGlscy9Qb3N0TWFwcGVyLnRzIn0=
