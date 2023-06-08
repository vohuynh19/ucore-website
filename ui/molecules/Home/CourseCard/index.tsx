import { PAGE_ROUTES } from "@constants";
import { Rate, Typography } from "antd";
import { useRouter } from "next/router";
import { Button } from "ui/atoms";

import { ActionContainer, StyledCard } from "./styled";

const CourseCard = (props: SCourse) => {
  const router = useRouter();
  return (
    <StyledCard
      cover={
        <img
          onClick={() => router.push(PAGE_ROUTES.COURSE_DETAIL(props._id))}
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
      <Rate disabled />

      <StyledCard.Meta
        title={props.name}
        description={
          <>
            <Typography.Paragraph
              ellipsis={{
                rows: 2,
              }}
            >
              {props.description}
            </Typography.Paragraph>
          </>
        }
      />
    </StyledCard>
  );
};

export default CourseCard;
