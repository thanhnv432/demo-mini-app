import { Badge, TabBar } from "antd-mobile"
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons"
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom"

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
    {
      key: "/profile",
      title: "Profile",
      icon: <UserOutline />,
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
