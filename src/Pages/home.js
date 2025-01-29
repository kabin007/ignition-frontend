import React from 'react';

import SideNavigation from '../components/sidenav';
import Header from '../components/Header';
import JourneyPortal from '../components/portal';
import StudentDashboard from './Dashy';
import NotificationsHub from '../components/sec';


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
      
        <SideNavigation />
      

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
       

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <StudentDashboard/>
          <NotificationsHub/>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
