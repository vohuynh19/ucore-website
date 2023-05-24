import CourseService from "./course";
import BlogService from "./blog";
import StatisticService from "./statistic";
import InstructorService from "./instructor";

const API_SERVICES = {
  COURSE: CourseService,
  BLOG: BlogService,
  STATISTIC: StatisticService,
  INSTRUCTOR: InstructorService,
};

export default API_SERVICES;
