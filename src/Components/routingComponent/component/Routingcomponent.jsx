import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Livestock from '../../visitLogbook/component/Livestock'
import AdminDasboard from '../../dashboard/component/GuardDashboard/GuardDashboard'
import Login from '../../Auth/Login/Login'
import StaffDashboard from '../../dashboard/component/GuardDashboard/GuardDashboard'
import Dashboard from '../../dashboard/component/Dashboard'
import UserProfile from '../../Profile/Components/Profile'
import VisitorCard from '../../VisitorCard/Components/VisitorCard'
// import Buyorder from '../../newInvite/component/Buyorder'
export default function Routingcomponent() {
  
  return (
    <Routes>

      <Route path='/' element={
        <React.Fragment>
          <Dashboard />
        </React.Fragment>
      }></Route>

      <Route path='/login' element={
        <React.Fragment>
          <Login />
        </React.Fragment>
      }></Route>

      <Route path='/user-profile' element={
        <React.Fragment>
          <UserProfile />
        </React.Fragment>
      }></Route>


      <Route path='/visit-logbook' element={
        <React.Fragment>
          <Livestock />
        </React.Fragment>
      }></Route>


  <Route path='/visit-card' element={
        <React.Fragment>
          <VisitorCard />
        </React.Fragment>
      }></Route>
      {/* <Route path='/new-invite' element={
        <React.Fragment>
          <Buyorder />
        </React.Fragment>
      }></Route> */}
    </Routes>
  )
}



// import React, { useState } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';

// // Define your components here
// import Dashboard from '../../dashboard/component/Dashboard';
// import Login from '../../Auth/Login/Login';
// import UserProfile from '../../Profile/Components/Profile';
// import Livestock from '../../visitLogbook/component/Livestock';

// export default function RoutingComponent() {
//   // State to track whether the user is authenticated or not
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Dummy username and password
//   const dummyUsername = 'user';
//   const dummyPassword = 'password';

//   // Function to handle login and set isAuthenticated to true
//   const handleLogin = (username, password) => {
//     // Check if the provided username and password match the dummy values
//     if (username === dummyUsername && password === dummyPassword) {
//       setIsAuthenticated(true);
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   // Function to handle logout and set isAuthenticated to false
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Routes>
//       {/* Define a route for the login page */}
//       <React.Fragment> <Route path="/login" element={<Login onLogin={handleLogin} />} />
//       </React.Fragment>
//       {/* Protected routes */}
//       {isAuthenticated ? (
//         <React.Fragment>
//           <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
//           <Route path="/user-profile" element={<UserProfile />} />
//           <Route path="/visit-logbook" element={<Livestock />} />
//         </React.Fragment>
//       ) : (
//         // Redirect to the login page if not authenticated
//         <Route path="/login" />
//       )}
//     </Routes>
//   );
// }
