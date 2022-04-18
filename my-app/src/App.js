import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import IhorPage from "./pages/Igor/IhorPage";
import NotFoundPage from "./pages/404/404";
import { RouteConst } from "./common/RouteConst";
import { showNavbar } from "./utils";
import AdminPage from "./pages/AdminPage/AdminPage";
import { useEffect } from "react";
import PrivateRoute from "./common/HOC/PrivateRoute";
import { VitrikushIhor } from './pages/VitrikushIhorPage/VitrikushIhor';

const App = () => {
    const path = useLocation().pathname;
    // console.log(path);

    // useEffect(()=>{
    //     localStorage.setItem("isAdmin", false);
    // },[])

    return (
        <div className="App">
            {showNavbar(path) && (<div>
                <h1>HEADER</h1>
                <Link to={RouteConst.IhorKurylov}>to mentors page</Link>
            </div>)}
            {/*//Todo create Link to your page*/}
            {/*{ !showNavbar ? <h2>False</h2> : <h3>True</h3>}*/}
            {/*<BrowserRouter>*/}
            <Routes>
                <Route path={RouteConst.MENTOR} element={<IhorPage />} />
                {/*<Route element={<PrivateRoute />}>*/}
                {/*    <Route path={RouteConst.ADMIN} element={<AdminPage />}/>*/}
                {/*</Route>*/}
                {/*<Route*/}
                {/*    path={RouteConst.ADMIN}*/}
                {/*    element={<PrivateRoute Component={AdminPage} />}*/}
                {/*/>*/}
                <Route path={RouteConst.VitrikushIhor} element={<VitrikushIhor />} />
                <Route path={RouteConst.IhorKurylov} element={<AdminPage />} />
                <Route path={`${RouteConst.IhorKurylov}/form`} element={<NotFoundPage />} />

                <Route path={RouteConst.IhorKurylov} element={<AdminPage />}>
                    <Route path="404" element={<NotFoundPage />} />
                </Route>


                <Route path="teams" element={<IhorPage />}>
                    <Route path={RouteConst.USER_ID} element={<IhorPage />} />
                </Route>
                {/*<Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />*/}
                <Route
                    path="*"
                    element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />}
                />
            </Routes>
            {/*</BrowserRouter>*/}
        </div>
    );
}

const AppContainer = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default AppContainer;
