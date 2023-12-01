import {
  Grid,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
  Link,
} from "@mui/material"
import { CommonProps } from "../App.props"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import { emailID, linkedInProfile, myAddress } from "../utils/constants"
import { CustomAvatar } from "../styles/styledComponents"
const Contact = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} py={3} textAlign={"center"}>
          <Typography variant="h4">Let's Get In Touch</Typography>
          <Typography mt={1}>
            Have a <Link underline="none">Question</Link> on your mind??
          </Typography>
          <Typography>
            Or want a copy of my <Link underline="none">résumé</Link>? Contact
            me using below links.
          </Typography>
        </Grid>
        <Grid item container alignItems={"center"} justifyContent={"center"}>
          <Grid item sx={{ bgcolor: "background.paper" }}>
            <List>
              <ListItemButton
                href={`mailto:${emailID}`}
                sx={{
                  border: 3,
                  borderRadius: 2,
                  borderColor: "transparent",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemAvatar>
                  <CustomAvatar>
                    <EmailIcon fontSize="large" />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ pl: 2, variant: "h6" }}
                  primary={emailID}
                />
              </ListItemButton>
              <ListItemButton
                href={linkedInProfile}
                target="_blank"
                rel="noopener"
                sx={{
                  border: 3,
                  borderRadius: 2,
                  borderColor: "transparent",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemAvatar>
                  <CustomAvatar>
                    <LinkedInIcon fontSize="large" />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ pl: 2, variant: "h6" }}
                  primary="LinkedIn Profile"
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  border: 3,
                  borderRadius: 2,
                  borderColor: "transparent",
                  "&:hover": {
                    borderColor: "primary.main",
                    cursor: "initial",
                  },
                }}
              >
                <ListItemAvatar>
                  <CustomAvatar>
                    <LocationOnIcon fontSize="large" />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ pl: 2, variant: "h6" }}
                  primary={myAddress}
                />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Contact
