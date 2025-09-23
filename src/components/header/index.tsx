import { NavBar, Toast } from "antd-mobile"

export default function Header() {
  return (
    <NavBar
      backIcon={false}
      style={{
        borderBottom: "1px solid red",
      }}
    >
      Header
    </NavBar>
  )
}
