import { Layout } from "antd";
import styled from "styled-components";

const { Sider, Content, Header, Footer } = Layout;

export const StyledSider = styled(Sider)`
  && {
    position: fixed !important;
    left: 0px !important;
    height: 100% !important;
  }
`;

export const StyledContent = styled(Content)`
  && {
    min-height: 50vh !important;
    background-color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const StyledHeader = styled(Header)``;

export const StyledFooter = styled(Footer)`
  && {
    min-height: 50vh !important;
  }
`;
