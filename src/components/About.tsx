import { Grid, Typography } from "@mui/material"
import { CommonProps } from "../App.props"

const About = ({ style, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container alignItems={"center"} sx={{ ...style }}>
        <Grid item>
          <Typography variant="h1" textAlign={"center"}>
            About
          </Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default About
