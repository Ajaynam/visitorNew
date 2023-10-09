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
   console.log(action.payload)
   state.isLogedIn=action.payload
  }
 }
})

export const { updateState } = authSlice.actions;
export default authSlice.reducer;