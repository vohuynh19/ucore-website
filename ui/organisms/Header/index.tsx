import IMAGES_URL from "@constants/images";
import { HeaderMenu, ProfileMenu } from "ui/molecules";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { Container } from "styles";
import Link from "next/link";
import { PAGE_ROUTES } from "@constants";
import { Cart } from "ui/atoms";

const Header = () => {
  return (
    <Container>
      <Row align="middle">
        <Col xs={12} md={6} lg={4}>
          <Link href={PAGE_ROUTES.HOME}>
            <Image alt="logo" src={IMAGES_URL.LOGO} width={75} height={75} />
          </Link>
        </Col>

        <Col xs={0} md={12} lg={16}>
          <HeaderMenu />
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Cart />
          <Button>Sign in</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
