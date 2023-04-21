import { Col, Form, Row, Select } from "antd";
import { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { SizeBox } from "ui/atoms";

import { SORT_OPTION } from "../types";

const TopFilter = () => {
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
    <Fragment>
      <Row>
        <Col span={8}>
          <Form.Item name={"sort"}>
            <Select
              placeholder="Select sorting option"
              defaultValue={sortList[0].value}
              size="large"
            >
              {sortList.map((sort) => (
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
