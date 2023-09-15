import { Avatar, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { CommonProps } from "../App.props"

const Home = ({ style, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container alignItems={"center"} sx={{ ...style }}>
        <Grid item sm p={2} sx={{ textAlign: { xs: "center", sm: "right" } }}>
          <Typography variant="h3" color={"text.secondary"}>
            Hi
            <span role="img" aria-label={"hi emoji"} style={{ margin: "0 0 15px 5px" }}>
              {String.fromCodePoint(0x1f44b)}
            </span>
          </Typography>
          <Typography variant="h3" color={"text.secondary"}>
            My name is
          </Typography>
          <Typography variant="h3" color={"text.secondary"}>
            Nilkanth Patadiya
          </Typography>
          <Typography variant="h3" color={"text.secondary"}>
            I build things for web
          </Typography>
        </Grid>
        <Grid item sm p={2} m={"0 auto"} sx={{ order: { xs: -1, sm: 0 } }}>
          <Avatar
            alt="Nilkanth Patadiya"
            src="/profile-pic.jpg"
            sx={{
              width: 280,
              height: 280,
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, #E70FAA, #00C0FD) border-box",
              borderRadius: "50%",
              border: "7px solid transparent",
            }}
          ></Avatar>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
