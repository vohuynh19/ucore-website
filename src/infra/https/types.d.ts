type PaginationType = {
  offset: string;
  limit: string;
  search?: string;
};

type CoursePagination = PaginationType & {
  search?: string;
  isPopular?: string;
};

type CreateCoursePayload = {
  name: string;
  thumnail: string;
  categoryId: string;
  description: string;
  achivementDes: string;
  prerequisiteDes: string;
  price: number;
  sections?: SectionPayload[];
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
