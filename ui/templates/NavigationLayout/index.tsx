import { PropsWithChildren } from "react";
import { Layout } from "antd";
import { CloseOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import useAppStore from "stores/useAppStore";

import { HeaderMenu } from "ui/molecules";
import { Footer, Header } from "ui/organisms";
import { Button } from "ui/atoms";

import {
  SiderProfileContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledSider,
} from "./styled";

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
          <Button
            style={{ float: "right", marginBottom: 16 }}
            type="text"
            icon={<CloseOutlined />}
            onClick={toggleNav}
          />
          <Button isFullWidth size="large" type="primary">
            {t("signIn")}
          </Button>
          <Button isFullWidth size="large">
            {t("register")}
          </Button>
        </SiderProfileContainer>

        <HeaderMenu mode="vertical" onMenuPress={toggleNav} />
      </StyledSider>
    </Layout>
  );
};

export default NavigationLayout;
