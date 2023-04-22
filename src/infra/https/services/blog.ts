import { mockBlogs } from "../entities/blog/blog.mock";

const BlogService = {
  getLatestBlog: (): Promise<Blog[]> =>
    new Promise((resolve) => {
      resolve(mockBlogs);
    }),
};

export default BlogService;
