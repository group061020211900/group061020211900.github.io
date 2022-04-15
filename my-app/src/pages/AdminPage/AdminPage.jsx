import styles from "./AdminPage.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import { useEffect } from "react";
import {

    Outlet,
} from "react-router-dom";
const AdminPage = () => {
    const navigate = useNavigate();
    // const { userId } = useParams();



    return (
        <div className={styles.container}>
            <h1 onClick={()=> navigate(RouteConst.NOT_FOUND_PAGE)}>Ihor Kurylov</h1>
            <Outlet />
        </div>
    )
}

export default AdminPage;