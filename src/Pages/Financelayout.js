import React from 'react';

import SideNavigation from '../components/sidenav';
import Header from '../components/Header';
import JourneyPortal from '../components/portal';
import StudentDashboard from './Dashy';
import NotificationsHub from '../components/sec';
import AdvancedNavigation from '../components/sidenav';
import FinancialPlanning from './Finance';


const FinanceLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
    
        <AdvancedNavigation />
      

      {/* Main Content Area */}
     
        
       

        {/* Page Content */}
        <div className="flex-1 p-6 ">
          <FinancialPlanning/>
          
        </div>
      </div>
    
  );
};

export default FinanceLayout;
