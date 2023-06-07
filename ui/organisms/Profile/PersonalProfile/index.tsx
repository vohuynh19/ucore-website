import { UserInformation } from "ui/molecules";
import { Container } from "./styled";
import { Typography } from "antd";

const PersonalProfile = () => {
  return (
    <Container>
      <Typography.Title level={3}>My Profile</Typography.Title>

      <UserInformation />
    </Container>
  );
};

export default PersonalProfile;
