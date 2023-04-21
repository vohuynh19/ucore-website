import { QueryClient } from "react-query";
import COURSE_KEYS from "./course";
import BLOG_KEYS from "./blog";

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
};
