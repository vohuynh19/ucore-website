import { Container } from "styles";
import ProfileMenuDescription from "./ProfileMenuDescription";
import ProfileMenuSectionList from "./ProfileMenuList";

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
