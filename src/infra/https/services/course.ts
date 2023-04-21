import { mockCourses } from "../entities/course.mock";

const CourseService = {
  getCourses: (): Promise<Course[]> =>
    new Promise((resolve) => {
      resolve(mockCourses);
    }),
};

export default CourseService;
