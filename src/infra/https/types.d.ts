type PaginationType = {
  offset: string;
  limit: string;
};

type UserFilter = PaginationType & {
  search: string;
};
