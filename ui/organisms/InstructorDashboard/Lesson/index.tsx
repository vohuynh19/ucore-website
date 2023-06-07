import styled from "styled-components";
import React from "react";
import { Table, Typography } from "antd";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Button } from "ui/atoms";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: any[] = [
  {
    title: "Name",
    dataIndex: "name",
    width: 100,
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 100,
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 100,
  },
  {
    title: "Action",
    key: "operation",
    width: 112,
    render: () => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button icon={<ModeEditIcon fontSize={"small"} color={"primary"} />} />

        <Button
          icon={<RemoveCircleIcon fontSize={"small"} color={"error"} />}
        />
      </div>
    ),
    fixed: "right",
  },
];

const Container = styled.div`
  padding: 24px;
`;

const TitleContainer = styled.div`
  h3 {
    margin: 0;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  svg {
    margin-right: 8px;
  }
`;

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

const LessonManagement = () => {
  return (
    <Container>
      <TitleContainer>
        <Typography.Title level={3}>Quản lý bài giảng</Typography.Title>

        <Button size="large" icon={<ControlPointIcon />} type="primary">
          Add
        </Button>
      </TitleContainer>
      <div>
        <Table
          rowSelection={{
            type: "checkbox",
            onChange: (
              selectedRowKeys: React.Key[],
              selectedRows: DataType[]
            ) => {},
            getCheckboxProps: (record: DataType) => ({
              disabled: record.name === "Disabled User", // Column configuration not to be checked
              name: record.name,
            }),
          }}
          scroll={{ x: 1300 }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </Container>
  );
};

export default LessonManagement;
