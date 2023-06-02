import { useMutation, useQuery } from "@tanstack/react-query";
import { userMutationKeys, userQueryKeys } from "src/infra/https/keys";

export const useMyProfile = () => {
  return useQuery({
    ...userQueryKeys.getSelf(),
  });
};

export const useUserDetail = (id: string) => {
  return useQuery({
    ...userQueryKeys.detail(id),
  });
};

export const useUsers = (filter: PaginationType) => {
  return useQuery({
    ...userQueryKeys.list(filter),
  });
};

export const useRegisterInstructor = () => {
  return useMutation({ ...userMutationKeys.registerInstructor() });
};
