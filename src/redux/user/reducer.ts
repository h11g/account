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
    getUserInfoSuccess: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload
    },
  },
})

export const { getUserInfoSuccess } = userSlice.actions
export default userSlice.reducer
