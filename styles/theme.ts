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
    text: COLORS.WHITE_1,
    textSecondary: COLORS.GREY_2,
    textPrimarySecondary: COLORS.BLACK_1,
    textDarkPrimary: COLORS.PURPLE_2,
    linearGradientBg: `linear-gradient(180deg, #EAF1F880 30%, #EAF1F800 100%)`,
    secondaryBg: COLORS.GREY_5,
  },
  utils: {
    pxToCalc: pxToCalc,
  },
};

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: theme.colors.primary,
    fontFamily: roboto.style.fontFamily,
    borderRadius: 8,
  },
  components: {
    Layout: {
      colorBgHeader: "white",
    },
  },
};
