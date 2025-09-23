import { useState } from "react"
import { TextArea, Card, Space } from "antd-mobile"
import Button from "components/button"
import "./styles.css"
import { useCounter, useCounterActions } from "store"
import ModalComp from "components/modal"

export default function Demo() {
  const [value, setValue] = useState("")
  const count = useCounter()
  const { increase, decrease } = useCounterActions()

  return (
    <div style={{ marginInline: 50 }} className="main-content">
      <Card title="Text Here">
        <TextArea
          value={value}
          onChange={setValue}
          showCount
          maxLength={100}
          placeholder="Enter your content..."
        />
      </Card>

      <Space direction="vertical" style={{ "--gap": "24px", marginBottom: "24px" }}>
        <Button
          size="middle"
          color="primary"
          fill="solid"
          text="Middle Button"
          onClick={() => console.log(3)}
        />
      </Space>
      <ModalComp />

      <div style={{ display: "flex", alignItems: "center" }}>
        <Button size="large" color="warning" fill="none" text="-" onClick={decrease} />
        <span style={{ fontSize: 20 }}>{count}</span>
        <Button size="large" color="warning" fill="none" text="+" onClick={increase} />
      </div>
    </div>
  )
}
