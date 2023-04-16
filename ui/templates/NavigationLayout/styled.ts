import { Layout } from "antd";
import styled from "styled-components";

const { Sider, Content, Header, Footer } = Layout;

export const StyledSider = styled(Sider)`
  && {
    position: fixed !important;
    right: 0px !important;
    height: 100% !important;
    z-index: 10000;
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
    padding: 0 !important;
  }
`;

export const SiderContainer = styled.div``;

export const SiderProfileContainer = styled.div`
  padding: 8px 16px;
  .ant-btn {
    margin-top: 12px;
  }
`;
