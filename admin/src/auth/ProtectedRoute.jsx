import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  let islogged = true;
  const location = useLocation();
  if (!localStorage.getItem('token')) {
    islogged = false;
  }

  if (!islogged) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
