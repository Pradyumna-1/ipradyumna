import { PaletteMode } from "@mui/material"

export interface CommonProps {
  secHeight: string
  navID: string
}

export interface ColorModeProviderProps {
  mode: PaletteMode
  toggleColorMode: () => void
}

export interface Skill {
  name: string
  imgURL: string
}
