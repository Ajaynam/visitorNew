import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const newBuyingAPI = 'http://localhost:8000/store/new-buying';

export const executeNewBuying = createAsyncThunk('executeBuying',  async (newBuying) => {
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
 address: '',
 productname:'',
 productcategory: '',
 purchaseamount:'',
 productdescription: '',
 buyer_id: 0,
 databaseResponse: {},
 loading: false,
 error:''
}

const newBuyingSlice = createSlice({
 name: 'newBuying',
 initialState,
 reducers: {
  setName: (state, action) => {
   state.name=action.payload
  },
  setNumber: (state, action) => {
   state.number = action.payload
  },
  setAddress: (state, action) => {
   state.address = action.payload
  },
  setProductName: (state, action) => {
   state.productname = action.payload
  },
  setProductCategory: (state, action) => {
   state.productcategory = action.payload
  },
  setProductDescription: (state, action) => {
   state.productdescription = action.payload
  },
  setBuyerId: (state, action) => {
   state.buyer_id=action.payload
  },
  setPurchaseAmount: (state, action) => {
   state.purchaseamount=action.payload
  },
  resetNewBuying: (state, action) => {
    state.name=''
    state.number=''
    state.address=''
    state.productname=''
    state.productcategory =''
    state.productdescription = ''
    state.purchaseamount = ''
    state.buyer_id = 0
    state.error = ''
  }
  },
  extraReducers: (builder) => {
    builder.addCase(executeNewBuying.pending, (state, action) => {
     state.loading=true
    })
    builder.addCase(executeNewBuying.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload)
    })
    builder.addCase(executeNewBuying.rejected, (state, action) => {
      state.loading = true
      console.log('REJECTED.....................')
      state.error=action.payload
    })
 }
})

export const { setName, setNumber, setAddress, setProductName, setProductCategory, setProductDescription, setBuyerId, setPurchaseAmount, resetNewBuying } = newBuyingSlice.actions;

export default newBuyingSlice.reducer;