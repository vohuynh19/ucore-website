import { Typography } from "antd";
import { Container } from "./styled";
import DropdownMenu from "ui/molecules/CourseDetail/DropdownMenu";
import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@constants";
import { useUserCourse } from "hooks";
import { useTranslation } from "react-i18next";

type Props = {
  courseId: string;
  aboutCourse: string;
  whatWillLearn: string;
  sections: SSection[];
};

const { Title, Text } = Typography;

const CourseInformation = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation("course");
  const { data: userCourse } = useUserCourse(id as string);

  const getSections = () => {
    return props.sections.map((section) => ({
      label: section.sectionName,
      value: section._id,
      children: section.newVideo.map((vid) => ({
        label: vid.name || vid._id,
        value: vid._id,
        metadata: {
          available: vid.isTrivial || userCourse?.data,
          time: vid.duration,
          onClick: () =>
            (vid.isTrivial || userCourse?.data) &&
            router.push({
              pathname: PAGE_ROUTES.LESSON(props.courseId),
              query: {
                sectionId: section._id,
                videoId: vid._id,
              },
            }),
        },
      })),
    }));
  };

  return (
    <Container>
      {props.aboutCourse && (
        <>
          <Title level={3}>{t("aboutCourse")}</Title>
          <Text>{props.aboutCourse}</Text>
        </>
      )}

      <br />

      {props.whatWillLearn && (
        <>
          <Title level={3}>{t("willLearn")}</Title>
          <Text>{props.whatWillLearn}</Text>
        </>
      )}

      <br />

      <Title level={3}>{t("courseContent")}</Title>
      <DropdownMenu activeKey="" items={getSections() || []} />

      <br />
    </Container>
  );
};

export default CourseInformation;
