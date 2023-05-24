import { mockCourses, mockCourse } from "../entities/course/course.mock";

const CourseService = {
  getCourses: (): Promise<Course[]> =>
    new Promise((resolve) => {
      resolve(mockCourses.filter((_, idx) => idx < 4));
    }),

  getCoursesDetail: (id: string): Promise<Course> =>
    new Promise((resolve) => {
      resolve(mockCourse);
    }),
};

export default CourseService;
