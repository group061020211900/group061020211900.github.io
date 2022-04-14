import styles from "./IhorPage.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import { useEffect } from "react";

const IhorPage = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    useEffect(() => {
        const isAdmin  = localStorage.getItem("isAdmin");
        console.log("isAdmin",isAdmin)
        isAdmin === true && navigate(RouteConst.NOT_FOUND_PAGE)
    },[])

    return (
        <div className={styles.container}>
            <h1 onClick={()=> navigate(RouteConst.NOT_FOUND_PAGE)}>IhorPage</h1>
        </div>
    )
}

export default IhorPage;