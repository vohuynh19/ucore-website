import { API_ENDPONTS } from "..";
import axiosInstance from "../axios";
import { mockCourses, mockCourse } from "../entities/course/course.mock";

type CourseCreateParams = {
  name: string;
  thumnail: string;
  categoryId: string;
  description: string;
  achivementDes: string;
  prerequisiteDes: string;
  price: number;
};

type CourseRateParams = {
  amount: string;
  courseId: string;
};

type EnrollCourse = {
  courseId: string;
};

const CourseService = {
  getCourses: (): Promise<Course[]> =>
    new Promise((resolve) => {
      resolve(mockCourses.filter((_, idx) => idx < 4));
    }),
  getCoursesDetail: (id: string): Promise<Course> =>
    new Promise((resolve) => {
      resolve(mockCourse);
    }),

  registerInstructor: () =>
    axiosInstance.post(API_ENDPONTS.course.REGISTER_INSTRUCTOR),
  getCoursePagination: (filter: CoursePagination) =>
    axiosInstance.get(API_ENDPONTS.course.COURSE, { data: filter }),
  createCourse: (params: CourseCreateParams) =>
    axiosInstance.post(API_ENDPONTS.course.COURSE, { ...params }),
  rateCourse: (params: CourseRateParams) =>
    axiosInstance.post(API_ENDPONTS.course.COURSE_RATE(params.courseId), {
      amount: params.amount,
    }),
  enrollCourse: (params: EnrollCourse) =>
    axiosInstance.post(API_ENDPONTS.course.ENROLL_COURSE(params.courseId)),
};

export default CourseService;
