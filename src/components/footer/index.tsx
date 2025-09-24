import { Badge, TabBar } from "antd-mobile"
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline
} from "antd-mobile-icons"
import { useLocation, useNavigate } from "react-router-dom"
import "./style.scss"

export default function FooterComp() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const tabs = [
    {
      key: "/",
      title: "Home",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "/history",
      title: "History",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "/about",
      title: "About",
      icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
      badge: "99+",
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={(value) => navigate(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
      ))}
    </TabBar>
  )
}
