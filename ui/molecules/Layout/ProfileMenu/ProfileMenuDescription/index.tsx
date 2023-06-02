import { PAGE_ROUTES } from "@constants";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "ui/atoms";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.purpleGradientBg};
  height: 360px;
  width: 240px;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 776px) {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 24px;
  }
`;

const ProfileMenuDescription = () => {
  return (
    <Container>
      <Typography.Title className="text-contrast" level={2}>
        Create a New Course
      </Typography.Title>
      <Typography.Paragraph className="text-contrast">
        Get started with topics, lessons and more
      </Typography.Paragraph>

      <Link href={PAGE_ROUTES.CREATE_COURSE}>
        <Button
          style={{
            borderRadius: "50%",
            height: 40,
            width: 40,
            justifyContent: "center",
          }}
          icon={<ArrowForwardIosIcon />}
        />
      </Link>
    </Container>
  );
};

export default ProfileMenuDescription;
