import { QueryClient } from "@tanstack/react-query";

import COURSE_KEYS from "./course";
import BLOG_KEYS from "./blog";
import STATISTIC_KEYS from "./statistic";
import INSTRUCTOR_KEYS from "./instructor";

export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const REACT_QUERY_KEYS = {
  ...COURSE_KEYS,
  ...BLOG_KEYS,
  ...STATISTIC_KEYS,
  ...INSTRUCTOR_KEYS,
};
