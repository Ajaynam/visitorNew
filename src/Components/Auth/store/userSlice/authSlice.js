import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile: '',
  password: '',
  role: '',
  isLogedIn: false
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setMobile: (state, action) => {
      state.mobile=action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    updateState: (state, action) => {
      console.log(action.payload)
      state.isLogedIn = action.payload
    }
  }
})

export const { setMobile, setPassword, updateState } = authSlice.actions;
export default authSlice.reducer;