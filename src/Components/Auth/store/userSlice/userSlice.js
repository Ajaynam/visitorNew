// // userSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     userData: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.userData = action.payload;
//     },
//     logoutUser: (state) => {
//         state.user = null;
//       },
//   },
//   selectUser: (state) => state.userData,
// });

// export const { setUser } = userSlice.actions;

// export const selectUser = (state) => state.user.userData;

// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.userData;

export default userSlice.reducer;
