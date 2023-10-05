import { Box, Grid, Stack, Typography } from "@mui/material"
import { CommonProps } from "../App.props"
import { skillData } from "../utils/data"

const Skills = ({ style, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container alignItems={"center"} justifyContent={"flex-start"} sx={{ ...style }}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign={"center"}>
            My Skills
          </Typography>
        </Grid>
        {skillData?.map(({ name, imgURL }) => (
          <Grid item key={name} xs={6} sm={4} md={3} lg={2}>
            <Stack gap={1} sx={{ height: 1 }}>
              <Box
                sx={{
                  height: 80,
                  width: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  sx={{
                    width: "auto",
                    maxWidth: "75%",
                    height: "auto",
                    maxHeight: "80%",
                  }}
                  src={imgURL}
                  alt={name}
                />
              </Box>
              <Typography variant="h6" textAlign={"center"}>
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Skills
