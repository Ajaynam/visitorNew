import React, { useState } from 'react'
import Header from '../../ui/component/Header'
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery'
import { BiSolidCartAdd } from 'react-icons/bi'
import { AiOutlineReload } from 'react-icons/ai'
export default function Buyorder() {

  const inputClass = 'border-2 outline-none p-2 rounded mt-2 border-[rgba(0,0,0,0.1)] focus:border-violet-600 focus:border-[2px] resize-none';
  const inputClassEmpty = 'border-2 outline-none p-2 rounded mt-2 border-red-400 focus:border-violet-600 focus:border-[2px] resize-none';

  const newBuyingAPI = 'http://localhost:8000/store/new-buying';
  const checkUserAPI = 'http://localhost:8000/data/check-user';

  const dispatch = useDispatch();

  const newBuying = useSelector((state) => {
    return state.newBuying;
  })

  const [emptyData, setEmptyData] = useState({
    name: true,
    num: true,
    add: true,
    pcat: true,
    pname: true,
    pamt: true,
    pdes: true
  })

  const [labels, setLabels] = useState({
    name: 'Vendor name',
    number: 'Vendor number',
    address: 'Vendor address',
    pcat: 'Product category',
    pname: 'Product name',
    pamt: 'Purchase amount',
    pdes: 'Product desprition'
  })


  const executeBuying = () => {
    console.log(newBuying)
    let flag = 1;
    if (newBuying.name === '') {
      setEmptyData(prev => ({ ...prev, name: false }))
      setLabels(prev => ({ ...prev, name: 'Vendor name required !' }))
      flag = 0;
    }
    if (newBuying.number === '') {
      setEmptyData(prev => ({ ...prev, num: false }))
      setLabels(prev => ({ ...prev, number: 'Vendor number required!' }))
      flag = 0;
    }
    if (newBuying.address === '') {
      setEmptyData(prev => ({ ...prev, add: false }))
      setLabels(prev => ({ ...prev, address: 'Vendor address required!' }))
      flag = 0;
    }
    if (newBuying.productcategory === '' || newBuying.productcategory === '0') {
      setEmptyData(prev => ({ ...prev, pcat: false }))
      setLabels(prev => ({ ...prev, pcat: 'Product category required!' }))
      flag = 0;
    }
    if (newBuying.productname === '') {
      setEmptyData(prev => ({ ...prev, pname: false }))
      setLabels(prev => ({ ...prev, pname: 'Product name required!' }))
      flag = 0;
    }
    if (newBuying.purchaseamount === '') {
      setEmptyData(prev => ({ ...prev, pamt: false }))
      setLabels(prev => ({ ...prev, pamt: 'Purchase amount required!' }))
      flag = 0;
    }
    if (newBuying.productdescription === '') {
      setEmptyData(prev => ({ ...prev, pdes: false }))
      setLabels(prev => ({ ...prev, pdes: 'Product description required!' }))
      flag = 0;
    }
    if (flag) {
      console.log(newBuying)
      dispatch(executeNewBuying(newBuying))
        .then((response) => {
          console.log('NEWBUYING DB RESPONSE : ', response)
          if (response.payload.success === true) {
            dispatch(resetNewBuying());
            $('#productCategory').val('0')
            toast.success('Livestock added')
          } else if (response.payload.success === false) {
            setEmptyData(prev => ({ ...prev, num: false }))
            setLabels(prev => ({ ...prev, number: response.payload.message }))
          }
        })
        .catch((error) => {
          console.log('ERROR AT NEWBUYING API : ', error)
        })
    }
  }

  const resetEmpty = () => {
    setEmptyData({
      name: true,
      num: true,
      add: true,
      pcat: true,
      pname: true,
      pamt: true,
      pdes: true
    })
    setLabels({
      name: 'Vendor name',
      number: 'Vendor number',
      address: 'Vendor address',
      pcat: 'Product category',
      pname: 'Product name',
      pamt: 'Purchase amount',
      pdes: 'Product desprition'
    })
  }


  const [existingUser, setExistingUser] = useState([]);

  const fetchUsers = (e) => {
    if (e.target.value === '') {
      setExistingUser([])
      dispatch(resetNewBuying())
    }
    else {
      axios.post(checkUserAPI, { key: e.target.value })
        .then((response) => {
          console.log(response.data)
          setExistingUser(response.data)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }

  return (
    <>
      <Header heading={'New Invite'} title={'Fill information for creating new invite'} />
      {/* <div className='absolute bg-[rgba(0,0,0,0.5)] h-[100%] w-[100%] top-[0] left-0'>
        ...
        </div> */}
      {
        newBuying.loading ?
          <>
            <div className='bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 h-[100%]'>

            </div>
          </> :
          <></>
      }

      <div className='grid w-[100%] grid-cols-12 gap-5 gap-y-10'>

        {/* Vendor Name */}
        <div className='flex flex-col col-span-full md:col-span-4'>
          <label htmlFor='vendorName' className={`${emptyData.name ? 'text-black' : 'text-red-500'}`}>{labels.name}</label>
          <input type='text' id='vendorName' className={emptyData.name ? inputClass : inputClassEmpty} placeholder='Customer name...' value={newBuying.name} onChange={(e) => {
            fetchUsers(e)
            dispatch(setName(e.target.value))
          }} onClick={() => { resetEmpty() }}></input>
          <div className='grid absolute bg-white w-[100] mt-20 max-h-60 overflow-auto shadow-xl border rounded'>
            {
              existingUser.map((item, index) => {
                return (
                  <p className='hover:bg-violet-200 px-6 py-1 m-2 rounded hover:cursor-pointer' id='index' onClick={(e) => {
                    dispatch(setName(item.name))
                    dispatch(setNumber(item.number))
                    dispatch(setAddress(item.address))
                    dispatch(setBuyerId(Number(item.id)))
                    setExistingUser([])
                  }} >{item.name}</p>
                )
              })
            }
          </div>
        </div>

        {/* Vendor Number */}
        <div className='flex flex-col col-span-full md:col-span-4'>
          <label htmlFor='vendorNumber' className={`${emptyData.num ? 'text-black' : 'text-red-500'}`}>{labels.number}</label>
          <input type='number' id='vendorNumber' className={emptyData.num ? inputClass : inputClassEmpty} placeholder='Customer address...' value={newBuying.number} onChange={(e) => { dispatch(setNumber(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Vendor Address */}
        <div className='flex flex-col col-span-full md:col-span-4'>
          <label htmlFor='vendorAddress' className={`${emptyData.add ? 'text-black' : 'text-red-500'}`}>{labels.address}</label>
          <input type='text' id='vendorAddress' className={emptyData.add ? inputClass : inputClassEmpty} placeholder='Customer address...' value={newBuying.address} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Product Category */}
        <div className='flex flex-col col-span-full md:col-span-4'>
          <label htmlFor='productCategory' className={`${emptyData.pcat ? 'text-black' : 'text-red-500'}`}>{labels.pcat}</label>
          <select type='text' id='productCategory' className={emptyData.pcat ? inputClass : inputClassEmpty} onChange={(e) => {
            dispatch(setProductCategory(e.target.value))
          }} onClick={(e) => {
            console.log(e.target.value)
            resetEmpty()
          }}>
            <option value='0'>Select product category</option>
            <option value='1' className='hover:bg-red-500'>Type 1</option>
            <option value='2'>Type 2</option>
            <option value='3'>Type 3</option>
            <option value='4'>Type 4</option>
            <option value='5'>Type 5</option>
          </select>
        </div>

        {/* Product Name */}
        <div className='flex flex-col col-span-full md:col-span-4'>
          <label htmlFor='productName' className={`${emptyData.pname ? 'text-black' : 'text-red-500'}`}>{labels.pname}</label>
          <input type='text' id='productName' className={emptyData.pname ? inputClass : inputClassEmpty} placeholder='Product name...' value={newBuying.productname} onChange={(e) => { dispatch(setProductName(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Purchase Amount */}
        <div className='flex flex-col col-span-full md:col-span-4'>
          <label htmlFor='purchaseAmount' className={`${emptyData.pamt ? 'text-black' : 'text-red-500'}`}>{labels.pamt}</label>
          <input type='number' id='purchaseAmount' className={emptyData.pamt ? inputClass : inputClassEmpty} placeholder='Purchase Amount...' value={newBuying.purchaseamount} onChange={(e) => { dispatch(setPurchaseAmount(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Product Description */}
        <div className='flex flex-col col-span-full'>
          <label htmlFor='productDescription' className={`${emptyData.pdes ? 'text-black' : 'text-red-500'}`}>{labels.pdes}</label>
          <textarea id='productDescription' className={emptyData.pdes ? inputClass : inputClassEmpty} placeholder='Product description...' value={newBuying.productdescription} onChange={(e) => { dispatch(setProductDescription(e.target.value)) }} onClick={() => { resetEmpty() }}></textarea>
        </div>

        <div className='flex md:col-span-3 col-span-full item-center justify-between mb-10 md:mb-0'>
          <button className='text-white p-2 w-[48%] rounded bg-violet-600 hover:bg-violet-700' onClick={() => { executeBuying() }}>
            <h1 className='flex items-center justify-center gap-3'>BUY<BiSolidCartAdd size={20}/></h1></button>
          <ToastContainer autoClose={2000} />
          <button className='text-violet-600 bg-white p-2 w-[48%] border border-violet-600 rounded hover:text-white hover:border-red-500 hover:bg-red-500' onClick={() => {
            resetEmpty()
            $('#productCategory').val('0')
            dispatch(resetNewBuying())
          }} >
            <h1 className='flex items-center justify-center gap-3'>CLEAR<AiOutlineReload/></h1>
          </button>
        </div>
      </div>


    </>
  )
}
