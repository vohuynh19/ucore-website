import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/infra/https";

const useMyProfile = () => {
  return useQuery({
    ...queryKeys.user.getSelf(),
  });
};

export default useMyProfile;
