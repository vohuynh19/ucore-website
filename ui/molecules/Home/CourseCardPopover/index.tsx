import { Col, Row, Space, Typography } from "antd";
import styled from "styled-components";

import InfoIcon from "@mui/icons-material/Info";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTranslation } from "react-i18next";
import { Button, SizeBox } from "ui/atoms";

const { Text, Link, Title, Paragraph } = Typography;

const Container = styled.div`
  padding: 5px 20px 10px;
`;

type Props = {
  course: SCourse;
};

const CourseCardPopover = (props: Props) => {
  const { t: t } = useTranslation("common");
  return (
    <Container>
      <Title level={3}>{t("introduce")}</Title>
      <Row>
        <Col span={16}>
          <Space direction="vertical">
            <Paragraph>{props.course.achievementDes || "Good"}</Paragraph>
          </Space>
        </Col>
      </Row>
    </Container>
  );
};
export default CourseCardPopover;
