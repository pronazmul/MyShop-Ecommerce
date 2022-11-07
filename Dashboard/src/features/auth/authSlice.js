import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: undefined,
  roles: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user
      state.roles = action.payload.roles
    },
    userUpdate: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
    userLoggedOut: (state) => {
      state.user = undefined
      state.roles = []
    },
  },
})

export const { userLoggedIn, userLoggedOut, userUpdate } = authSlice.actions
export default authSlice.reducer
