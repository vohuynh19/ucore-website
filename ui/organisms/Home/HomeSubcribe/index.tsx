import { Input, Typography, Row, Col } from "antd";
import { Button, SizeBox } from "ui/atoms";
import { Container, ContentContainer } from "./styled";
import { useTranslation } from "react-i18next";

const HomeSubscribe = () => {
  const { t } = useTranslation("home");

  return (
    <Container>
      <ContentContainer>
        <h1>{t("feedbackSen1")}</h1>

        <Input size="large" placeholder="Your email address here" />

        <SizeBox height={2} />
        <Input.TextArea size="large" placeholder="Your feedback" />

        <SizeBox height={2} />
        <Row align="middle">
          <Col span={8}>
            <Typography.Text style={{ textAlign: "end" }}>
              {t("feedbackSen2")}
            </Typography.Text>
          </Col>
          <Col offset={2} span={14}>
            <Input placeholder="Your name" />
          </Col>
        </Row>
        <SizeBox height={2} />
        <Row align="middle">
          <Col span={8}>
            <Typography.Text>{t("feedbackSen3")}</Typography.Text>
          </Col>

          <Col offset={2} span={14}>
            <Input placeholder="Phone number" />
          </Col>
        </Row>

        <SizeBox height={4} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" size="large">
            Submit
          </Button>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default HomeSubscribe;
