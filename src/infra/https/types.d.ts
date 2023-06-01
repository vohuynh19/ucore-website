type PaginationType = {
  offset: string;
  limit: string;
  search?: string;
};

type CoursePagination = PaginationType & {
  search?: string;
  isPopular?: string;
};
