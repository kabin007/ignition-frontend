import React from 'react';

import SideNavigation from '../components/sidenav';

import StudyAbroadPortal from './Document';
import NotificationsHub from '../components/sec';
import ApplicationHeader from '../components/myApplicationHeading';


const DocumentLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
      
        <SideNavigation />
        
        

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
      <ApplicationHeader/>
        
       

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <StudyAbroadPortal/>
          
        </div>
      </div>
    </div>
  );
};

export default DocumentLayout;