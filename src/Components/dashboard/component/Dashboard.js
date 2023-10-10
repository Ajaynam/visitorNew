import React from 'react';
import { useSelector } from 'react-redux';
// import { selectUser } from '../../Auth/store/userSlice/userSlice';
import GuardDashboard from './GuardDashboard/GuardDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import StaffDashboard from './StaffDashboard/StaffDashboard';

const Dashboard = ({ userRole }) => {
  // const userData = useSelector(selectUser);

  return (
    <div>
    {/* <GuardDashboard/> */}
      {/* {userData.roles.includes('guard') && <GuardDashboard />} */}
      {/* {userData.roles.includes('staff') && <StaffComponent />} */}
      {/* {userData.roles.includes('guard') && <GuardComponent />} */}

      {/* {userRole === 'admin' && <AdminDashboard />}
      {userRole === 'staff' && <StaffDashboard />}
      {userRole === 'guard' && <GuardDashboard />} */}
      <GuardDashboard/>
    </div>
  );
};

export default Dashboard;
