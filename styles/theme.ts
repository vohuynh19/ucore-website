import { ThemeConfig } from "antd";
import { COLORS } from "../src/constants";
import { roboto } from "./global";
import { pxToCalc } from "./helper";

export const theme = {
  colors: {
    primary: COLORS.PURPLE_1,
    secondary: COLORS.BLACK_2,
    white: COLORS.WHITE_1,
    contrastText: COLORS.WHITE_1,
    primaryBg: COLORS.PURPLE_3,
    success: COLORS.GREEN_1,
    error: COLORS.RED_1,
    warning: COLORS.YELLOW_1,
  },
  utils: {
    pxToCalc: pxToCalc,
  },
};

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: theme.colors.primary,
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    Layout: {
      colorBgHeader: "white",
    },
  },
};
