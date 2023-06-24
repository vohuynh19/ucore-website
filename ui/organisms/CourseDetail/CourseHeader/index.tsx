import { Typography } from "antd";
import { useTranslation } from "next-i18next";
import { Container } from "./styled";
import { PAGE_ROUTES } from "@constants";

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

  const categoryLink = (id: string) => {
    return `${PAGE_ROUTES.COURSE_LIST}?categoryId=${id}`;
  };

  return (
    <Container>
      <Title level={3}>{props.title}</Title>

      {props.categories.length > 0 && (
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
      )}
    </Container>
  );
};

export default CourseHeader;
