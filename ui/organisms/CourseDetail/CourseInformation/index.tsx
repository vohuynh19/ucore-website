import { Col, Typography } from "antd";
import { Container } from "./styled";
import DropdownMenu from "ui/molecules/CourseDetail/DropdownMenu";
import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@constants";

type Props = {
  courseId: string;
  aboutCourse: string;
  whatWillLearn: string;
  sections: SSection[];
};

const { Title, Text } = Typography;

const CourseInformation = (props: Props) => {
  const router = useRouter();

  const getSections = () => {
    return props.sections.map((section) => ({
      label: section.sectionName,
      value: section._id,
      children: section.newVideo.map((vid) => ({
        label: vid.name || vid._id,
        value: vid._id,
        metadata: {
          time: vid.duration,
          onClick: () =>
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
          <Title level={3}>About Course</Title>
          <Text>{props.aboutCourse}</Text>
        </>
      )}

      <br />

      {props.whatWillLearn && (
        <>
          <Title level={3}>What you will learn </Title>
          <Text>{props.whatWillLearn}</Text>
        </>
      )}

      <br />

      <Title level={3}>Course Content</Title>
      <DropdownMenu items={getSections() || []} />

      <br />
    </Container>
  );
};

export default CourseInformation;
