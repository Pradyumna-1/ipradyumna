import { TooltipProps, Tooltip, tooltipClasses, styled } from "@mui/material"

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#3e5060eb",
    color: "#fff",
    fontSize: "0.75rem",
  },
}))
