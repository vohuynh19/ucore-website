import { Typography, Card } from "antd";

import { useInstructorQuery } from "hooks";

import { Button, SizeBox } from "ui/atoms";
import { UserProfile } from "ui/molecules";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import UpdateIcon from "@mui/icons-material/Update";

import { Container, StyledCard } from "./styled";

type Props = {
  id: string;
  price: string;
  difficultLevel: string;
  numberOfStudent: number;
  author: User;
  materialsIncluded: string;
  requirements: string;
  targetedAudience: string;
};

const { Title, Text } = Typography;

// Todo: Add Translation
const CourseMaterial = (props: Props) => {
  const { data } = useInstructorQuery({ id: props.id });

  return (
    <Container>
      <StyledCard
        isHighlight
        title={
          <>
            <Title level={3}>{props.price}</Title>

            <Button size="large" isFullWidth type="primary">
              Enroll now
            </Button>

            <Text className="center">30-day money-back guarantee</Text>
          </>
        }
      >
        <div className="criteria">
          <SignalCellularAltIcon />
          All Levels
        </div>
        <div className="criteria">
          <SchoolIcon />9 Total Enrolled
        </div>
        <div className="criteria">
          <AccessTimeIcon />3 hours 30 minutes Duration
        </div>
        <div className="criteria">
          <UpdateIcon />
          March 30, 2023 Last Updated
        </div>
      </StyledCard>

      <SizeBox height="40px" />

      <StyledCard
        title={
          <>
            <Title level={4} style={{ marginBottom: 12 }}>
              A Course By
            </Title>

            <UserProfile
              avatarLink={props.author.avatar}
              name={props.author.name}
            />
          </>
        }
      >
        <Title level={3}>Material Includes</Title>
        <Text>{props.materialsIncluded}</Text>

        <Title level={3}>Audience</Title>
        <Text>{props.targetedAudience}</Text>

        <Title level={3}>Requirements</Title>
        <Text>{props.requirements}</Text>
      </StyledCard>
    </Container>
  );
};

export default CourseMaterial;
