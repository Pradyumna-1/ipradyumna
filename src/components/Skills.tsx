import { CommonProps } from "../App.props"
import { skillData } from "../utils/data"
import MotionStack from "../motion/MotionStack"
import { BlueSpan } from "../styles/styledComponents"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Skills = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid
        container
        sx={{
          minHeight: secHeight,
          alignContent: "flex-start",
        }}
      >
        <Grid item xs={12} py={3}>
          <Typography variant="h4" textAlign={"center"}>
            My <BlueSpan>Skills</BlueSpan>
          </Typography>
        </Grid>
        <Grid item container spacing={2}>
          {skillData?.map(({ name, imgURL }, i) => (
            <Grid item key={name} xs={6} sm={4} md={3} lg={2}>
              <MotionStack
                gap={1}
                sx={{
                  height: 1,
                  p: 1,
                  "&:hover": {
                    boxShadow: (theme) =>
                      `0px 0px 4px 4px ${theme.palette.primary.main}`,
                  },
                }}
                initial={{ opacity: 0, y: 20, x: -20 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: { delay: i * 0.1 },
                }}
                viewport={{ once: true }}
              >
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
                      maxInlineSize: "80%",
                      blockSize: "auto",
                      objectFit: "contain",
                    }}
                    src={imgURL}
                    alt={name}
                  />
                </Box>
                <Typography variant="h6" textAlign={"center"}>
                  {name}
                </Typography>
              </MotionStack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  )
}

export default Skills
