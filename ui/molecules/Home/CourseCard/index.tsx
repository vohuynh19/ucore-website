import { PAGE_ROUTES } from "@constants";
import { Rate } from "antd";
import { useRouter } from "next/router";
import { Button } from "ui/atoms";

import { ActionContainer, StyledCard } from "./styled";

const CourseCard = () => {
  const router = useRouter();
  return (
    <StyledCard
      cover={
        <img
          onClick={() => router.push(PAGE_ROUTES.COURSE_DETAIL)}
          alt="example"
          src="https://vicodemy.com/wp-content/uploads/2023/03/Huong-dan-lam-game-768x432.png"
        />
      }
      actions={[
        <ActionContainer key={1}>
          <Button ghost>Enroll course</Button>
        </ActionContainer>,
      ]}
    >
      <Rate />

      <StyledCard.Meta
        title="Unity Beginners – Hướng Dẫn Làm Game 2D Bắn Súng Top-Down"
        description="Hoang Hiep"
      />
    </StyledCard>
  );
};

export default CourseCard;
