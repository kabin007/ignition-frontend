import React from 'react';

import SideNavigation from '../components/sidenav';

import MultiStepForm from './application';


const ApplicationLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
      
        <SideNavigation />
      

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <MultiStepForm />

        
       

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-100">
            
         
        </div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
