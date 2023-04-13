import IMAGES_URL from "@constants/images";
import { HeaderMenu, ProfileMenu } from "ui/molecules";
import { Col, Row } from "antd";
import Image from "next/image";

const Header = () => {
  return (
    <Row>
      <Col span={8}>
        <Image
          style={{ backgroundColor: "red" }}
          alt="logo"
          src={IMAGES_URL.LOGO}
          width={75}
          height={75}
        />
      </Col>

      <Col span={8}>
        <HeaderMenu />
      </Col>

      <Col span={8} style={{ backgroundColor: "yellow" }}>
        <ProfileMenu />
      </Col>
    </Row>
  );
};

export default Header;
