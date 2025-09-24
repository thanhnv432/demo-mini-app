import { Avatar, Badge, NavBar, Popover, Space, Toast } from "antd-mobile"
import { useLocation, useNavigate } from "react-router-dom"
import { LeftOutline, MoreOutline, AppOutline } from "antd-mobile-icons"
import { titleMap } from "routes/routes"

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === "/"
  const title = titleMap[pathname] || "Home"

  const actions = [
    { key: "a", text: "Nội dung A" },
    { key: "b", text: "Nội dung B" },
    { key: "c", text: "Nội dung C" },
  ]

  return (
    <NavBar
      backIcon={isHome ? null : <LeftOutline />}
      onBack={() => navigate(-1)}
      left={
        <Space align="center">
          <AppOutline />
          {!isHome && <span style={{ fontSize: 12 }}>Menu</span>}
        </Space>
      }
      right={
        <Space style={{ "--gap": "14px", alignItems: "center" }}>
          <Badge content=" " color="var(--adm-color-primary)">
            <Avatar src="https://placehold.co/15x15" />
          </Badge>

          {!isHome && (
            <Popover.Menu
              actions={actions}
              placement="bottom-end"
              onAction={(node) => {
                Toast.show({ content: `Bạn chọn: ${node.text}` })
              }}
              trigger="click"
            >
              <MoreOutline fontSize={20} />
            </Popover.Menu>
          )}
        </Space>
      }
      style={{
        borderBottom: "1px solid red",
      }}
    >
      {title}
    </NavBar>
  )
}
