import { Button, Rate } from "antd";

import { ActionContainer, StyledCard } from "./styled";

const CourseCard = () => {
  return (
    <StyledCard
      cover={
        <img
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
