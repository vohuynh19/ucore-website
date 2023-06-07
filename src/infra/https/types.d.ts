type PaginationType<T = unknown> = {
  offset: number;
  limit: number;
  search?: string;
  isPopular?: boolean;
} & Partial<T>;

type CoursePagination = PaginationType & {
  search?: string;
  isPopular?: string;
};

type CreateCoursePayload = {
  name: string;
  thumnail: string;
  categoryId: string;
  description: string;
  teacherName: string;
  achivementDes: string;
  prerequisiteDes: string;
  price: number;
  sections?: SectionPayload[];
};
type DeleteCoursePayload = {
  courseIds: string[];
};

type CourseCategoryPayload = {
  name: string;
  id?: string;
};

type SectionPayload = {
  sectionName: string;
  no: number;
  videos?: Video[];
};

type VideoPayload = {
  name: string;
  no: number;
  youtubeLink: string;
  isTrivial: boolean;
  duration: string;
};

type PaginationResponse<T> = {
  total: number;
  data: T[];
};
