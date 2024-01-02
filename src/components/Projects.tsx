import { CommonProps } from "../App.props"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { projectData } from "../utils/data"
import GitHubIcon from "@mui/icons-material/GitHub"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { BlueSpan } from "../styles/styledComponents"
import MotionCard from "../motion/MotionCard"

const Projects = ({ secHeight, navID }: CommonProps) => {
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
            Personal <BlueSpan>Projects</BlueSpan>
          </Typography>
        </Grid>
        <Grid item container spacing={5}>
          {projectData?.map(
            ({ name, description, githubURL, projectURL, imgURL }, i) => (
              <Grid item key={name} xs={12} sm={6} md={4}>
                <MotionCard
                  initial={{ height: 0, opacity: 0, scale: 1 }}
                  whileInView={{
                    height: "100%",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      delay: i * 0.5,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    "&:hover": {
                      boxShadow: (theme) =>
                        `0px 0px 8px 8px ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <CardMedia
                    component={"img"}
                    sx={{ aspectRatio: "320 / 143" }}
                    image={imgURL}
                    title={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-evenly" }}>
                    <Button
                      disabled={!Boolean(projectURL)}
                      href={projectURL}
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      startIcon={<OpenInNewIcon />}
                    >
                      Live Preview
                    </Button>
                    <Button
                      href={githubURL}
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      View Code
                    </Button>
                  </CardActions>
                </MotionCard>
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </section>
  )
}

export default Projects
