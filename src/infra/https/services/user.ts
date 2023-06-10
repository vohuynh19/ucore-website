import APIS from "../apis";
import axiosInstance from "../axios";

import { usersMapping, userMapping } from "../entities/user/user.mapping";

const UserService = {
  getUser: async () => {
    return axiosInstance
      .get<SUser>(APIS.user.USER)
      .then((res) => userMapping(res.data));
  },
  getUserDetail: async (id: string) => {
    return axiosInstance
      .get<SUser>(APIS.user.USER_DETAIL(id))
      .then((res) => userMapping(res.data));
  },
  getUserList: async (filter: PaginationType) =>
    axiosInstance
      .get<PaginationResponse<SUser>>(APIS.user.FIND_USERS, {
        params: filter,
      })
      .then((res) => ({
        total: res.data.total,
        data: usersMapping(res.data.data || []),
      })),
  getInstructorList: async (filter: PaginationType) =>
    axiosInstance
      .get<PaginationResponse<SUser>>(APIS.user.INSTRUCTORS, {
        params: filter,
      })
      .then((res) => ({
        total: res.data.total,
        data: usersMapping(res.data.data || []),
      })),
};

export default UserService;
