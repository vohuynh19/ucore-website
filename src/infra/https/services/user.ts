import { AxiosResponse } from "axios";

import APIS from "../apis";
import axiosInstance from "../axios";

import { usersMapping, userMapping } from "../entities/user/user.mapping";

const UserService = {
  getUser: async () => {
    return axiosInstance
      .get<SUser>(APIS.USER)
      .then((res) => userMapping(res.data));
  },
  getUserDetail: async (id: string) => {
    return axiosInstance
      .get<SUser>(APIS.USER_DETAIL(id))
      .then((res) => userMapping(res.data));
  },
  getUserList: async (filter: UserFilter) => {
    return axiosInstance
      .get<SUser, AxiosResponse<SUser[]>, UserFilter>(APIS.FIND_USERS, {
        data: filter,
      })
      .then((res) => usersMapping(res.data));
  },
};

export default UserService;
