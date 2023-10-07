import React from 'react'
import Header from '../Header'
import { useState } from 'react'
import { setName, setNumber, setAddress, setProduct, setProductCategory, setSellerId, setSellAmount,seFirstInstallment, resetNewSelling } from '../../reduxStore/features/newSelling/newSellingSlice'
import { useDispatch, useSelector } from 'react-redux';
export default function Buyorder() {

  const inputClass = 'border outline-none p-2 rounded mt-2 border-[rgba(0,0,0,0.3)] focus:border-violet-700 focus:border-[2px] resize-none';

  const newSelling = useSelector((state) => {
    return state.newSelling;
  })

  const dispatch = useDispatch();

  const [emptyData, setEmptyData] = useState({
    name: true,
    num: true,
    add: true,
    pcat: true,
    pname: true,
    samt: true,
    fint:true
  })
  const resetEmpty = () => {
    setEmptyData({
      name: true,
      num: true,
      add: true,
      pcat: true,
      pname: true,
      samt: true,
      fint: true
    })
  }


  const executeSelling = () => {
    let flag = 1;
    if (newSelling.name === '') {
      setEmptyData(prev => ({ ...prev, name: false }))
      flag = 0;
    }
    if (newSelling.number === '') {
      setEmptyData(prev => ({ ...prev, num: false }))
      flag = 0;
    }
    if (newSelling.address === '') {
      setEmptyData(prev => ({ ...prev, add: false }))
      flag = 0;
    }
    if (newSelling.productcategory === 'Select product category') {
      setEmptyData(prev => ({ ...prev, pcat: false }))
      flag = 0;
    }
    if (newSelling.product === 'Select product') {
      setEmptyData(prev => ({ ...prev, pname: false }))
      flag = 0;
    }
    if (newSelling.sellamount === '') {
      setEmptyData(prev => ({ ...prev, samt: false }))
      flag = 0;
    }
    if (newSelling.firstinstallment === '') {
      console.log('Empty fi')
      setEmptyData(prev => ({ ...prev, fint: false }))
      flag = 0;
    }
    if (flag) {
      console.log(newSelling)
      // axios.post(newSellingAPI, newSelling)
      //   .then((res) => {
      //     if (res.data.success) {
      //       dispatch(resetnewSelling());
      //       toast.success('Livestock added')
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }


  }

  

  return (
    <>
      <Header heading={'New Selling'} title={'Execute your new selling'} />
      <div className='grid w-[100%] grid-cols-12 gap-5 gap-y-10'>

        <div className='flex flex-col col-span-full md:col-span-4'>
          {
            emptyData.name ?
              <label htmlFor='customerName'>Customer name</label> :
              <label htmlFor='customerName' className='text-red-500'>Customer name required !</label>
          }
          <input type='text' id='customerName' className={inputClass} placeholder='Customer name...' value={newSelling.name} onChange={(e)=>{dispatch(setName(e.target.value))}} onClick={()=>{resetEmpty()}} ></input>
        </div>

        <div className='flex flex-col col-span-full md:col-span-4'>
          {
            emptyData.num ?
              <label htmlFor='customerNumber'>Customer number</label> :
              <label htmlFor='customerNumber' className='text-red-500'>Customer number required !</label>
          }
          <input type='number' id='customerNumber' className={inputClass} placeholder='Customer number...' value={newSelling.number} onChange={(e) => { dispatch(setNumber(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        <div className='flex flex-col col-span-full md:col-span-4'>
          {
            emptyData.add ?
              <label htmlFor='customerAddress'>Customer address</label> :
              <label htmlFor='customerAddress' className='text-red-500'>Customer address required !</label>
          }
          <input type='text' id='customerAddress' className={inputClass} placeholder='Customer address...' value={newSelling.address} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        <div className='flex flex-col col-span-full md:col-span-3'>
          {
            emptyData.pcat ?
              <label htmlFor='productCategory'>Product category</label> :
              <label htmlFor='productCategory' className='text-red-500'>Product category required !</label>
          }
          <select type='text' id='productCategory' className={inputClass} onChange={(e) => { dispatch(setProductCategory(e.target.value)) }} onClick={() => { resetEmpty() }}>
            <option>Select product category</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
            <option>Type 4</option>
          </select>
        </div>

        <div className='flex flex-col col-span-full md:col-span-3'>
          {
            emptyData.pname ?
              <label htmlFor='CustomerName'>Product name</label> :
              <label htmlFor='CustomerName' className='text-red-500'>Product name required !</label>
          }
          <select type='text' id='productCategory' className={inputClass} onChange={(e) => { dispatch(setProduct(e.target.value)) }} onClick={() => { resetEmpty() }}>
            <option>Select product</option>
            <option>Product</option>
            <option>Product</option>
            <option>Product</option>
            <option>Product</option>
            <option>Product</option>
            <option>Product</option>
          </select>
        </div>

        <div className='flex flex-col col-span-full md:col-span-3'>
          {
            emptyData.samt ?
              <label htmlFor='sellingAmount'>Selling amount</label> :
              <label htmlFor='sellingAmount' className='text-red-500'>Selling amount required !</label>
          }
          <input type='number' id='sellingAmount' className={inputClass} placeholder='Purchase Amount...' value={newSelling.sellamount} onChange={(e) => { dispatch(setSellAmount(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        <div className='flex flex-col col-span-full md:col-span-3'>
          {
            emptyData.fint ?
              <label htmlFor='firstInstallment'>First installment</label> :
              <label htmlFor='firstInstallment' className='text-red-500'>First installment required !</label>
          }
          <input type='number' id='firstInstallment' className={inputClass} placeholder='Purchase Amount...' value={newSelling.firstinstallment} onChange={(e) => { dispatch(seFirstInstallment(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        

        <div className='flex md:col-span-3 col-span-full item-center justify-between mb-10 md:mb-0'>
          <button className='text-white p-2 w-[48%] rounded bg-violet-600 hover:bg-violet-700' onClick={() => { executeSelling()}}>SELL</button>
          <button className=' text-violet-600 bg-white p-2 w-[48%] border border-violet-600 rounded hover:text-white hover:border-red-500 hover:bg-red-500' onClick={() => {
            dispatch(resetNewSelling());
          }} >CLEAR</button>
        </div>

      </div>


    </>
  )
}
