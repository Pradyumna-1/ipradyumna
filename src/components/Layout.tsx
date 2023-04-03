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
import { LightTooltip } from "../styles/commom.styles"
import { ColorModeContext } from "../contexts/commonContexts"
import { useDimensions } from "../hooks/useDimentions"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import About from "./About"
import ScrollToTop from "./ScrollToTop"

const Layout = () => {
  const drawerWidth = 240
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]
  const navIcons = [<HomeIcon />, <PersonIcon />, <HandymanIcon />, <LayersIcon />, <CallIcon />]

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const colorMode = React.useContext(ColorModeContext)
  const theme = useTheme()
  const appBarRef = React.useRef(null)
  const { height } = useDimensions(appBarRef)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  return (
    <>
      {/* For large screens */}
      <AppBar
        position="fixed"
        color="inherit"
        component="nav"
        ref={appBarRef}
        sx={{ px: { xs: 0, sm: 4 } }}
      >
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
          <WorkTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h5" fontFamily={"Lucida Handwriting"} color="primary">
            Portfolio
          </Typography>
          <Stack direction={"row"} spacing={1} ml={3} sx={{ display: { xs: "none", sm: "block" } }}>
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
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Github Profile">
              <IconButton color="primary" href="https://github.com/Nilkanth-Patadiya">
                <GitHubIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Change theme">
              <IconButton color="primary" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeIcon />}
              </IconButton>
            </LightTooltip>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      {/* For small screens */}
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
        <Home style={{ height: `calc(100vh - ${height}px)` }} />
        <About style={{ height: `calc(100vh - ${height}px)` }} />
        <Skills style={{ height: `calc(100vh - ${height}px)` }} />
        <Projects style={{ height: `calc(100vh - ${height}px)` }} />
        <Contact style={{ height: `calc(100vh - ${height}px)` }} />
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
