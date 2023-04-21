import { useQuery } from "react-query";
import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";

const useLatestBlog = () => {
  const queryData = useQuery<Blog[], ApiError>(
    REACT_QUERY_KEYS.GET_LATEST_BLOG,
    API_SERVICES.BLOG.getLatestBlog
  );
  return queryData;
};

export default useLatestBlog;
