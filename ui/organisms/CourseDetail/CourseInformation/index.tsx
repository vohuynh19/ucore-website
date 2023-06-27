import { Typography } from "antd";
import { Container } from "./styled";
import DropdownMenu from "ui/molecules/CourseDetail/DropdownMenu";
import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@constants";
import { useUserCourse } from "hooks";
import { useTranslation } from "react-i18next";
import { MarkupView } from "ui/atoms";

type Props = {
  shortDescription: string;
  courseId: string;
  aboutCourse: string;
  whatWillLearn: string;
  sections: SSection[];
  showSections: boolean;
};

const { Title, Text, Paragraph } = Typography;

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
      {props.shortDescription && (
        <>
          <Paragraph>{props.shortDescription}</Paragraph>
        </>
      )}
      {props.whatWillLearn && (
        <>
          <Title level={3}>{t("willLearn")}</Title>
          <MarkupView html={props.whatWillLearn} />
        </>
      )}

      <br />

      {props.aboutCourse && (
        <>
          <Title level={3}>{t("aboutCourse")}</Title>

          <MarkupView html={props.aboutCourse} />
        </>
      )}
      <br />

      <Title level={3}>{t("courseContent")}</Title>
      {props.showSections ? (
        <DropdownMenu activeKey="" items={getSections() || []} />
      ) : (
        <div></div>
      )}

      <br />
    </Container>
  );
};

export default CourseInformation;
