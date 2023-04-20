import { Col, Divider, Row } from "antd";
import styled from "styled-components";
import { getScaledText } from "styles";

const Container = styled.div`
  padding: 50px 10px 65px 10px;
  background-image: url("/images/marketplace-hero-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }

  h2 {
    ${getScaledText(32)}
    color: white;
    text-align: center;
  }
  p {
    color: white;
    text-align: center;
  }
`;

interface BannerTextBoxProps {
  title: string;
  content: string;
}

const BannerTextBox = ({ title, content }: BannerTextBoxProps) => {
  return (
    <Container>
      <Row>
        <Col span={24}>
          <h2>{title}</h2>
        </Col>
        <Col span={24}>
          <p>{content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerTextBox;
