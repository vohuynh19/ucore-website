import { Container } from "styles";
import ProfileMenuDescription from "./ProfileMenuDescription";
import ProfileMenuSectionList from "./ProfileMenuSectionList";

const ProfileMenu = () => {
  return (
    <Container>
      <ProfileMenuDescription />
      <ProfileMenuDescription />
    </Container>
  );
};

export default ProfileMenu;
export { ProfileMenuDescription, ProfileMenuSectionList };
