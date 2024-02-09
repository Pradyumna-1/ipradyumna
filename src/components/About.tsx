import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Link from "@mui/material/Link"
import { CommonProps } from "../App.props"
import { BlueSpan } from "../styles/styledComponents"
import { aboutData } from "../utils/data"
import SchoolIcon from "@mui/icons-material/School"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import { Player } from "@lottiefiles/react-lottie-player"
import { Variants, m } from "framer-motion"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Theme } from "@mui/material/styles"

const About = ({ secHeight, navID }: CommonProps) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )
  let variants: Variants = isSmallScreen
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, x: 50 },
        whileInView: {
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        },
      }

  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} py={3}>
          <Typography variant="h4" textAlign={"center"}>
            Let Me <BlueSpan>Introduce Myself</BlueSpan>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Player
            src={
              "https://lottie.host/49f9657b-0967-40e8-a5cf-4a8835262ff8/3DV7zJE7j0.json"
            }
            autoplay
            loop
            className="lottie-player"
          />
        </Grid>
        <Grid item md={7} overflow={"hidden"}>
          <Typography
            variant="body1"
            component={m.p}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {aboutData.summary}
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: 2, md: 3 }}
            pt={2}
          >
            <Box sx={{ flex: 1 }}>
              <Paper variant="outlined" sx={{ p: 2, height: 1 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <SchoolIcon color="primary" fontSize="large" />
                  <Typography variant="h6">Education</Typography>
                </Box>
                <Typography fontWeight={"bold"} gutterBottom>
                  {aboutData?.education?.title} |{" "}
                  <BlueSpan>{aboutData?.education?.grade}</BlueSpan>
                </Typography>
                <Typography>
                  <Link
                    color={"inherit"}
                    underline="hover"
                    href="https://ldce.ac.in/"
                    target="_blank"
                    rel="noopener"
                  >
                    {aboutData?.education?.subtitle}
                  </Link>
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Paper variant="outlined" sx={{ p: 2, height: 1 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: 0.5,
                    alignItems: "center",
                  }}
                >
                  <WorkspacePremiumIcon color="primary" fontSize="large" />
                  <Typography variant="h6">Certifications</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  {aboutData?.badges?.map(({ imgURL, badgeURL }, i) => (
                    <Link
                      key={i}
                      underline="none"
                      href={badgeURL}
                      target="_blank"
                      rel="noopener"
                    >
                      <Box
                        component={"img"}
                        sx={{
                          width: 100,
                          height: "auto",
                        }}
                        src={imgURL}
                        alt={imgURL?.split(".")?.[0]}
                      />
                    </Link>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </section>
  )
}

export default About
