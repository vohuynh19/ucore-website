type User = {
  id: string;
  name: string;
  avatar: string;
};

enum Role {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
  TEACHER = "TEACHER",
}

type SUser = {
  _id: string;
  uid: string;
  imageUri: string;
  role: Role;
  email: string;
};
