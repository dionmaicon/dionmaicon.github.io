import type { Post } from "~/types/IPost";

export default class PostMetaHead {
    static prepareHead(post: Post) {
        if (process.client) {
            const replaceMetas = [
                {
                  hid: 'og:url',
                  name: 'og:url',
                  content: window.location.href
                },
                {
                  hid: 'robots',
                  name: 'robots',
                  content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
                }
              ];
            const newMeta = post.yoast_meta.filter(meta => meta.name !== 'og:url' && meta.name !== 'robots');

            replaceMetas.forEach((ele) => {
                newMeta.push({
                    hid: ele.hid || ele.name,
                    name: ele.name || ele.hid,
                    content: ele.content
                });
            });

            return newMeta;
        }
    }
}