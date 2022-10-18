import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  suppliers: [],
}

const supplierSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
})

export const {} = supplierSlice.actions
export default supplierSlice.reducer
