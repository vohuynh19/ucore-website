import { mockBlogs } from "../entities/blog.mock";

const BlogService = {
  getLatestBlog: (): Promise<Blog[]> =>
    new Promise((resolve) => {
      resolve(mockBlogs);
    }),
};

export default BlogService;
