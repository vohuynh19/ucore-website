type Course = {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  author: User;
  avgRating: number;
  categories: CourseCategory[];
};
