import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material"
import { CommonProps } from "../App.props"
import { BlueSpan } from "../styles/styledComponents"
import { aboutData } from "../utils/data"
import SchoolIcon from "@mui/icons-material/School"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
const About = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} my={3}>
          <Typography variant="h4" textAlign={"center"}>
            Let Me <BlueSpan>Introduce Myself</BlueSpan>
          </Typography>
        </Grid>
        <Grid item md={5}></Grid>
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
                <Typography>{aboutData?.education?.subtitle}</Typography>
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
