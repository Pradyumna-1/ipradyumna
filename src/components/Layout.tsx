import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"

import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"
import HandymanIcon from "@mui/icons-material/Handyman"
import PersonIcon from "@mui/icons-material/Person"
import LayersIcon from "@mui/icons-material/Layers"
import CallIcon from "@mui/icons-material/Call"
import { ColorModeContext } from "../App"
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material"
import { LightTooltip } from "../styles/commom.styles"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

const Layout = () => {
  const drawerWidth = 240
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]
  const navIcons = [
    <HomeIcon />,
    <PersonIcon />,
    <HandymanIcon />,
    <LayersIcon />,
    <CallIcon />,
  ]

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const colorMode = React.useContext(ColorModeContext)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  return (
    <>
      <AppBar position="fixed" color="transparent" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            fontFamily={"Lucida Handwriting"}
            // sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Portfolio
          </Typography>
          <Stack
            direction={"row"}
            spacing={1}
            ml={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                href={`#${item.toLowerCase()}`}
                sx={{ fontSize: "1rem" }}
              >
                {item}
              </Button>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={1} ml={"auto"}>
            <LightTooltip title="LinkedIn Profile">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Github Profile">
              <IconButton href="https://github.com/Nilkanth-Patadiya">
                <GitHubIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Change theme">
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>
            </LightTooltip>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <List sx={{ width: 1 }}>
              {navItems.map((item, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton href={`#${item.toLowerCase()}`}>
                    <ListItemIcon>{navIcons[i]}</ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  )
}

export default Layout
