import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { PAGE_ROUTES } from "@constants";
import { CourseCategoryItem } from "ui/molecules";
import { Container } from "./styled";
import { Col, Row } from "antd";

type TCategory = {
  label: string;
  image: string;
  destination: string;
};

const HomeCategories = () => {
  const { t } = useTranslation("home");
  const router = useRouter();

  const categories = useMemo<TCategory[]>(
    () => [
      {
        label: t("programming"),
        image: "/images/course-category-5.png",
        destination: PAGE_ROUTES.COURSE_LIST,
      },
      {
        label: t("design"),
        image: "/images/course-category-1.png",
        destination: PAGE_ROUTES.COURSE_LIST,
      },
      {
        label: t("game"),
        image: "/images/course-category-2.png",
        destination: PAGE_ROUTES.COURSE_LIST,
      },
      {
        label: t("javascript"),
        image: "/images/course-category-3.png",
        destination: PAGE_ROUTES.COURSE_LIST,
      },
      {
        label: t("uxui"),
        image: "/images/course-category-4.png",
        destination: PAGE_ROUTES.COURSE_LIST,
      },
      {
        label: t("ai"),
        image: "/images/course-category-1.png",
        destination: PAGE_ROUTES.COURSE_LIST,
      },
    ],
    [t]
  );

  return (
    <Container>
      <Row gutter={[16, 24]}>
        {categories.map((category) => (
          <Col key={category.label} xs={12} sm={8} xl={24 / categories.length}>
            <CourseCategoryItem
              title={category.label}
              backgroundLink={category.image}
              onClick={() => router.push(category.destination)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeCategories;
