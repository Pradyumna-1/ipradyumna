import { Grid, Typography } from "@mui/material"
import { CommonProps } from "../App.props"

const About = ({ style, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container alignItems={"center"} sx={{ ...style }}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign={"center"}>
            About
          </Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default About
