import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Main dashboard page
import DashboardLayout from './Pages/home';
import CourseLayout from './Pages/courselayout';
import FinanceLayout from './Pages/Financelayout';
import RegistrationPage from './Pages/register1';
import LoginPage from './Pages/Login';
import ResetPassword from './Pages/reset';
import StudyAbroadPortal from './Pages/Document';
import ProtectedRoute from './protectedRoute';
import DocumentLayout from './Pages/DocumentLayout';
import StudentApplicationForm from './Pages/application';
import MultiStepForm from './Pages/application';
import ApplicationLayout from './Pages/applicationLayout';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside the DashboardLayout */}
        <Route
          path="*"
          element={
            <Routes>
              {/* Use ProtectedRoute for the homepage */}
              <Route
                path="/"
                element={<ProtectedRoute element={<DashboardLayout />} />}
              />
              <Route path="/course-search" element={<CourseLayout />} />
              <Route path="/finance-management" element={<FinanceLayout />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/applications" element={<ApplicationLayout />} />
              <Route path="/studentapp" element={<StudentApplicationForm />} />
            </Routes>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;