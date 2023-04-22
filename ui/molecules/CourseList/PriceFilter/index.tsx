import { Checkbox, Col, Form, Row } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PRICE_OPTION } from "ui/organisms/CourseList/types";

const PriceFilter = () => {
  const { t } = useTranslation("common");

  const options = useMemo(
    () => [
      { label: t("free"), value: PRICE_OPTION.FREE },
      { label: t("paid"), value: PRICE_OPTION.PAID },
    ],
    [t]
  );

  return (
    <Form.Item name="price" label={t("price")}>
      <Checkbox.Group>
        <Row>
          {options.map((option) => (
            <Col key={option.value} span={24}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default PriceFilter;
