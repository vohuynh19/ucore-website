import { CloseOutlined } from "@mui/icons-material";
import { Input } from "antd";
import { useTranslation } from "react-i18next";

import { Button } from "ui/atoms";
import {
  CourseListCategoryFilter as CategoryFilter,
  CourseListPriceFilter as PriceFilter,
} from "ui/molecules";

import { Container } from "./styled";

type Props = {
  onResetForm: () => void;
};

const LeftFilter = ({ onResetForm }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Container direction="vertical" size="large">
      <Input.Search size="large" placeholder={t("search") || ""} />

      <CategoryFilter />

      <PriceFilter />

      <Button
        type="primary"
        size="large"
        icon={<CloseOutlined />}
        onClick={onResetForm}
      >
        {t("clearFilter")}
      </Button>
    </Container>
  );
};

export default LeftFilter;
