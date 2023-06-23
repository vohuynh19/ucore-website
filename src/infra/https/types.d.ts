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

type UserProfilePayload = {
  uid: string;
  email:string;
  imageUri: string;
  displayName: string;
  profileStory: string;
  profileTitles: string;
  profileYoutubeLink: string;
  profileYoutubeCount: string;
  profileSubscriber: string;
  profileTotalCourse: string;
};

type VideoPayload = {
  name: string;
  sectionId: string;
  courseId: string;
  no: number;
  youtubeLink: string;
  isTrivial: boolean;
  duration: number;
};
type DeleteVideoPayload = {
  videoIds: string[];
};

type SectionPayload = {
  courseId: string;
  no: number;
  sectionName: string;
};

type AnswerQuestionPayload = {
  channelId: string;
  questionId: string
  question: string;
  answer: string;
  discordUserId: string;
};

type PaginationResponse<T> = {
  total: number;
  data: T[];
};
