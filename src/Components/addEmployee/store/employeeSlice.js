import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  hostName: '',
  hostMobile: '',
  hostEmail: '',
  hostAddress: '',
  hostGender: '',
  hostPassword: '',
  hostRePassword: '',
  roleId: ''
}

const newEmployeeSlice = createSlice({
  name: 'newEmployee',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.hostName = action.payload
    },
    setMobile: (state, action) => {
      state.hostMobile = action.payload
    },
    setEmail: (state, action) => {
      state.hostEmail = action.payload
    },
    setAddress: (state, action) => {
      state.hostAddress = action.payload
    },
    setGender: (state, action) => {
      state.hostGender = action.payload
    },
    setPassword: (state, action) => {
      state.hostPassword = action.payload
    },
    setRePassword: (state, action) => {
      state.hostRePassword = action.payload
    },
    setRole: (state, action) => {
      state.roleId = action.payload
    },
    resetNewEmp: (state, action) => {
      state.hostName = ''
      state.hostMobile = ''
      state.hostEmail = ''
      state.hostAddress = ''
      state.hostGender = ''
      state.hostPassword = ''
      state.hostRePassword = ''
      state.roleId = ''
    }
  }
})

export const { setName, setMobile, setEmail, setAddress, setGender, setPassword, setRePassword, setRole, resetNewEmp } = newEmployeeSlice.actions;

export default newEmployeeSlice.reducer;