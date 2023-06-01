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
  uid: string;
  imageUri: string;
  role: Role;
};
