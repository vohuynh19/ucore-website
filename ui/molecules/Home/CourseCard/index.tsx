import { PAGE_ROUTES } from "@constants";
import { Rate } from "antd";
import { useRouter } from "next/router";
import { Button } from "ui/atoms";

import { ActionContainer, StyledCard } from "./styled";

const CourseCard = (props: SCourse) => {
  const router = useRouter();
  return (
    <StyledCard
      cover={
        <img
          onClick={() => router.push(PAGE_ROUTES.COURSE_DETAIL("1"))}
          alt="cover"
          src={props.thumnail}
        />
      }
      actions={[
        <ActionContainer key={1}>
          <Button ghost>Enroll course</Button>
        </ActionContainer>,
      ]}
    >
      <Rate />

      <StyledCard.Meta title={props.name} description={props.description} />
    </StyledCard>
  );
};

export default CourseCard;
