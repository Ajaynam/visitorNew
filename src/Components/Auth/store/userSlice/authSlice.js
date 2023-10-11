import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile: '',
  password: '',
  role: 'Admin',
  isLogedIn: true
}

const authSlice = createSlice({
  name: ' ',
  initialState,
  reducers: {
    setMobile: (state, action) => {
      state.mobile = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setRole: (state, action) => {
      state.role = action.payload
    },
    updateState: (state, action) => {
      console.log(action.payload)
      state.isLogedIn = action.payload
    },
    logoutUser: (state, action) => {
      state.mobile = '',
      state.password = '',
      state.role = '',
      state.isLogedIn = false
    }
  }
})

export const { setMobile, setPassword, setRole, updateState, logoutUser } = authSlice.actions;
export default authSlice.reducer;