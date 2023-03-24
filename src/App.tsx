import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material"

import Layout from "./components/Layout"
import React from "react"
import { getDesignTokens } from "./styles/theme"
import { ColorModeContext } from "./contexts/commonContexts"

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark")
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        )
      },
    }),
    []
  )
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Layout />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
