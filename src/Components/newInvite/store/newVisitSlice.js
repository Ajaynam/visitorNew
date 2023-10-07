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
  name: '',
  number: '',
  email: '',
  gender: '',
  idtype: '',
  idnumber: '',
  hnumber: '',
  floor: '',
  building: '',
  landmark: '',
  village: '',
  pincode: '',
  state: '',
  country: '',
  date: '',
  cintime: '',
  couttime: '',
  host: '',
  purpose: '',
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
    setNumber: (state, action) => {
      state.number = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setGender: (state, action) => {
      state.gender = action.payload
    },
    setIdtype: (state, action) => {
      state.idtype = action.payload
    },
    setIdnumber: (state, action) => {
      state.idnumber = action.payload
    },
    resetNewBuying: (state, action) => {
      state.name = ''
      state.number = ''
      state.email = ''
      state.gender = ''
      state.idtype = ''
      state.idnumber = ''
      state.hnumber = ''
      state.floor = ''
      state.building = ''
      state.landmark = ''
      state.village = ''
      state.pincode = ''
      state.state = ''
      state.country = ''
      state.date = ''
      state.cintime = ''
      state.couttime = ''
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

export const { setName, setNumber, setEmail, setGender, setIdtype, setIdnumber, resetNewBuying } = newVisitSlice.actions;

export default newVisitSlice.reducer;