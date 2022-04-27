import React from 'react'
import { Link } from 'react-router-dom'
import { RouteConst } from '../../../common/RouteConst'
import s from "./AndrianaInfo.module.css"

const AndrianaInfo = () => {
    const info = {
        name: 'Andriana',
        surname: 'Mykolaievych',
        age: 15
    }
    return (
        <div>
            <h1>About me:</h1>
            <ul>
                <li>name: {info.name}</li>
                <li>surname: {info.surname}</li>
                <li>age: {info.age}</li>
            </ul>
            <Link className={s.backLink} to={RouteConst.ANDRIANA_M}>back</Link>
        </div>
    )
}

export default AndrianaInfo