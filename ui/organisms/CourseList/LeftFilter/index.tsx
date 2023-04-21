import { CloseOutlined } from "@mui/icons-material";
import { Checkbox, Col, Form, Input, Row, Select, Space } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "ui/atoms";

import { CATEGORY_OPTION, PRICE_OPTION } from "../types";

type Props = {
  onResetForm: () => void;
};

const LeftFilter = ({ onResetForm }: Props) => {
  const { t } = useTranslation("common");

  const categories = useMemo(
    () => [
      { label: t("all"), value: CATEGORY_OPTION.ALL },
      { label: t("gameDevelopment"), value: CATEGORY_OPTION.GAME_DEVELOPMENT },
      { label: t("webDevelopment"), value: CATEGORY_OPTION.WEB_DEVELOPMENT },
      { label: t("ai"), value: CATEGORY_OPTION.AI },
      { label: t("vlog"), value: CATEGORY_OPTION.VLOG },
    ],
    [t]
  );

  const options = useMemo(
    () => [
      { label: t("free"), value: PRICE_OPTION.FREE },
      { label: t("paid"), value: PRICE_OPTION.PAID },
    ],
    [t]
  );

  return (
    <Row>
      <Space direction="vertical" size="large">
        <Col span={24}>
          <Input.Search size="large" placeholder="Search" />
        </Col>

        <Col span={24}>
          <Form.Item name={"category"} label="Category">
            <Select size="large" placeholder="Select category">
              {categories.map((category) => (
                <Select.Option key={category.label} value={category.value}>
                  {category.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name={"price"} label="Price">
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
        </Col>

        <Button
          type="primary"
          size="large"
          icon={<CloseOutlined />}
          onClick={onResetForm}
        >
          {t("clearFilter")}
        </Button>
      </Space>
    </Row>
  );
};

export default LeftFilter;
