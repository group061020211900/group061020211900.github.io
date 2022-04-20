import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { RouteConst } from "../RouteConst";
//
// const PrivateRoute = ({Component, }) => {
//     const isAdmin  = localStorage.getItem("isAdmin");
//     console.log(isAdmin)
//     if (isAdmin === false){
//         return <Navigate to="error" replace />
//     }
//         return <Component />
// }
// export default PrivateRoute;

const ProtectedRoute = ({
                            isAllowed,
                            redirectPath = RouteConst.NOT_FOUND_PAGE,
                            children,
                        }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;