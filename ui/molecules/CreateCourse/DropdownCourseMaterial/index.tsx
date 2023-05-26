import {
  Collapse,
  Divider,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, SizeBox } from "ui";
import { useState } from "react";
import AddTopicModal from "../AddTopicModal";
import { debug } from "console";
import { mockCourseTopics } from "src/infra/https/entities/course-topic/course-topic.mock";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton } from "@mui/material";

type Props = {
  courseIntroVideo: string;
};

const { Paragraph, Text, Title } = Typography;

const DropdownCourseMaterial = ({ courseIntroVideo }: Props) => {
  const data = mockCourseTopics;
  const { t } = useTranslation(["course"]);
  const [selectedTopic, setSelectedTopic] = useState<CourseTopic>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addTopicForm] = Form.useForm();

  const onResetForm = () => {
    addTopicForm.resetFields();
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log(addTopicForm.getFieldsValue(true));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModify = (topic: CourseTopic) => {
    // Implement the logic to handle the modify action
    // For example, you can open a modal or navigate to a modify page
    setSelectedTopic(topic);
    setIsModalOpen(true);
    console.log("Modify topic with ID:", topic.id);
  };

  const handleDelete = (topicId: string) => {
    console.log("Delete topic with ID:", topicId);
  };

  const genextra = (courseTopic: CourseTopic) => {
    return (
      <div>
        <IconButton
          style={{ marginRight: "8px" }}
          aria-label="Modify"
          onClick={(event) => {
            event.stopPropagation();
            handleModify(courseTopic);
          }}
        >
          <EditOutlinedIcon />
        </IconButton>
        <Popconfirm
          title="Are you sure you want to delete this topic?"
          onConfirm={() => handleDelete(courseTopic.id)}
          okText="Yes"
          cancelText="No"
        >
          <IconButton
            aria-label="Delete"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </Popconfirm>
      </div>
    );
  };

  return (
    <div>
      <Collapse defaultActiveKey={["1"]} onChange={onChange} size="large" ghost>
        <Collapse.Panel header={t("courseMaterial")} key="1">
          <Divider></Divider>
          <Form.Item
            name={"videoSource"}
            label={t("courseVideoSource")}
            rules={[{ required: true }]}
          >
            <Select defaultValue="youtube">
              <Select.Option value="youtube">
                {
                  <Row align={"middle"}>
                    <YouTubeIcon />
                    Youtube
                  </Row>
                }
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={"introVideo"}
            label={t("courseVideoIntro")}
            rules={[{ required: false }]}
          >
            <Input placeholder={t("pasteYoutubeURL") || ""} />
          </Form.Item>

          <Divider></Divider>
          <Title level={3}>{t("courseTopic")}</Title>
          <Divider></Divider>

          {data.map((courseTopic) => (
            <Collapse
              key={courseTopic.id}
              defaultActiveKey={[]}
              onChange={onChange}
              size="large"
            >
              <Collapse.Panel
                header={courseTopic.title}
                key={courseTopic.id}
                extra={genextra(courseTopic)}
              ></Collapse.Panel>
            </Collapse>
          ))}

          <SizeBox height={8} />

          <Button type="primary" size="large" onClick={showModal}>
            <AddCircleIcon style={{ marginRight: "8px" }} />
            {t("addNewTopic")}
          </Button>
        </Collapse.Panel>
      </Collapse>

      <Form
        form={addTopicForm}
        layout="vertical"
        size="large"
        labelCol={{ span: 24 }}
      >
        <AddTopicModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          selectedTopic={
            selectedTopic || {
              id: "",
              title: "",
              summary: "",
            }
          }
        />
      </Form>
    </div>
  );
};

export default DropdownCourseMaterial;
