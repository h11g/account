import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeType } from 'src/types'

interface SliceState {
  value: ThemeType
}

const initialState: SliceState = {
  value: ThemeType.DEFAULT,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.value = action.payload
    },
    updateTheme: (state) => state,
  },
})

export const { changeTheme, updateTheme } = themeSlice.actions

export default themeSlice.reducer
