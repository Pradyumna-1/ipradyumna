import { Avatar, Box, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { CommonProps } from "../App.props"

const Home = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid
        container
        alignItems={"center"}
        sx={{
          minHeight: secHeight,
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Grid
          item
          sm={6}
          p={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            textAlign: { xs: "center", sm: "initial" },
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
          sm={6}
          p={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 180, md: 280 },
              height: { xs: 180, md: 280 },
              borderRadius: "50%",
              "&::before,&::after": {
                content: '" "',
                position: "absolute",
                inset: "-10px",
                borderRadius: "inherit",
                background: "linear-gradient(#00C0FD, #E70FAA)",
                zIndex: -1,
              },
              "&::after": { filter: "blur(16px)" },
            }}
          >
            <Avatar
              alt="Nilkanth Patadiya"
              src="/profile-pic.jpg"
              sx={{
                width: 1,
                height: 1,
                borderRadius: "50%",
                objectFit: "fill",
              }}
            ></Avatar>
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
