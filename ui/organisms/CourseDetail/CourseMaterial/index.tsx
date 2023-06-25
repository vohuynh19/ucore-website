import { Typography, message } from "antd";
import { useRouter } from "next/router";
import moment from "moment";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SchoolIcon from "@mui/icons-material/School";
import UpdateIcon from "@mui/icons-material/Update";

import { useEnrollCourse, useUserCourse } from "hooks";
import { courseQueryKeys, queryClientInstance } from "src/infra/https";
import { PAGE_ROUTES } from "@constants";

import { Button, SizeBox } from "ui/atoms";
import { UserProfile } from "ui/molecules";

import { Container, StyledCard } from "./styled";
import { useTranslation } from "react-i18next";

type Props = {
  course?: SCourse;
};

const { Title, Text } = Typography;

const CourseMaterial = ({ course }: Props) => {
  const { t } = useTranslation("course");
  const { mutate } = useEnrollCourse();
  const { data } = useUserCourse(course?._id || "");
  const router = useRouter();

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
                  {t("Enroll now")}
                </Button>

                <Text className="center">
                  {t("30-day money-back guarantee")}
                </Text>
              </>
            ) : (
              <Button
                size="large"
                isFullWidth
                type="primary"
                onClick={() =>
                  router.push(PAGE_ROUTES.LESSON(course?._id || ""))
                }
              >
                {t("Start Learning")}
              </Button>
            )}
          </>
        }
      >
        <div className="criteria">
          <SignalCellularAltIcon />
          {t("All Level")}
        </div>
        <div className="criteria">
          <SchoolIcon />
          {course?.totalUserEnrolled} {t("Total Enrolled")}
        </div>
        <div className="criteria">
          <UpdateIcon />
          {moment(course?.updatedAt || "").format("hh:mm DD/MM/YYYY")}{" "}
          {t("Last Updated")}
        </div>
      </StyledCard>

      <SizeBox height="40px" />

      <StyledCard
        title={
          <>
            <Title level={4} style={{ marginBottom: 12 }}>
              {t("A Course By")}
            </Title>

            <UserProfile
              avatarLink={
                "https://vicodemy.com/wp-content/uploads/2023/03/0901df4f8a204c7e1531.jpeg"
              }
              name={course?.teacherName || ""}
            />
          </>
        }
      >
        <Title level={3}>{t("Audience")}</Title>
        <Text>{t("All Level")}</Text>

        <Title level={3}>{t("Requirements")}</Title>
        <Text>{course?.prerequisiteDes}</Text>
      </StyledCard>
    </Container>
  );
};

export default CourseMaterial;
