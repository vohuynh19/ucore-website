import { Col, Row } from "antd";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";

import { useAppStore } from "stores";
import { IMAGES_URL, API_HOST, PAGE_ROUTES } from "@constants";
import { useExchangeToken } from "hooks";
import { API_ENDPONTS } from "src/infra/https";

import { Button, Cart, SizeBox } from "ui/atoms";
import { HeaderMenu } from "ui/molecules";

import { HeaderRightContainer, MenuContainer, Container } from "./styled";

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { mutate: exchangeTokenMutate } = useExchangeToken();

  const { toggleNav } = useAppStore((state) => ({
    toggleNav: state.toggleNav,
  }));

  const removeQueryParam = useCallback(
    (delParams: string[]) => {
      const { pathname, query }: any = router;
      const params = new URLSearchParams(query);
      delParams.forEach((param) => params.delete(param));

      router.replace({ pathname, query: params.toString() }, undefined, {
        shallow: true,
      });
    },
    [router]
  );

  useEffect(() => {
    const { code, email } = router.query;
    if (code && email)
      exchangeTokenMutate(
        { code, email },
        {
          onSuccess: () => {
            removeQueryParam(["code", "email"]);
          },
        }
      );
  }, [exchangeTokenMutate, router.query, removeQueryParam]);

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
            <Link
              href={`${API_HOST}${API_ENDPONTS.LOGIN(window.location.href)}`}
            >
              <Button type="primary" size="large">
                {t("signIn")}
              </Button>
            </Link>
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
