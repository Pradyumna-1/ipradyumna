import Box, { BoxProps } from "@mui/material/Box"
import { motion } from "framer-motion"
import React from "react"

const Component = React.forwardRef((props: BoxProps, ref: any) => (
  <Box ref={ref} {...props} />
))

const MotionBox = motion(Component)

export default MotionBox
