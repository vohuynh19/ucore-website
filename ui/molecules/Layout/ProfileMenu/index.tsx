import { Container } from "styles";
import ProfileMenuDescription from "./ProfileMenuDescription";
import ProfileMenuList from "./ProfileMenuList";

const ProfileMenu = () => {
  return (
    <Container>
      <ProfileMenuDescription />
      <ProfileMenuList />
    </Container>
  );
};

export default ProfileMenu;
export { ProfileMenuDescription, ProfileMenuList };
