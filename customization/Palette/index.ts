import { createTheme } from "@mui/material/styles";
import { cyan, red } from "@mui/material/colors";
import { BREAK_POINTS, SPACING, WHITE_COLOR } from "./config";

export const Theme = createTheme({
  palette: {
    primary: {
      light: cyan[200],
      main: cyan[500],
      dark: cyan[800],
      contrastText: WHITE_COLOR,
    },
    secondary: {
      light: red[200],
      main: red[500],
      dark: red[800],
      contrastText: WHITE_COLOR,
    },
    contrastThreshold: 3,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: SPACING,
  breakpoints: {
    values: BREAK_POINTS,
  },
});
