import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { CommonProps } from "../App.props"
import Avatar from "@mui/material/Avatar"
import MotionBox from "../motion/MotionBox"
import { Box, Stack } from "@mui/material"

const Home = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid
        container
        sx={{
          minHeight: secHeight,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            gap={10}
            alignItems={"center"}
          >
            <Box
              sx={{
                textAlign: { xs: "center", sm: "initial" },
              }}
            >
              <Typography variant="h3" color={"text.secondary"}>
                Hi
                <span role="img" aria-label={"hi emoji"} className="wave">
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
                I'm a Front End Developer
              </Typography>
            </Box>
            <MotionBox
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                bounce: 0.3,
              }}
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
            </MotionBox>
          </Stack>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
