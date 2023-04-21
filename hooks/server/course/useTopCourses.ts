import { useQuery } from "react-query";
import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";

const useTopCourses = () => {
  const queryData = useQuery<Course[], ApiError>(
    REACT_QUERY_KEYS.GET_TOP_COURSE,
    API_SERVICES.COURSE.getCourses
  );
  return queryData;
};

export default useTopCourses;
