type User = {
  id: string;
  name: string;
  avatar: string;
  role: UserRole;

  displayName: string;
  profileStory: string;
  profileTitles: string;
  profileYoutubeLink: string;
  profileDiscordLink: string;
  profileYoutubeCount: string;
  profileSubscriber: string;
  profileTotalCourse: string;
};

type UserRole = "ADMIN" | "EDITOR" | "USER" | "TEACHER";

type SUser = {
  _id: string;
  uid: string;
  imageUri: string;
  role: UserRole;
  email: string;

  // profile info
  displayName: string;
  profileStory: string;
  profileTitles: string;
  profileYoutubeLink: string;
  profileDiscordLink: string;
  profileYoutubeCount: string;
  profileSubscriber: string;
  profileTotalCourse: string;
};
