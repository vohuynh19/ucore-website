import { IMAGES_URL } from "@constants";
import { Avatar, Space, Row, Typography, Col } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button } from "ui";
import { UserOutlined } from "@ant-design/icons";

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
  const { t } = useTranslation("common");

  return (
    <Container>
      <Space>
        <Avatar size={48} icon={<UserOutlined />} src={avatarLink} />

        <Space direction="vertical">
          <Typography.Title level={5}>{name}</Typography.Title>
        </Space>

        <Button> {t("seeInDiscord")}</Button>
      </Space>
    </Container>
  );
};

export default UserProfile;
