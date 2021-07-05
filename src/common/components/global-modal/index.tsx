import React from 'react'
import { Modal } from 'antd'
import { useAppSelector, useAppDispatch } from 'src/hooks'
import { hideModal } from 'src/redux/global-modal/reducer'

export const GlobalModal = () => {
  const { title, visible, okText, cancelText, onCancel, onOk, content, width, footer } = useAppSelector(
    (state) => state.globalModal
  )
  const dispatch = useAppDispatch()

  const handleCancel = () => {
    dispatch(hideModal())
  }

  return (
    <Modal
      title={title}
      visible={visible}
      width={width}
      okText={okText}
      cancelText={cancelText}
      onCancel={onCancel || handleCancel}
      onOk={onOk}
      destroyOnClose
      footer={footer}
    >
      {content}
    </Modal>
  )
}
