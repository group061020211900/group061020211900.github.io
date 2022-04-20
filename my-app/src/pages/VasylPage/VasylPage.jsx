import { useState } from "react"
import photo from "./photos/photo.jpg"
import styles from "./VasylPage.module.css"

const VasylPage = () => {
    const [info, setInfo] = useState({
        name: "Василь Яцишин",
        age: 15,
        education: "Жовтанецький ЗЗСО",
        photo: photo,
    })
    return (
        <div className="VasylPage">
            <img src={info.photo} className={styles.photo}></img>
            <h1>Ім'я: {info.name}</h1>
            <h2>Вік: {info.age}</h2>
            <h3>Освіта: {info.education}</h3>
        </div>
    )
}

export default VasylPage