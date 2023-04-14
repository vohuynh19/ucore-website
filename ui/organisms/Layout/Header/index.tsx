import { Button, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import TranslateIcon from "@mui/icons-material/Translate";

import { PAGE_ROUTES } from "@constants";
import IMAGES_URL from "@constants/images";

import { Container, theme } from "styles";
import { Cart } from "ui/atoms";
import { HeaderMenu } from "ui/molecules";
import { HeaderRightContainer, MenuContainer } from "./styled";
import SizeBox from "ui/atoms/SizeBox";
import MenuIcon from "@mui/icons-material/Menu";
import useAppStore from "src/stores/useAppStore";
const Header = () => {
  const { t } = useTranslation("common");

  const { toggleNav } = useAppStore((state) => ({
    toggleNav: state.toggleNav,
  }));

  return (
    <Container>
      <Row align="middle">
        <Col xs={20} md={6} lg={3}>
          <Link href={PAGE_ROUTES.HOME} style={{ width: 75, height: 75 }}>
            <div style={{ width: 75, height: 75 }}>
              <Image alt="logo" src={IMAGES_URL.LOGO} width={75} height={75} />
            </div>
          </Link>
        </Col>

        <Col xs={0} md={12} lg={16}>
          <HeaderMenu />
        </Col>

        <Col xs={0} md={6} lg={5}>
          <HeaderRightContainer>
            <Button type="text" icon={<TranslateIcon />} />
            <SizeBox width={16} />
            <Cart cartItemNumber={0} />
            <SizeBox width={16} />
            <Button type="primary" size="large">
              {t("signIn")}
            </Button>
          </HeaderRightContainer>
        </Col>

        <Col xs={4} md={0} lg={0}>
          <HeaderRightContainer>
            <MenuContainer onClick={toggleNav}>
              <MenuIcon fontSize="large" />
            </MenuContainer>
          </HeaderRightContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
