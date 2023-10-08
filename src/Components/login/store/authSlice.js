import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 username: '',
 password: '',
 role: '',
 isLogedIn:false
}

const authSlice = createSlice({
 name: 'authSlice',
 initialState,
 reducers: {
  updateState: (state, action) => {
   state.isLogedIn=!state.isLogedIn
  }
 }
})

export const { updateState } = authSlice.actions;
export default authSlice.reducer;