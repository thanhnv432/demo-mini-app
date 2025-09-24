import { Footer } from "antd-mobile"
import "./style.css"

export default function FooterComp() {
  return (
    <Footer
      links={[
        {
          text: "Home",
          href: "/",
        },
        {
          text: "History",
          href: "/history",
        },
        {
          text: "About",
          href: "/about",
        },
        {
          text: "Profile",
          href: "/profile",
        },
      ]}
    ></Footer>
  )
}
