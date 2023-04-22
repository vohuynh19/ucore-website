const PAGE_ROUTES = {
  HOME: "/",
  COURSE_LIST: "/course-list",
  COURSE_DETAIL: (id: string) => `/course-detail/${id}`,
  INSTRUCTORS: "/instructors",
  BLOG: "/blog",
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  TERM_OF_USE: "/term-of-use",
  PRIVACY_POLICY: "/privacy-policy",
};

export default PAGE_ROUTES;
