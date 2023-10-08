import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../dashboard/component/Dashboard'
import Loginwindow from '../../login/component/Loginwindow'
import Newinvite from '../../newInvite/component/Newinvite'
import Visitlogbook from '../../visitLogbook/component/Visitlogbook'
import VisitorCard from '../../VisitorCard/Components/VisitorCard'
import UserProfile from '../../Profile/Components/Profile'
import { useSelector } from 'react-redux'
export default function Routingcomponent(props) {
  const isLogedIn = useSelector((state) => {
    return state.authSlice.isLogedIn
  })
  return (
    <>
      {
        isLogedIn ?
          <Routes>
            <Route path='/' element={
              <React.Fragment>
                <Dashboard />
              </React.Fragment>
            }></Route>

            {/* <Route path='/dashboard' element={
              <React.Fragment>
                <Dashboard />
              </React.Fragment>
            }></Route> */}

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

            <Route path='/visitor-card' element={
              <React.Fragment>
                <VisitorCard/>
              </React.Fragment>
            }></Route>

            <Route path='/user-profile' element={
              <React.Fragment>
                <UserProfile />
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
