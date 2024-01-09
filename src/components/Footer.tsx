import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import { BlueSpan } from "../styles/styledComponents"

const Footer = () => {
  return (
    <footer>
      <Divider />
      <Typography
        textAlign={"center"}
        sx={{ textShadow: "1px 1px black", p: 2 }}
      >
        Made with &#x1F496; by <BlueSpan>Nilkanth Patadiya</BlueSpan>
      </Typography>
    </footer>
  )
}

export default Footer
