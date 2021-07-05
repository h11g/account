import { ReactNode } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'

interface SliceState {
  title?: string
  visible?: boolean
  okText?: ReactNode
  cancelText?: ReactNode
  onCancel?: () => void
  onOk?: () => void
  content: ReactNode
  width?: string | number
  footer?: ReactNode | null
}

const initialState: SliceState = {
  title: '',
  visible: false,
  content: '',
}

const modalSlice = createSlice({
  name: 'globalModal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<SliceState>) => {
      state = {
        ...state,
        ...action.payload,
        visible: true,
      }
      return state
    },
    hideModal: (state) => {
      state = {
        ...initialState,
        visible: false,
      }
      return state
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions
export default modalSlice.reducer
