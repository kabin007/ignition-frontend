import React from 'react';


import AdvancedNavigation from '../components/sidenav';
import CourseSearch from './courseSearch';
import ScholarshipSection from '../components/sec';
import BlogSection from '../components/blog';

const CourseLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
    
        <AdvancedNavigation />
      

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
       <CourseSearch />
       <ScholarshipSection />
       <BlogSection/>


       
       
          
          
        
      </div>
    </div>
  );
};

export default CourseLayout;
