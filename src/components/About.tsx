import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import { CommonProps } from "../App.props"
import { BlueSpan } from "../styles/styledComponents"
import { aboutData } from "../utils/data"

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
          <Typography>{aboutData}</Typography>
          <Stack direction={"row"} gap={3} py={3}>
            <Box sx={{ flex: 1 }}>
              <Paper elevation={3} sx={{ minHeight: 200, p: 2 }}>
                <Typography variant="h6">
                  <span
                    role="img"
                    aria-label={"hi emoji"}
                    style={{ margin: "0 0 15px 5px" }}
                  >
                    {String.fromCodePoint(0x1f3eb)}
                  </span>{" "}
                  Education
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Paper elevation={3} sx={{ minHeight: 200, p: 2 }}>
                <Typography variant="h6">
                  <span
                    role="img"
                    aria-label={"hi emoji"}
                    style={{ margin: "0 0 15px 5px" }}
                  >
                    {String.fromCodePoint(0x1f3eb)}
                  </span>{" "}
                  Certifications
                </Typography>
              </Paper>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </section>
  )
}

export default About
