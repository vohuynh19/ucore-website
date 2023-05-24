type Course = {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  author: User;
  avgRating: number;
  categories: CourseCategory[];

  // New Add
  lastUpdate: string;
  price: string;
  difficultLevel: string;
  numberOfStudent: number;
  aboutCourse: string;
  whatWillLearn: string;
  courseVideo: CourseVideo[];

  materialsIncluded: string;
  requirements: string;
  targetedAudience: string;
};
