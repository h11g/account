import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SliceState {
  userInfo: User | null
}

const initialState: SliceState = {
  userInfo: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo: (state) => state,
    getUserInfoSuccess: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload
    },
  },
})

export const { getUserInfo, getUserInfoSuccess } = userSlice.actions
export default userSlice.reducer
