import React from "react";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
}
