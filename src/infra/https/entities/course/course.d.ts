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
  courseTopic: CourseTopic[];

  materialsIncluded: string;
  requirements: string;
  targetedAudience: string;
};

type SCourse = {
  teacherId: string;
  name: string;
  description: string;
  achievementDes: string;
  prerequisiteDes: string;
  rating: Array<number>;
  price: number;
  totalDuration: number;
  numberEnrolled: number;
  isPublish: boolean;
};
