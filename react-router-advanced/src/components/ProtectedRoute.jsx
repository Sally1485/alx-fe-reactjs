import React from "react";
import { Route, Navigate } from "react-router-dom";
import {useAuth} from '../hooks/useAuth;'

export default function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
    const { isAuthenticated } = useAuth(); 
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
 
  
}
