import { SafeArea } from "antd-mobile"
import FooterComp from "components/footer"
import Header from "components/header"
import { Outlet } from "react-router-dom"
import "./style.scss"

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div style={{ background: "#ace0ff" }}>
        <SafeArea position="top" />
      </div>
      <Header />

      {/* Content */}
      <div className="main-content" style={{ flex: 1, padding: 16 }}>
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
