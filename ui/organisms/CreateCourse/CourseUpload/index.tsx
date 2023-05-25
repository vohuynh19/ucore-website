import { Input } from "antd";
import { useTranslation } from "react-i18next";
import { CourseLayout } from "ui/templates";
import { Container } from "./styled";
import { CourseUploadTips, UploadMaterial } from "ui/molecules";

const CourseUpload = () => {
  const { t } = useTranslation("common");

  return (
    <CourseLayout
      HeaderComponent={undefined}
      RightComponent={<CourseUploadTips />}
    >
      <UploadMaterial />
    </CourseLayout>
  );
};

export default CourseUpload;
