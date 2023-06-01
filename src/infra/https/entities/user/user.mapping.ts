export const userMapping = (user: SUser): User => {
  return {
    id: user.uid,
    name: "TODO",
    avatar: user.imageUri,
  };
};

export const usersMapping = (users: SUser[]): User[] => {
  return users.map((user) => userMapping(user));
};
