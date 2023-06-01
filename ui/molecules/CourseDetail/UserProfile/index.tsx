import { IMAGES_URL } from "@constants";
import { Avatar, Space, Row, Typography, Col } from "antd";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "ui";

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
  discordFollower: number;
};
const UserProfile = ({ avatarLink, name, discordFollower }: Props) => {
  return (
    <Container>
      <Space>
        <Avatar
          src={<Image alt="author" height={48} width={48} src={avatarLink} />}
        />

        <Space direction="vertical">
          <Typography.Title level={5}>{name}</Typography.Title>

          <Space>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <img
                alt="logo"
                src={IMAGES_URL.DISCORD_CIRCLE}
                width={32}
                height={32}
              />
              <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
                {discordFollower}
              </span>
            </div>
          </Space>
        </Space>

        <Button> Join Chat</Button>
      </Space>
    </Container>
  );
};

export default UserProfile;
