import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Container } from "./styled";
import { SizeBox } from "ui/atoms";
import DropdownCourseInfo from "../DropdownCourseInfo";

const availableCategories: CourseCategory[] = [
  { id: "1", name: "Game" },
  { id: "2", name: "Web" },
  { id: "3", name: "Category 3" },
  // ... other categories
];

const CourseUploadTips = () => {
  return (
    <Container>
      <DropdownCourseInfo
        title={""}
        aboutCourse={"test"}
        thumbnailUrl={""}
        categories={[]}
        difficultLevel={"easy"}
        availableCategories={availableCategories}
      />
    </Container>
  );
};

export default CourseUploadTips;
