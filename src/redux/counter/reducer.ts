import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  count: number
}

const initialState: SliceState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('%c [ reducers increment ]', 'font-size:13px; background:pink; color:#bf2c9f;')
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
