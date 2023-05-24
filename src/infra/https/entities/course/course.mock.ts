import { userMock } from "../user/user.mock";
import { mockCourseVideos } from "../courseVideo/courseVideo.mock";
import { mockCourseCategories } from "./course-category.mock";

export const mockCourse: Course = {
  id: "1",
  name: "Course Name 1",
  description: "",
  thumbnailUrl: "https://vicodemy.com/wp-content/uploads/2023/03/Huong-dan-lam-game-768x432.png",
  author: userMock[0],
  avgRating: 4,
  categories: mockCourseCategories,
  lastUpdate: "Yesterday",
  price: "Free",
  numberOfStudent: 6,
  difficultLevel: "Easy",
  aboutCourse: "Courses Description Courses Description Courses Description 1",
  whatWillLearn: "CPPDD DDS",
  courseVideo: mockCourseVideos,
  materialsIncluded: "Test",
  requirements: "Test",
  targetedAudience: "Test"
};

export const mockCourses: Course[] = [
  
];
