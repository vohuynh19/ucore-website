import CourseService from "./course";
import BlogService from "./blog";
import StatisticService from "./statistic";
import InstructorService from "./instructor";
import AuthService from "./auth";
import UserService from "./user";
import QuestionService from "./question";
import ImageService from "./image";

const API_SERVICES = {
  COURSE: CourseService,
  BLOG: BlogService,
  STATISTIC: StatisticService,
  INSTRUCTOR: InstructorService,
  AUTH: AuthService,
  USER: UserService,
  QUESTION: QuestionService,
  IMAGE: ImageService,
};

export default API_SERVICES;
