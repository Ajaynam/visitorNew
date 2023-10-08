import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../dashboard/component/Dashboard'
import Loginwindow from '../../login/component/Loginwindow'
import Newinvite from '../../newInvite/component/Newinvite'
import Visitlogbook from '../../visitLogbook/component/Visitlogbook'
export default function Routingcomponent(props) {
  return (
    <>
      {
        props.isLogin?
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
                <Visitlogbook />
              </React.Fragment>
            }></Route>

            <Route path='/new-invite' element={
              <React.Fragment>
                <Newinvite />
              </React.Fragment>
            }></Route>
          </Routes>
          :
          <Routes>
            <Route path='*' element={
              <Loginwindow setIsLogin={props.setIsLogin} />
            }></Route>
          </Routes>
      }
    </>
    
  )
}
