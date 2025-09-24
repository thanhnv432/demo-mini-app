import { SafeArea } from "antd-mobile"
import FooterComp from "components/footer"
import Header from "components/header"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#ace0ff" }}>
        <SafeArea position="top" />
      </div>
      <Header />

      {/* Content */}
      <div style={{ flex: 1, padding: 16 }}>
        <Outlet />
      </div>

      <SafeArea position="bottom" />
      <div style={{ background: "#ffcfac" }}>
        <SafeArea position="bottom" />
      </div>
      <FooterComp />
    </div>
  )
}
