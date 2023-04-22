import { Form, Select } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SORT_OPTION } from "ui/organisms/CourseList/types";

const SortFilter = () => {
  const { t } = useTranslation("common");

  const sortList = useMemo(
    () => [
      {
        label: t("mostPopular"),
        value: SORT_OPTION.MOST_POPULAR,
      },
      {
        label: t("highestRate"),
        value: SORT_OPTION.HIGHEST_RATE,
      },
      {
        label: t("newest"),
        value: SORT_OPTION.NEWEST,
      },
    ],
    [t]
  );

  return (
    <Form.Item name="sort" label={t("sort")}>
      <Select
        size="large"
        placeholder={t("sortPlaceholder")}
        defaultValue={sortList[0].value}
        style={{ minWidth: 220 }}
      >
        {sortList.map((sort) => (
          <Select.Option key={sort.value} value={sort.value}>
            {sort.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SortFilter;
