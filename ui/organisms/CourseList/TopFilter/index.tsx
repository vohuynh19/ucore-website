import { Col, Form, Row, Select } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { SizeBox } from "ui/atoms";
import { sortList } from "../mock";

const TopFilter = () => {
  const { t } = useTranslation("common");

  return (
    <Fragment>
      <Row>
        <Col span={8}>
          <Form.Item name={"sort"}>
            <Select
              placeholder="Select sorting option"
              defaultValue={sortList(t)[0].value}
              size="large"
            >
              {sortList(t).map((sort) => (
                <Select.Option key={sort.value} value={sort.value}>
                  {sort.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <SizeBox height={48} />
    </Fragment>
  );
};

export default TopFilter;
