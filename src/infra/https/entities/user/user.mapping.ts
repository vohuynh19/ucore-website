export const userMapping = (user: SUser): User => {
  return {
    id: user._id,
    name: user.email,
    avatar: user.imageUri,
    role: user.role,
  };
};

export const usersMapping = (users: SUser[]): User[] => {
  return users.map((user) => userMapping(user));
};
