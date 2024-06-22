import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        console.log("ProtectedRoute - No user, redirecting to login");
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;
