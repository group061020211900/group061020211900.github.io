import { useState } from "react"
import photo from "./photos/photo.jpg"
import styles from "./VasylPage.module.css"
import { useNavigate } from "react-router-dom"

const VasylPage = () => {
    const ToHome = useNavigate()
    const [info, setInfo] = useState({
        name: "Василь Яцишин",
        age: 15,
        photo: photo,
    })
    return (
        <div className="VasylPage">
            <img src={info.photo} className={styles.photo}></img>
            <h1>Ім'я: {info.name}</h1>
            <h2>Вік: {info.age}</h2>
            <button onClick={() => ToHome("/")}>To home</button>
        </div>
    )
}

export default VasylPage