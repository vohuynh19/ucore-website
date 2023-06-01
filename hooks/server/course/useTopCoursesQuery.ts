import { useQuery } from "@tanstack/react-query";
import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";

const useTopCoursesQuery = () => {
  const queryData = useQuery<Course[], ApiError>(
    REACT_QUERY_KEYS.GET_TOP_COURSE,
    API_SERVICES.COURSE.getCourses
  );
  return queryData;
};

export default useTopCoursesQuery;
