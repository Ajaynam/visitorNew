import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../dashboard/component/Dashboard'
import Livestock from '../../visitLogbook/component/Livestock'
import Buyorder from '../../newInvite/component/Buyorder'
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

      <Route path='/visit-logbook' element={
        <React.Fragment>
          <Livestock />
        </React.Fragment>
      }></Route>

      <Route path='/new-invite' element={
        <React.Fragment>
          <Buyorder />
        </React.Fragment>
      }></Route>
    </Routes>
  )
}
