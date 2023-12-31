import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../dashboard/component/Dashboard'
// import Loginwindow from '../../login/component/Loginwindow'
import Login from '../../Auth/Login/Login'
import Newinvite from '../../newInvite/component/Newinvite'
import PendingEntry from '../../PendingInvite/PendingInvite/PendingInvite'
import VisitorCard from '../../VisitorCard/Components/VisitorCard'
import UserProfile from '../../Profile/Components/Profile'
import { useSelector } from 'react-redux'
import EmployeeForm from '../../addEmployee/components/EmployeeForm'
import EmployeeTable from '../../employeeTable/components/EmployeeTable'
import Visitlogbook from '../../visitLogbook/component/Visitlogbook'
import AdminDashboard from '../../dashboard/component/AdminDashboard/AdminDashboard'
import StaffDashboard from '../../dashboard/component/StaffDashboard/StaffDashboard'
import GuardDashboard from '../../dashboard/component/GuardDashboard/GuardDashboard'

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
                <Dashboard/>
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

            <Route path='/new-entry' element={
              <React.Fragment>
                <Newinvite />
              </React.Fragment>
            }></Route>

            <Route path='/add-employee' element={
              <React.Fragment>
                <EmployeeForm/>
              </React.Fragment>
            }></Route>
            
            <Route path='/employee-table' element={
              <React.Fragment>
                <EmployeeTable/>
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

            <Route path='/visitor-card' element={
              <React.Fragment>
                <VisitorCard />
              </React.Fragment>
            }></Route>

            <Route path='/pending-entry' element={
              <React.Fragment>
                <PendingEntry />
              </React.Fragment>
            }></Route>

          </Routes>
          :
          <Routes>
            <Route path='*' element={
              <Login/>
            }></Route>
          </Routes>
      }
    </>

  )
}
