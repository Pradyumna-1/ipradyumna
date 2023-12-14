import { Grid, Typography } from "@mui/material"
import { CommonProps } from "../App.props"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import { projectData } from "../utils/data"
import GitHubIcon from "@mui/icons-material/GitHub"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { BlueSpan } from "../styles/styledComponents"

const Projects = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} my={2}>
          <Typography variant="h4" textAlign={"center"}>
            Personal <BlueSpan>Projects</BlueSpan>
          </Typography>
        </Grid>
        <Grid item container spacing={5}>
          {projectData?.map(({ name, description, githubURL, projectURL }) => (
            <Grid item key={name} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  "&:hover": {
                    boxShadow: "0px 0px 5px 5px #3ea6ff",
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 160 }}
                  image="/Rectangle.png"
                  title="green iguana"
                />
                <CardContent sx={{ pb: 0 }}>
                  <Typography gutterBottom variant="h6">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-evenly" }}>
                  <Button
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  )
}

export default Projects
