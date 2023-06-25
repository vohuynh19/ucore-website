import { Input, Typography, Row, Col, Form } from "antd";
import { Button, SizeBox } from "ui/atoms";
import { Container, ContentContainer } from "./styled";
import { useTranslation } from "next-i18next";

const HomeSubscribe = () => {
  const { t } = useTranslation("home");

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  };

  return (
    <Container>
      <h1
        className="subcribe-title"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
      >
        {t("feedbackSen1")}
      </h1>

      <ContentContainer data-aos="flip-left" data-aos-easing="ease-out-cubic">
        <h1>Thông tin của bạn</h1>
        <Form {...layout}>
          <Form.Item name={"email"} rules={[{ required: true }]}>
            <Input size="large" placeholder="Your email address here" />
          </Form.Item>

          <Form.Item name={"feedback"} rules={[{ required: true }]}>
            <Input.TextArea rows={4} size="large" placeholder="Your feedback" />
          </Form.Item>

          <Form.Item
            name={"name"}
            label={t("feedbackSen2")}
            rules={[{ required: false }]}
          >
            <Input placeholder="Mr/Mrs ..." />
          </Form.Item>

          <Form.Item
            name={"phone"}
            label={t("feedbackSen3")}
            rules={[{ required: false }]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" size="large">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default HomeSubscribe;
