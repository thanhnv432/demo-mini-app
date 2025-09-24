import { useEffect, useState } from "react"
import { TextArea, Card, Space } from "antd-mobile"
import { useCounterStore } from "store"
import { EyeOutline } from "antd-mobile-icons"
import { useNavigate } from "react-router-dom"
import Button from "components/button"
import ModalComp from "components/modal"
import { get } from "utils/axios"

export default function Home() {
  const [value, setValue] = useState("")
  const { count, increase, decrease } = useCounterStore()
  const [users, setUsers] = useState<any>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get({ url: "/users" })
        console.log("🚀 ~ fetchData ~ response:", response)
        if (response?.status === 200) {
          setUsers(response?.data)
        }
      } catch (error) {
        console.log("🚀 ~ Home ~ error:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="home" style={{ marginInline: 50 }}>
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

      <div>
        <h2 className="text-body-jp-lg">User list</h2>
        {users &&
          users?.map((user: any) => (
            <div
              key={user?.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <p>{user?.name}</p>
              <EyeOutline onClick={() => navigate(`/profile/${user?.id}`)} />
            </div>
          ))}
      </div>
    </div>
  )
}
