import { CloseOutlined } from "@mui/icons-material";
import { Checkbox, Col, Form, Input, Row, Select, Space } from "antd";
import { useTranslation } from "react-i18next";
import { Button } from "ui/atoms";
import { categories, options } from "../mock";

type Props = {
  onResetForm: () => void;
};

const LeftFilter = ({ onResetForm }: Props) => {
  const { t } = useTranslation("common");

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
                <Select.Option key={category} value={category}>
                  {category}
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
