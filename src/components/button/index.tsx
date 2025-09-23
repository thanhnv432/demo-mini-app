import { Button } from "antd-mobile"
import { ButtonType } from "types/button"

export default function ButtonComp(props: ButtonType) {
  const { size, color, fill, text, onClick } = props
  return (
    <Button size={size} color={color} fill={fill} onClick={() => onClick()}>
      {text}
    </Button>
  )
}
