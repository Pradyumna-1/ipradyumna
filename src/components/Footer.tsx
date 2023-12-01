import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

const Footer = () => {
  return (
    <footer>
      <Divider />
      <Typography
        variant="h6"
        textAlign={"center"}
        sx={{ textShadow: "1px 1px black", p: 2 }}
      >
        Made with &#x1F496; by <Link underline="none">Nilkanth Patadiya</Link>
      </Typography>
    </footer>
  )
}

export default Footer
