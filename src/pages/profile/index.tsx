import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd-mobile";
import { get } from "utils/axios";
import "./style.scss";
export default function Profile() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await get({ url: `/users/${id}` });
        if (response?.status === 200) {
          setUserInfo(response?.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (!id) return null;
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
          {!isLoading ? (
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
          ) : (
            <Skeleton animated className="customSkeleton" />
          )}
          {!isLoading ? (
            <div className="user-info">
              <p style={{ fontWeight: 600, fontSize: 18 }}>{userInfo?.name}</p>
              <p style={{ fontWeight: 500, fontSize: 16 }}>
                Description: {userInfo?.description}
              </p>
            </div>
          ) : (
            <Skeleton.Paragraph lineCount={5} animated />
          )}
        </div>
      ) : (
        <p>Not Found!!!</p>
      )}
    </div>
  );
}
