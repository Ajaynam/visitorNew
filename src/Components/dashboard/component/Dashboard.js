import React from 'react';
import { useSelector } from 'react-redux';
// import { selectUser } from '../../Auth/store/userSlice/userSlice';
import GuardDashboard from './GuardDashboard/GuardDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import StaffDashboard from './StaffDashboard/StaffDashboard';

const Dashboard = () => {
  const userType = useSelector((state) => {
    return state.authSlice.role
  })


  return (
    <div>
      {userType === 'Admin' ? <AdminDashboard />:<></>}
      {userType === 'Employee' ? <StaffDashboard/>:<></>}
      {userType === 'Guard' ? <GuardDashboard />:<></>}
    </div>
  );
};

export default Dashboard;
