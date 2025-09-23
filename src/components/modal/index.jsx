import { Modal, Space, Toast } from "antd-mobile"
import Button from "components/button"

export default function ModalComp() {
  return (
    <Space direction="vertical" block>
      <Button
        color="primary"
        fill="outline"
        size="large"
        text="Open Modal"
        onClick={() =>
          Modal.confirm({
            content: "Are you sure?",
            confirmText: "Yes",
            cancelText: "No",
            onConfirm: async () => {
              Toast.show({
                icon: "success",
                content: "Accept",
                position: "bottom",
              })
            },
          })
        }
      />

      {/* <Button
        onClick={() => {
          Modal.show({
            content: "Show detail",
            closeOnMaskClick: true,
          })
        }}
      >
        Detail
      </Button> */}
    </Space>
  )
}
