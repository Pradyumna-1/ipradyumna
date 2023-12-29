import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import LaptopWindowsTwoToneIcon from "@mui/icons-material/LaptopWindowsTwoTone"
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
import { LightTooltip } from "../styles/styledComponents"
import { useDimensions } from "../hooks/useDimentions"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import About from "./About"
import ScrollToTop from "../motion/ScrollToTop"
import {
  navItems,
  drawerWidth,
  linkedInProfile,
  githubProfile,
} from "../utils/constants"
import { useColorMode } from "../providers/ColorModeProvider"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Container from "@mui/material/Container"
import Fab from "@mui/material/Fab"

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
  const secHeight = React.useMemo(() => `calc(100vh - ${height}px)`, [height])

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
          <LaptopWindowsTwoToneIcon fontSize="large" color="primary" />
          <Typography
            variant="h5"
            fontFamily={"Lucida Handwriting"}
            color="primary"
          >
            &lt;nilkanth /&gt;
          </Typography>
          <Stack
            direction={"row"}
            spacing={1}
            ml={3}
            sx={{ display: { xs: "none", md: "initial" } }}
          >
            {navItems.map((item, index) => (
              <Button key={index} href={`#${item}`} sx={{ fontSize: "1rem" }}>
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
                href={linkedInProfile}
              >
                <LinkedInIcon />
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Github Profile">
              <IconButton
                color="primary"
                href={githubProfile}
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
      <Container sx={{ "&>section": { scrollMarginTop: `${height}px` } }}>
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
