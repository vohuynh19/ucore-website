import { Layout } from "antd";
import { PropsWithChildren } from "react";

import useAppStore from "src/stores/useAppStore";

import { Footer, Header } from "ui/organisms";
import {
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledSider,
} from "./styled";

const NavigationLayout = ({ children }: PropsWithChildren) => {
  const { isHiddenNav } = useAppStore((state) => ({
    isHiddenNav: state.isHiddenNav,
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
        Hello
      </StyledSider>
    </Layout>
  );
};

export default NavigationLayout;
