import {
  Col,
  Divider,
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

type Props = {
  onConfirm: Function;
  confirmLoading: boolean;
};

export const CreateCourseModal: ForwardRefRenderFunction<any, Props> = (
  { onConfirm, confirmLoading },
  ref
) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useImperativeHandle(ref, () => ({
    setData: (data: any) => setModalData(data),
    openModal: () => setOpen(true),
  }));

  const onOk = () => {
    onConfirm(form.getFieldsValue());
  };

  return (
    <Modal
      confirmLoading={confirmLoading}
      onOk={onOk}
      open={open}
      closable
      onCancel={() => setOpen(false)}
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
              <Select placeholder="Selet course category" />
            </Form.Item>

            <Form.Item name="thumnail" label="Thumbnail name">
              <Upload listType="picture-card">
                Upload <FileUploadIcon />
              </Upload>
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
