import { PAGE_ROUTES } from "@constants";
import { Rate, Space, Tag, Typography } from "antd";
import { useRouter } from "next/router";
import { Button, SizeBox } from "ui/atoms";

import { ActionContainer, StyledCard } from "./styled";
import {
  AccessTimeFilled,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleRightOutlined,
  ArrowLeftOutlined,
  LockClockOutlined,
  Star,
  StarOutline,
} from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { theme } from "styles";

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
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Tag color="geekblue">{props.categoryInfo?.[0].name}</Tag>
        </div>

        <Typography.Title level={3}>${props.price}</Typography.Title>
      </div>

      <Typography.Title
        level={4}
        ellipsis={{
          rows: 1,
        }}
      >
        {props.name}
      </Typography.Title>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AccessTimeFilled
          style={{ fontSize: 20, color: theme.colors.primary }}
        />
        <SizeBox width={4} />
        <Typography.Text style={{ fontSize: 12, lineHeight: "12px" }}>
          {props.totalDuration / 60} hours
        </Typography.Text>

        <SizeBox width={8} />

        <Star style={{ fontSize: 20, color: theme.colors.primary }} />
        <SizeBox width={4} />
        <Typography.Text style={{ fontSize: 12, lineHeight: "12px" }}>
          {props.rating || 2.7} star
        </Typography.Text>
      </div>

      <SizeBox height={12} />

      <Button
        type="text"
        style={{ padding: 0, fontWeight: 700 }}
        color={theme.colors.primary}
      >
        View Course
        <SizeBox width={4} />
        <ArrowCircleRightOutlined />
      </Button>
    </StyledCard>
  );
};

export default CourseCard;
