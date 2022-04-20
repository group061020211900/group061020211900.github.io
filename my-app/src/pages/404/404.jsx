import styles from "./404.module.css"
import { useParams } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1>NotFoundPage</h1>
        </div>
    )
}

export default NotFoundPage;