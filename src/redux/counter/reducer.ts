import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  count: number
}

const initialState: SliceState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementAsync: (state) => state,
    decrementAsync: (state) => state,
  },
})

export const { increment, decrement, incrementAsync, decrementAsync } = counterSlice.actions

export default counterSlice.reducer
