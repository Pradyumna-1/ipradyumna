import { PaletteMode, SxProps, Theme } from "@mui/material"

export interface CommonProps {
  style?: SxProps<Theme>
  navID: string
}

export interface ColorModeProviderProps {
  mode: PaletteMode
  toggleColorMode: () => void
}
