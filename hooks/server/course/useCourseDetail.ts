import { useQuery } from "react-query";
import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";

const useCourseDetail = (params: { id: string }) => {
  const queryData = useQuery<Course, ApiError>(
    REACT_QUERY_KEYS.GET_COURSE_DETAIL(params.id),
    () => API_SERVICES.COURSE.getCoursesDetail(params.id)
  );
  return queryData;
};

export default useCourseDetail;
