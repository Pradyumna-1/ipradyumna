import { Avatar, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { CommonProps } from "../App.props"

const Home = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container alignItems={"center"} sx={{ minHeight: secHeight }}>
        <Grid
          item
          sm
          p={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div>
            <Typography variant="h3" color={"text.secondary"}>
              Hi
              <span
                role="img"
                aria-label={"hi emoji"}
                style={{ margin: "0 0 15px 5px" }}
              >
                {String.fromCodePoint(0x1f44b)}
              </span>
            </Typography>
            <Typography variant="h3" color={"text.secondary"}>
              My name is
            </Typography>
            <Typography
              variant="h3"
              color={"text.secondary"}
              className="gradientName"
            >
              Nilkanth Patadiya
            </Typography>
            <Typography variant="h3" color={"text.secondary"}>
              I build things for web
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          sm
          p={2}
          sx={{
            order: { xs: -1, sm: 0 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
              "&::after": { filter: "blur(20px)" },
            }}
          ></Avatar>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
