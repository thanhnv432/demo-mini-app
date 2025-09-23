export type ButtonType = {
  onClick: () => void
  size: "mini" | "small" | "middle" | "large"
  color: "primary" | "success" | "danger" | "warning"
  fill: "none" | "solid" | "outline"
  text: string
}