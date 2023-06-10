import { Typography, message } from "antd";

import { Button, SizeBox } from "ui/atoms";
import { UserProfile } from "ui/molecules";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SchoolIcon from "@mui/icons-material/School";
import UpdateIcon from "@mui/icons-material/Update";

import { Container, StyledCard } from "./styled";
import { useEnrollCourse, useUserCourse } from "hooks";
import { courseQueryKeys, queryClientInstance } from "src/infra/https";
import moment from "moment";

type Props = {
  course?: SCourse;
};

const { Title, Text } = Typography;

const CourseMaterial = ({ course }: Props) => {
  const { mutate } = useEnrollCourse();
  const { data } = useUserCourse(course?._id || "");

  const enrollCourse = () => {
    mutate(
      {
        courseId: course?._id || "",
      },
      {
        onSuccess: () => {
          message.success("Enrolled course success");
          queryClientInstance.invalidateQueries(
            courseQueryKeys.userCourse(course?._id || "")
          );
        },
        onError: (err: any) => {
          message.error(
            err?.response?.data?.message || "Internal Server Error"
          );
        },
      }
    );
  };

  return (
    <Container>
      <StyledCard
        isHighlight
        title={
          <>
            {!data?.data ? (
              <>
                <Title level={3}>${course?.price}</Title>
                <Button
                  size="large"
                  isFullWidth
                  type="primary"
                  onClick={enrollCourse}
                >
                  Enroll now
                </Button>

                <Text className="center">30-day money-back guarantee</Text>
              </>
            ) : (
              <Button
                size="large"
                isFullWidth
                type="primary"
                onClick={() => {}}
              >
                Start Learning
              </Button>
            )}
          </>
        }
      >
        <div className="criteria">
          <SignalCellularAltIcon />
          All Levels
        </div>
        <div className="criteria">
          <SchoolIcon />
          {course?.totalUserEnrolled} Total Enrolled
        </div>
        <div className="criteria">
          <UpdateIcon />
          {moment(course?.updatedAt || "").format("hh:mm DD/MM/YYYY")} Last
          Updated
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
              avatarLink={
                "https://vicodemy.com/wp-content/uploads/2023/03/0901df4f8a204c7e1531.jpeg"
              }
              name={course?.teacherName || ""}
              discordFollower={5}
            />
          </>
        }
      >
        <Title level={3}>Audience</Title>
        <Text>All Level</Text>

        <Title level={3}>Requirements</Title>
        <Text>{course?.prerequisiteDes}</Text>
      </StyledCard>
    </Container>
  );
};

export default CourseMaterial;
