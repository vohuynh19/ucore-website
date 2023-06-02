import { UserInformation, UserProfileHeader } from "ui/molecules";
import { Container } from "./styled";

const PersonalProfile = () => {
  return (
    <Container>
      <UserProfileHeader />
      <UserInformation />
    </Container>
  );
};

export default PersonalProfile;
