import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { RouteConst } from "../RouteConst";

const PrivateRoute = ({Component, }) => {
    const isAdmin  = localStorage.getItem("isAdmin");
    console.log(isAdmin)
    if (isAdmin === false){
        return <Navigate to="error" replace />
    }
        return <Component />
}
export default PrivateRoute;