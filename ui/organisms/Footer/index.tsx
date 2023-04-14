import { Col, Row } from "antd";
import styled from "styled-components";
import { FooterDescription, FooterMenu } from "ui/molecules";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBg};
  padding: 40px 80px;
`;

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col span={12}>
          <FooterDescription />
        </Col>

        <Col span={12}>
          <FooterMenu />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
