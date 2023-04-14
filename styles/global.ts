import { Roboto } from "next/font/google";
import { createGlobalStyle, DefaultTheme } from "styled-components";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const GlobalStyled = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${roboto.style.fontFamily};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  // Antd button custom style
  .ant-btn{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .ant-btn.ant-btn-primary.ant-btn-lg{
    padding: 8px 24px !important;
    border-radius: 24px !important;
  }

  // Layout custom style
  .ant-layout-header{
    height: auto;
    padding-inline: 0;
  }
`;
