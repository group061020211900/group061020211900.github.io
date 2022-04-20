import styles from "./IhorPage.module.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import { useEffect, useState } from "react";

const MainPage = () => {
    const navigate = useNavigate();
    // const [count, setCount] = useState(1)
    // const [aCount, setACount] = useState(10)

    // useEffect(()=>{
    //     console.log("empty useEffect", count)
    // })
    // useEffect(()=>{
    //     console.log("useEffect []", count)
    // }, [])
    //
    // useEffect(()=>{
    //     console.log("useEffect [aCount]", aCount)
    // }, [aCount])
    // useEffect(()=>{
    //     console.log("useEffect [count]", count)
    // }, [count])
    //
    // useEffect(() => {
    //     const isAdmin  = localStorage.getItem("isAdmin");
    //     console.log("isAdmin",isAdmin)
    //     // isAdmin === true && navigate(RouteConst.NOT_FOUND_PAGE)
    // },[])

    // useEffect(() => {
    //     const isAdmin  = localStorage.getItem("isAdmin");
    //     console.log("isAdmin",isAdmin)
    //     isAdmin === true && navigate(RouteConst.NOT_FOUND_PAGE)
    // },[])

    return (
        <div className={styles.container}>
            <h1>Main page</h1>
            <Link to={RouteConst.IhorKurylov}>Go to Mentors page</Link>
            <br/>
            <Link to={RouteConst.MARK}>Go to {RouteConst.MARK} page</Link>
            {/*//TODO set redirects to your Route*/}
            {/*<h1 onClick={()=> navigate(RouteConst.NOT_FOUND_PAGE)}>IhorPage</h1>*/}
            {/*<h1 onClick={()=> setCount((prevState) => ++prevState )}>IhorPage count {count}</h1>*/}
            {/*<h1 onClick={()=> setACount((prevState) => ++prevState )}>IhorPage Another aCount {aCount}</h1>*/}
        </div>
    )
}

export default MainPage;