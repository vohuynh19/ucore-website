export const blogMapping = (blog: SBlog): Blog => {
  return {
    id: blog._id,
    createdAt: blog._createdAt,
    updatedAt: blog._updatedAt,
    title: blog.title,
  };
};
