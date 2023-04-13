import { DefaultTheme } from "styled-components";
import { COLORS } from "../src/constants";
import { roboto } from "./global";

export const theme = {
  colors: {
    primary: COLORS.PURPLE_1,
    secondary: COLORS.BLACK_2,
    white: COLORS.WHITE_1,
  },
};

export const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary,
    fontFamily: roboto.style.fontFamily,
  },
};
