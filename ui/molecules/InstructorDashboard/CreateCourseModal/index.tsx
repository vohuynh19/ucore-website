import {
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";

import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useCourseCategory } from "hooks";

type Props = {
  onConfirm: Function;
  confirmLoading: boolean;
};

function getBase64(file: any, callback: any) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };

  reader.onloadend = callback;
}

export const CreateCourseModal: ForwardRefRenderFunction<any, Props> = (
  { onConfirm, confirmLoading },
  ref
) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [uploadState, setUploadState] = useState({
    loading: false,
    imageUrl: "",
  });

  const { data } = useCourseCategory();

  useImperativeHandle(ref, () => ({
    setData: (data: any) => setModalData(data),
    openModal: () => setOpen(true),
    closeModal: () => onCancel(),
  }));

  const onOk = () => {
    onConfirm(form.getFieldsValue());
  };

  const onCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <Modal
      confirmLoading={confirmLoading}
      onOk={onOk}
      open={open}
      closable
      onCancel={onCancel}
      width={800}
    >
      <Typography.Title level={3}>Create Course</Typography.Title>

      <Form form={form} layout="vertical">
        <Row>
          <Col span={11}>
            <Form.Item name="name" label="Course name">
              <Input placeholder="Please enter course name" />
            </Form.Item>

            <Form.Item name="price" label="Course Price">
              <InputNumber placeholder="Price" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item name="categoryId" label="Category">
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select course category"
                onChange={handleChange}
                options={(data?.data || []).map((e) => ({
                  label: e.name,
                  value: e.id,
                }))}
              />
            </Form.Item>

            <Form.Item name="thumnail" label="Thumbnail image">
              {/* <Upload listType="picture-card" name="avatar">
                Upload <FileUploadIcon />
              </Upload> */}

              <Input placeholder="Please enter thumbnail image" />
            </Form.Item>
          </Col>

          <Col span={1} />

          <Col span={12}>
            <Form.Item name="description" label="Course Description">
              <Input.TextArea
                placeholder="Please enter course Description"
                rows={4}
              />
            </Form.Item>

            <Form.Item name="achivementDes" label="Course Archivement">
              <Input.TextArea
                placeholder="Please enter course Description"
                rows={4}
              />
            </Form.Item>

            <Form.Item name="prerequisiteDes" label="Course Prerequisite">
              <Input.TextArea
                placeholder="Please enter course Description"
                rows={4}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default forwardRef(CreateCourseModal);
