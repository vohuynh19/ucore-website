import { Form, Select } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CATEGORY_OPTION } from "ui/organisms/CourseList/types";

const CategoryFilter = () => {
  const { t } = useTranslation("common");

  const categories = useMemo(
    () => [
      { label: t("all"), value: CATEGORY_OPTION.ALL },
      {
        label: t("gameDevelopment"),
        value: CATEGORY_OPTION.GAME_DEVELOPMENT,
      },
      { label: t("webDevelopment"), value: CATEGORY_OPTION.WEB_DEVELOPMENT },
      { label: t("ai"), value: CATEGORY_OPTION.AI },
      { label: t("vlog"), value: CATEGORY_OPTION.VLOG },
    ],
    [t]
  );

  return (
    <Form.Item name="category" label={t("category")}>
      <Select size="large" placeholder={t("categoryPlaceholder")}>
        {categories.map((category) => (
          <Select.Option key={category.label} value={category.value}>
            {category.value}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default CategoryFilter;
