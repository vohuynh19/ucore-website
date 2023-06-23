import { PropsWithChildren } from "react";
import { Layout } from "antd";

import useAppStore from "stores/useAppStore";

import { Footer, Header, NavigationSider } from "ui/organisms";

import { StyledContent, StyledFooter, StyledHeader } from "./styled";

const NavigationLayout = ({ children }: PropsWithChildren) => {
  const { isHiddenNav, toggleNav } = useAppStore((state) => ({
    isHiddenNav: state.isHiddenNav,
    toggleNav: state.toggleNav,
  }));

  return (
    <Layout>
      <Layout>
        <StyledHeader data-aos="fade-down">
          <Header />
        </StyledHeader>

        <StyledContent>{children}</StyledContent>

        <StyledFooter data-aos="fade-up" data-aos-offset="300">
          <Footer />
        </StyledFooter>
      </Layout>

      <NavigationSider collapsed={isHiddenNav} closeHandler={toggleNav} />
    </Layout>
  );
};

export default NavigationLayout;
