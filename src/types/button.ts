import { ButtonColor, ButtonShape, ButtonSize } from "constants/constants"

export type ButtonType = {
  onClick: () => void
  size: ButtonSize
  color: ButtonColor
  fill: ButtonShape
  text: string
}