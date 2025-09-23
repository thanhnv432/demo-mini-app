import "./App.css"
import Header from "components/header"
import FooterComp from "components/footer"
import Demo from "components/main"
import { SafeArea } from "antd-mobile"

function App() {
  return (
    <div style={{ background: "#fff" }}>
      <Header />
      <div className="main-content">
        <Demo />
      </div>
      <SafeArea position="bottom" />
      <FooterComp />
    </div>
  )
}

export default App
