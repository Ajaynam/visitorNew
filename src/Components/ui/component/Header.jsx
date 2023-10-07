import React from 'react'

export default function Header(props) {
 return (
  <div>
   <h1 className='font-semibold text-2xl leading-7 mb-8'>
     {props.heading}
    <br></br>
    <span className='font-normal text-base text-[rgba(0,0,0,0.7)]'>
     {props.title}
    </span>
   </h1>
  </div>
 )
}
