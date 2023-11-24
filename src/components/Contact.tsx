import {
  Grid,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItem,
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
      <Grid container sx={{ minHeight: secHeight, alignItems: "flex-start" }}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign={"center"} my={3}>
            Contact
          </Typography>
        </Grid>
        <Grid item container alignItems={"center"} justifyContent={"center"}>
          <Grid item>
            <List sx={{ bgcolor: "background.paper" }}>
              <ListItemButton href={`mailto:${emailID}`}>
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
              <ListItem>
                <ListItemAvatar>
                  <CustomAvatar>
                    <LocationOnIcon fontSize="large" />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ pl: 2, variant: "h6" }}
                  primary={myAddress}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Contact
