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
  myProfile: User;
};

const UserInstroductionPopover = (props: Props) => {
  const { t: t } = useTranslation("common");
  return (
    <Container>
      <Title level={3}>{t("introduce")}</Title>
      <Row>
        <Col span={16}>
          <Space direction="vertical">
            <Paragraph>
              {props.myProfile?.profileStory || "Tell other dudes your story"}
            </Paragraph>

            <Space>
              <InfoIcon color="action" />
              {/* <Text strong>instructor</Text> */}
              <Text>
                {props.myProfile?.profileTitles ||
                  "Người hướng dẫn - Lập trình viên"}
              </Text>
            </Space>
          </Space>
        </Col>
      </Row>
    </Container>
  );
};
export default UserInstroductionPopover;
