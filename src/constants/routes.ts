const PAGE_ROUTES = {
  HOME: "/",
  CREATE_COURSE: "/create-course",
  COURSE_LIST: "/course-list",
  COURSE_DETAIL: (id: string) => `/course-detail/${id}`,
  LESSON: (id: string) => `/lesson/${id}`,
  INSTRUCTORS: "/instructors",
  BLOG: "/blog",
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  TERM_OF_USE: "/term-of-use",
  PRIVACY_POLICY: "/privacy-policy",
  QUESTION: "/question",
  USER_PROFILE: (id: string) => `/profile/${id}`,
  PROFILE: {
    DASHBOARD: "/profile/dashboard",
    MY_PROFILE: "/profile",
    ENROLLED_COURSE: "/profile/enrolled-course",
    WISHLIST: "/profile/wishlist",
    REVIEWS: "/profile/review",
    ORDER_HISTORY: "/profile/order-history",
    QNA: "/profile/qna",
    SETTING: "/profile/setting",
  },
  INSTRUCTOR_DASHBOARD: {
    DASHBOARD: "/instructor-dashboard",
    COURSES: "/instructor-dashboard/course",
    LESSONS: "/instructor-dashboard/lesson",
  },
};

export default PAGE_ROUTES;
