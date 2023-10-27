import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone"
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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { Box, Container, Drawer, Fab, useTheme } from "@mui/material"
import { LightTooltip } from "../styles/styledComponents"
import { useDimensions } from "../hooks/useDimentions"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import About from "./About"
import ScrollToTop from "./ScrollToTop"
import { navItems, drawerWidth } from "../utils/constants"
import { useColorMode } from "../providers/ColorModeProvider"

const Layout = () => {
  const navIcons = [
    <HomeIcon />,
    <PersonIcon />,
    <HandymanIcon />,
    <LayersIcon />,
    <CallIcon />,
  ]

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { toggleColorMode } = useColorMode()
  const theme = useTheme()
  const appBarRef = React.useRef(null)
  const { height } = useDimensions(appBarRef)
  const secHeight = `calc(100vh - ${height}px)`

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  return (
    <>
      {/* Navigation For large screens */}
      <AppBar
        position="fixed"
        color="transparent"
        component="nav"
        ref={appBarRef}
        sx={{ px: { xs: 0, md: 4 }, backdropFilter: "blur(14px)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <WorkTwoToneIcon fontSize="large" color="primary" />
          <Typography
            variant="h5"
            fontFamily={"Lucida Handwriting"}
            color="primary"
          >
            Portfolio
          </Typography>
          <Stack
            direction={"row"}
            spacing={1}
            ml={3}
            sx={{ display: { xs: "none", md: "initial" } }}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                href={`#${item}`}
                sx={{ fontSize: "1rem" }}
              >
                {item}
              </Button>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={1} ml={"auto"}>
            <LightTooltip title="LinkedIn Profile">
              <IconButton
                color="primary"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/nilkanthpatadiya/"
              >
                <LinkedInIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Github Profile">
              <IconButton
                color="primary"
                href="https://github.com/Nilkanth-Patadiya"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Change theme">
              <IconButton color="primary" onClick={toggleColorMode}>
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
      {/*Navigation For small screens */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "initial", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Stack
            spacing={3}
            sx={{
              py: 4,
              px: 2,
              width: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navItems.map((item, i) => (
              <Button
                key={i}
                onClick={handleDrawerToggle}
                href={`#${item.toLowerCase()}`}
                variant="outlined"
                startIcon={navIcons[i]}
                sx={{ width: 0.7, borderRadius: 20, py: 1 }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Drawer>
      </Box>
      <Container fixed>
        <Home secHeight={secHeight} navID={navItems[0]} />
        <About secHeight={secHeight} navID={navItems[1]} />
        <Skills secHeight={secHeight} navID={navItems[2]} />
        <Projects secHeight={secHeight} navID={navItems[3]} />
        <Contact secHeight={secHeight} navID={navItems[4]} />
      </Container>
      <ScrollToTop>
        <Fab size="medium" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </>
  )
}

export default Layout
