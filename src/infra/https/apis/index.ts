import { COURSE_API } from "./course";
import { BLOG_API } from "./blog";
import { STATISTIC_API } from "./statistic";
import { INSTRUCTOR_API } from "./instructor";
import { AUTH_API } from "./auth";

const APIS = {
  ...COURSE_API,
  ...BLOG_API,
  ...STATISTIC_API,
  ...INSTRUCTOR_API,
  ...AUTH_API,
};

export default APIS;
