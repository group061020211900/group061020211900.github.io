import styles from "./IhorKurylovUsersPage.module.css"
import { useEffect, useState } from "react";
import { JSONPlaceholder } from "../../../api/api";
import { logDOM } from "@testing-library/react";


const PostItem = ({post}) => (
    <div>
        <p>{post.title}</p>
        <p>post made by user with id {post.userId}</p>
        <span>
            {post.body}
        </span>
        <hr/>
    </div>
)


const IhorKurylovUsersPage = () => {
    const [posts, setPosts] = useState();
    const [error, setError] = useState("");

    useEffect(()=>{
        JSONPlaceholder.getUsers()
            .then((response) => setPosts(response.data))
            .catch((e) => {
                e.response.status !== 200 && setError(`Error number ${e.response.status}`)
            })
            .finally(()=> console.log("finally"))
    }, []);


    return (
        <div className={styles.container}>
            <h1>USERS</h1>
            {posts?.length > 0
                ? posts.map(post => <PostItem post={post}/>)
                : error !== ""
                    ? <h3>{error}</h3>
                    : <h3>OOOOOps</h3>}
        </div>
    )
}

export default IhorKurylovUsersPage;