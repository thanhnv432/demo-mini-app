import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "utils/axios"

export default function Profile() {
  const { id } = useParams()
  const [userInfo, setUserInfo] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get({ url: `/users/${id}` })
        if (response?.status === 200) {
          setUserInfo(response?.data)
        }
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error)
      }
    }
    fetchData()
  }, [id])

  if (!id) return null
  return (
    <div>
      <h1>Profile</h1>
      {userInfo ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={userInfo?.avatar}
            alt=""
            style={{
              width: 300,
              height: 300,
              objectFit: "cover",
              borderRadius: 1000,
            }}
          />
          <p style={{ fontWeight: 600, fontSize: 18 }}>{userInfo?.name}</p>
          <p style={{ fontWeight: 500, fontSize: 16 }}>Description: {userInfo?.description}</p>
        </div>
      ) : (
        <p>Not Found!!!</p>
      )}
    </div>
  )
}
