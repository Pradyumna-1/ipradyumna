import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material"
import { CommonProps } from "../App.props"
import { BlueSpan } from "../styles/styledComponents"
import { aboutData } from "../utils/data"
import SchoolIcon from "@mui/icons-material/School"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import { Player } from "@lottiefiles/react-lottie-player"
const About = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} my={3}>
          <Typography variant="h4" textAlign={"center"}>
            Let Me <BlueSpan>Introduce Myself</BlueSpan>
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Player
            src={
              "https://lottie.host/49f9657b-0967-40e8-a5cf-4a8835262ff8/3DV7zJE7j0.json"
            }
            autoplay
            loop
            className="lottie-player"
          />
        </Grid>
        <Grid item md={7}>
          <Typography>{aboutData.summary}</Typography>
          <Stack direction={"row"} gap={3} py={3}>
            <Box sx={{ flex: 1 }}>
              <Paper elevation={3} sx={{ p: 2, height: 1 }}>
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
                <Typography
                  fontSize={"1.125rem"}
                  fontWeight={"bold"}
                  gutterBottom
                >
                  {aboutData?.education?.title}
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
              <Paper elevation={3} sx={{ p: 2, height: 1 }}>
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
