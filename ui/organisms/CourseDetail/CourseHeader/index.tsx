import { Rate, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Container } from "./styled";

type Props = {
  courseId: string;
  rating: number;
  title: string;
  lastUpdate: string;
  categories: {
    name: string;
    id: string;
  }[];
};

const { Title, Text, Link } = Typography;

const CourseHeader = (props: Props) => {
  const { t } = useTranslation("common");

  const onRatingClick = () => {};

  const categoryLink = (id: string) => "";

  return (
    <Container>
      <Rate value={props.rating} onChange={onRatingClick} />

      <Title level={3}>{props.title}</Title>

      <Text>
        <Text type="secondary">{`${t("categories")}:   `}</Text>
        {props.categories.map((category, idx) => {
          return (
            <Link key={category.id} href={categoryLink(category.id)}>
              {idx === props.categories.length - 1
                ? category.name
                : category.name + ",   "}
            </Link>
          );
        })}
      </Text>
    </Container>
  );
};

export default CourseHeader;
