import CourseService from "./course";
import BlogService from "./blog";
import StatisticService from "./statistic";
import InstructorService from "./instructor";
import AuthService from "./auth";

const API_SERVICES = {
  COURSE: CourseService,
  BLOG: BlogService,
  STATISTIC: StatisticService,
  INSTRUCTOR: InstructorService,
  AUTH: AuthService,
};

export default API_SERVICES;
