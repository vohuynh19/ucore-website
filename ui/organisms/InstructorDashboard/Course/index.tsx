import styled from "styled-components";
import React, { useMemo, useRef } from "react";
import { Table, Typography, message } from "antd";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "ui/atoms";
import { CourseCategoryModal, CreateCourseModal } from "ui/molecules";
import { useCreateCourse } from "hooks";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

type CreateCoursePayload = {
  name: string;
  thumnail: string;
  categoryId: string;
  description: string;
  achivementDes: string;
  prerequisiteDes: string;
  price: number;
};

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

const data: DataType[] = [];

const CourseManagement = () => {
  const createCourseModalRef = useRef<any>(null);
  const courseCategoryModalRef = useRef<any>(null);

  const { mutate, isLoading } = useCreateCourse();

  const columns: any[] = useMemo(
    () => [
      {
        title: "Course Name",
        dataIndex: "name",
        width: 200,
        render: (text: string) => <a>{text}</a>,
      },
      {
        title: "Price",
        dataIndex: "price",
        width: 200,
      },
      {
        title: (
          <div style={{ display: "flex", alignItems: "center" }}>
            Category{" "}
            <Button
              style={{ marginLeft: 12 }}
              icon={<KeyboardArrowDownIcon />}
              onClick={() => courseCategoryModalRef.current.open()}
            />
          </div>
        ),
        dataIndex: "categoryId",
        width: 200,
      },
      {
        title: "Course Description",
        dataIndex: "description",
        width: 200,
      },
      {
        title: "Achievement Description",
        dataIndex: "achivementDes",
        width: 200,
      },
      {
        title: "Prerequisite Description",
        dataIndex: "prerequisiteDes",
        width: 200,
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
            <Button
              icon={<ModeEditIcon fontSize={"small"} color={"primary"} />}
            />

            <Button
              icon={<RemoveCircleIcon fontSize={"small"} color={"error"} />}
            />
          </div>
        ),
        fixed: "right",
      },
    ],
    []
  );

  const onOpenCreateModal = () => createCourseModalRef.current.openModal();

  const onCreateCourse = (payload: CreateCoursePayload) => {
    mutate(payload, {
      onSuccess: (res) => {
        console.log("res", res);
        message.success("Create course success");
      },
    });
  };

  return (
    <Container>
      <TitleContainer>
        <Typography.Title level={3}>Quản lý khoá học</Typography.Title>

        <Button
          onClick={() => onOpenCreateModal()}
          size="large"
          icon={<ControlPointIcon />}
          type="primary"
        >
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

      <CreateCourseModal
        ref={createCourseModalRef}
        onConfirm={onCreateCourse}
        confirmLoading={isLoading}
      />

      <CourseCategoryModal ref={courseCategoryModalRef} />
    </Container>
  );
};

export default CourseManagement;
