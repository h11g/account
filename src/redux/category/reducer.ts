import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'src/types/category'

interface CategoryState {
  categories: Category[]
}

const initialState: CategoryState = {
  categories: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategory: (state) => state,
    getCategorySuccess: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    },
  },
})

export const { getCategory, getCategorySuccess } = categorySlice.actions
export default categorySlice.reducer
