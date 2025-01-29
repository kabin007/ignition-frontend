import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Protected Route component to check if the user is authenticated
const ProtectedRoute = ({ element, ...rest }) => {
  const navigate = useNavigate();

  // Retrieve the user data from the browser storage
  const isLoggedIn = localStorage.getItem('user'); 

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login page if user is not logged in
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? element : null; // Only render the element if logged in, else render nothing
};

export default ProtectedRoute;
