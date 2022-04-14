import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import IhorPage from "./pages/Igor/IhorPage";
import NotFoundPage from "./pages/404/404";
import { RouteConst } from "./common/RouteConst";
import { showNavbar } from "./utils";

const App = () => {
    const path = useLocation().pathname;
    // console.log(path);
    localStorage.setItem("isAdmin", true);
  return (
    <div className="App">
        {showNavbar(path) && <h1>HEADER</h1>}//Todo create Link to your page
        {/*{ !showNavbar ? <h2>False</h2> : <h3>True</h3>}*/}
        {/*<BrowserRouter>*/}
            <Routes>
                <Route path={RouteConst.MENTOR} element={<IhorPage />}/>
                {/*<Route path="igor" element={<IhorPage />}/>*/}
                <Route path="teams" element={<IhorPage />}>
                    <Route path={RouteConst.USER_ID} element={<IhorPage />}/>
                </Route>
                <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />
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
        <App/>
    </BrowserRouter>
);

export default AppContainer;
