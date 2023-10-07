import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 name: '',
 number: '',
 address: '',
 product: 'Select product',
 productcategory: 'Select product category',
 sellamount: '',
 firstinstallment:'',
 seller_id: ''
}

const newSellingSlice = createSlice({
 name: 'newSelling',
 initialState,
 reducers: {
  setName: (state, action) => {
   state.name = action.payload
  },
  setNumber: (state, action) => {
   state.number = action.payload
  },
  setAddress: (state, action) => {
   state.address = action.payload
  },
  setProduct: (state, action) => {
   state.product = action.payload
  },
  setProductCategory: (state, action) => {
   state.productcategory = action.payload
  },
  setSellerId: (state, action) => {
   state.seller_id = action.payload
  },
  setSellAmount: (state, action) => {
   state.sellamount = action.payload
  },
  seFirstInstallment: (state, action) => {
   state.firstinstallment = action.payload
  },
  resetNewSelling: (state, action) => {
   console.log('RESETING')
   state.name = ''
   state.number = ''
   state.address = ''
   state.product = 'Select product'
   state.productcategory = 'Select product category'
   state.sellamount = ''
   state.firstinstallment=''
   state.seller_id = ''
  }
 }
})

export const { setName, setNumber, setAddress, setProduct, setProductCategory, setSellerId, setSellAmount, seFirstInstallment, resetNewSelling } = newSellingSlice.actions;

export default newSellingSlice.reducer;