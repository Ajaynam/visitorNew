 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const newBuyingAPI = 'http://localhost:8000/store/new-buying';

export const executeNewBuying = createAsyncThunk('executeBuying', async (newBuying) => {
  try {
    const response = await axios.post(newBuyingAPI, newBuying)
    return response.data
  } catch (error) {
    return error
  }
})

const initialState = {
  name:'',
  mobile:'',
  email:'',
  address:'',
  image:'',
  gender:'',
  identityType:'',
  identityNumber:'',
  visitDate:'',
  checkInTime:'',
  host:'',
  purpose:'',
  databaseResponse: {},
  loading: false,
  error: ''
}

const newVisitSlice = createSlice({
  name: 'newVisit',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setMobile: (state, action) => {
      state.mobile = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setAddress: (state, action) => {
      state.address=action.payload
    },
    setGender: (state, action) => {
      state.gender = action.payload
    },
    setIdtype: (state, action) => {
      state.identityType = action.payload
    },
    setIdnumber: (state, action) => {
      state.identityNumber = action.payload
    },
    setVisitDate: (state, action) => {
      state.visitDate=action.payload
    },
    setCheckInTime: (state, action) => {
      state.checkInTime = action.payload
    },
    setHost: (state, action) => {
      state.host = action.payload
    },
    setPurpose: (state, action) => {
      state.purpose = action.payload
    },
    resetNewBuying: (state, action) => {
      state.name = ''
      state.mobile = ''
      state.email = ''
      state.gender = ''
      state.identityType = ''
      state.identityNumber = ''
      state.address=''
      state.visitDate=''
      state.checkInTime=''
      state.host = ''
      state.purpose = ''
      state.databaseResponse = {}
      state.loading= false
      state.error= ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(executeNewBuying.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(executeNewBuying.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload)
    })
    builder.addCase(executeNewBuying.rejected, (state, action) => {
      state.loading = true
      console.log('REJECTED.....................')
      state.error = action.payload
    })
  }
})

export const { setName, setMobile, setEmail,setAddress, setGender, setIdtype, setIdnumber,setVisitDate, setCheckInTime, setHost,setPurpose, resetNewBuying } = newVisitSlice.actions;

export default newVisitSlice.reducer;