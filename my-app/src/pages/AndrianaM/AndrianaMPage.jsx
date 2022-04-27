import React from "react";
import { RouteConst } from "../../common/RouteConst";
import s from './AndrianaMPage.module.css';
import { Link } from 'react-router-dom';


const AndrianaMPage = () => {
    return (
        <div className={s.container}>
            <h1>Andriana's page:)</h1>
            <div className={s.links}>
                <Link className={s.link} to={RouteConst.MAIN}>Home</Link>
                <Link className={s.link} to={RouteConst.ANDRIANA_FORM}>Form</Link>
                <Link className={s.link} to={RouteConst.ANDRIANA_INFO}>About</Link>
            </div>
        </div>
    )
}

export default AndrianaMPage;

