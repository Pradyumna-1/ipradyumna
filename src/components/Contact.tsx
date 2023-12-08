import {
  Grid,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material"
import { CommonProps } from "../App.props"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import { emailID, linkedInProfile, myAddress } from "../utils/constants"
import { BlueSpan, CustomAvatar } from "../styles/styledComponents"
const Contact = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} py={3} textAlign={"center"}>
          <Typography variant="h4">
            Let's Get <BlueSpan>In Touch</BlueSpan>
          </Typography>
          <Typography mt={1}>
            Have a <BlueSpan>Question</BlueSpan> on your mind??
          </Typography>
          <Typography>
            Or want a copy of my <BlueSpan>résumé</BlueSpan>? Contact me using
            below links.
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
                  primary={"Send an Email"}
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
                  primary="Ping me on LinkedIn"
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
