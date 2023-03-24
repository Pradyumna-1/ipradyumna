import { PaletteMode, ThemeOptions } from "@mui/material"

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      mode,
      primary: { main: "#03a9f4" },
      ...(mode === "light"
        ? {
            // palette values for light mode
            text: {
              primary: "#666666",
              secondary: "#42446E",
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: "#191919",
              paper: "#191919",
            },
            text: {
              primary: "#A7A7A7",
              secondary: "#CCCCCC",
            },
          }),
    },
    typography: {
      fontFamily: "Graphik",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  }
}
