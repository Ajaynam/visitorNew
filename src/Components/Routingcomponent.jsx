import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Livestock from './Pages/Livestock'
import Buyorder from './Pages/Buyorder'
import Sellorder from './Pages/Sellorder'
import Pendingtransactions from './Pages/Pendingtransactions'
import Completedtransactions from './Pages/Completedtransactions'
export default function Routingcomponent() {
  return (
    <Routes>

      <Route path='/' element={
        <React.Fragment>
          <Dashboard />
        </React.Fragment>
      }></Route>

      <Route path='/dashboard' element={
        <React.Fragment>
          <Dashboard />
        </React.Fragment>
      }></Route>

      <Route path='/livestock' element={
        <React.Fragment>
          <Livestock />
        </React.Fragment>
      }></Route>

      <Route path='/buy-order' element={
        <React.Fragment>
          <Buyorder />
        </React.Fragment>
      }></Route>

      <Route path='/sell-order' element={
        <React.Fragment>
          <Sellorder />
        </React.Fragment>
      }></Route>

      <Route path='/pending-transactions' element={
        <React.Fragment>
          <Pendingtransactions/>
        </React.Fragment>
      }></Route>

      <Route path='/completed-transactions' element={
        <React.Fragment>
          <Completedtransactions />
        </React.Fragment>
      }></Route>

    </Routes>
  )
}
