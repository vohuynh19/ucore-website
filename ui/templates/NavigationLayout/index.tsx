import { Button, Image, Layout, Space } from "antd";
import { PropsWithChildren } from "react";
import { CloseOutlined } from "@mui/icons-material";

import useAppStore from "src/stores/useAppStore";

import { HeaderMenu } from "ui/molecules";
import { Footer, Header } from "ui/organisms";

import {
  SiderProfileContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledSider,
} from "./styled";
import { FullWidthButton } from "ui/atoms";
import { useTranslation } from "react-i18next";

const NavigationLayout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation("common");

  const { isHiddenNav, toggleNav } = useAppStore((state) => ({
    isHiddenNav: state.isHiddenNav,
    toggleNav: state.toggleNav,
  }));

  return (
    <Layout>
      <Layout>
        <StyledHeader>
          <Header />
        </StyledHeader>

        <StyledContent>{children}</StyledContent>

        <StyledFooter>
          <Footer />
        </StyledFooter>
      </Layout>

      <StyledSider
        trigger={null}
        collapsible
        collapsed={isHiddenNav}
        collapsedWidth={0}
        width="330px"
      >
        <SiderProfileContainer>
          <Button type="text" icon={<CloseOutlined />} onClick={toggleNav} />
          <FullWidthButton size="large" type="primary">
            {t("signIn")}
          </FullWidthButton>
          <FullWidthButton size="large">{t("register")}</FullWidthButton>
        </SiderProfileContainer>

        <HeaderMenu mode="vertical" onMenuPress={toggleNav} />
      </StyledSider>
    </Layout>
  );
};

export default NavigationLayout;
