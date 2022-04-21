
import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFoundPage from "./pages/404/404";
import { RouteConst } from "./common/RouteConst";
import { showNavbar } from "./utils";
import { VitrikushIhor } from './pages/VitrikushIhorPage/VitrikushIhor';
import MarkPage from "./pages/Mark/MarkPage";
import DanyloPage from "./pages/Danylo/DanyloPage";
import VasylPage from './pages/VasylPage/VasylPage';
import { useEffect } from "react";
import MainPage from "./pages/Igor/IhorPage";
import IhorKurylovPage from "./pages/AdminPage/AdminPage";
import ProtectedRoute from "./common/HOC/PrivateRoute";
import IhorKurylovUsersPage from "./pages/AdminPage/Users/IhorKurylovUsersPage";

const App = () => {
    const path = useLocation().pathname;
    // console.log(path);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify({
            role: "admin"
        }));

    },[])

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    return (
        <div className="App">
            {showNavbar(path) && (<div>
                <h1>HEADER</h1>
            </div>)}
            <Routes>
                <Route path={RouteConst.MAIN} element={<MainPage />} />
                <Route path={RouteConst.VitrikushIhor} element={<VitrikushIhor />} />

                {/*<Route element={*/}
                {/*    <ProtectedRoute*/}
                {/*        isAllowed={user.role.includes("admin")}*/}
                {/*        redirectPath={RouteConst.NOT_FOUND_PAGE}*/}
                {/*    />}*/}
                {/*>*/}
                {/*    <Route path={RouteConst.IhorKurylov} element={<IhorKurylovPage />} />*/}
                {/*</Route>*/}
                {/*<Route path={RouteConst.IhorKurylov} element={<IhorKurylovPage />} />*/}
                <Route path={RouteConst.IhorKurylov} element={<IhorKurylovUsersPage />} />


                {/*<Route path={`${RouteConst.IhorKurylov}/form`} element={<NotFoundPage />} />*/}
                <Route path={RouteConst.MARK} element={<MarkPage/>} />
                <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />
                <Route path={RouteConst.DANYLO} element={<DanyloPage />} />
                <Route path={RouteConst.VASYLYATSISHIN} element={<VasylPage />} />
                <Route
                    path="*"
                    element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />}
                />
            </Routes>
        </div>
    );
}

const AppContainer = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default AppContainer;
