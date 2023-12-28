import Card, { CardProps } from "@mui/material/Card"
import { motion } from "framer-motion"
import React from "react"

const Component = React.forwardRef((props: CardProps, ref: any) => (
  <Card ref={ref} {...props} />
))

const MotionCard = motion(Component)

export default MotionCard
