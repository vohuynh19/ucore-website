import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";

import useAppStore from "stores/useAppStore";
import { PAGE_ROUTES } from "@constants";
import IMAGES_URL from "@constants/images";

import { Button, Cart, SizeBox } from "ui/atoms";
import { HeaderMenu } from "ui/molecules";

import { HeaderRightContainer, MenuContainer, Container } from "./styled";

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const { toggleNav } = useAppStore((state) => ({
    toggleNav: state.toggleNav,
  }));

  return (
    <Container>
      <Row align="middle">
        <Col xs={20} md={6} lg={3}>
          <Link href={PAGE_ROUTES.HOME} style={{ width: 75, height: 75 }}>
            <div style={{ width: 75, height: 75 }}>
              <Image
                alt="logo"
                src={IMAGES_URL.LOGO}
                width={75}
                height={75}
                priority
              />
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
            <Button
              type="primary"
              size="large"
              onClick={() => router.push(PAGE_ROUTES.LOGIN)}
            >
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
