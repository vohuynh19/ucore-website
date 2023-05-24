import { Avatar, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .ant-avatar {
    width: 48px;
    height: 48px;
    img {
      width: 48px;
      height: 48px;
    }
    margin-right: 12px;
  }

  h5 {
    margin: 0;
    font-weight: 700 !important;
  }
`;

type Props = {
  avatarLink: string;
  name: string;
};
const UserProfile = ({ avatarLink, name }: Props) => {
  return (
    <Container>
      <Avatar
        src={<Image alt="author" height={48} width={48} src={avatarLink} />}
      />

      <Typography.Title level={5}>{name}</Typography.Title>
    </Container>
  );
};

export default UserProfile;
