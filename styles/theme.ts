import { DefaultTheme } from "styled-components";
import { COLORS } from "../src/constants";
import { roboto } from "./global";

const theme: DefaultTheme = {
  colors: {
    primary: COLORS.PURPLE_1,
    secondary: COLORS.BLACK_2,
  },
};

export const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary,
    fontFamily: roboto.style.fontFamily,
  },
};

export default theme;
