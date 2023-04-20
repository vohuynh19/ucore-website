import { Select, Input, Col, Row, Space, Checkbox, Form } from "antd";
import { useTranslation } from "react-i18next";
import { CloseOutlined } from "@mui/icons-material";

import { CourseCard } from "ui/molecules";
import { Button, SizeBox } from "ui/atoms";

import { categories, courseList, sortList, options } from "./mock";
import { Container } from "./styled";

const { Option } = Select;

interface Props {}

const CourseSearch: React.FC<Props> = ({}) => {
  const { t } = useTranslation(["common"]);
  const [form] = Form.useForm();

  const handleResetForm = () => {
    form.resetFields(["category", "price", "sort"]);
  };

  const renderSort = () => (
    <Select
      placeholder="Select sorting option"
      defaultValue={sortList(t)[0].value}
      size="large"
    >
      {sortList(t).map((sort) => (
        <Option key={sort.value} value={sort.value}>
          {sort.label}
        </Option>
      ))}
    </Select>
  );

  const renderCategory = () => (
    <Select size="large" placeholder="Select category">
      {categories.map((category) => (
        <Option key={category} value={category}>
          {category}
        </Option>
      ))}
    </Select>
  );

  const renderPrice = () => (
    <Checkbox.Group>
      <Row>
        {options.map((option) => (
          <Col key={option.value} span={24}>
            <Checkbox value={option.value}>{option.label}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );

  return (
    <Container>
      <Form form={form} layout="vertical">
        <Row>
          <Col offset={1} span={5}>
            <Row>
              <Space direction="vertical" size="large">
                <Col span={24}>
                  <Input.Search size="large" placeholder="Search" />
                </Col>

                <Col span={24}>
                  <Form.Item name={"category"} label="Category">
                    {renderCategory()}
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item name={"price"} label="Price">
                    {renderPrice()}
                  </Form.Item>
                </Col>

                <Button
                  type="primary"
                  size="large"
                  icon={<CloseOutlined />}
                  onClick={handleResetForm}
                >
                  {t("clearFilter")}
                </Button>
              </Space>
            </Row>
          </Col>

          <Col offset={1} span={16} className="left-filter">
            <Row>
              <Col span={8}>
                <Form.Item name={"sort"}>{renderSort()}</Form.Item>
              </Col>
            </Row>

            <SizeBox height={48} />

            <Row gutter={[32, 32]}>
              {courseList.map((course) => (
                <Col key={course.id} xs={24} sm={12} md={12} lg={8} xl={6}>
                  <CourseCard />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CourseSearch;
