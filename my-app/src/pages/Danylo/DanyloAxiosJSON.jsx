import { useEffect } from "react";
import { JSONPlaceholder } from "../../api/api";



const JSONElement = ({post}) => {
    return (
        <div style={{border:"3px solid black", borderRadius:"10px", marginBottom:"10px", padding:"20px"}}>
            <p>{post.title}</p>
            <p>ID of a user: {post.userId}</p>
            <span>{post.body}</span>
        </div>
    );
};

const JSONPost = () => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    useEffect(() => { }, [posts]);

    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => <JSONElement post={post} />)
            ) : (
                <p>No posts available</p>
            )}
        </div>
    );
};

const DanyloAxiosJSON = () => {
    useEffect(() => {
        JSONPlaceholder.getPost()
        .then((rez) =>
            localStorage.setItem("posts", JSON.stringify(rez.data))
        );
    }, []);

    const getUserPost = async () => {
        try {
            const response = await JSONPlaceholder.postPost({
                title: "post",
                body: "body",
                userId: 1,
            });
        } catch (error) {
            alert("Failed to get a post");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getUserPost();
        }, 2000);
    }, []);

    return <JSONPost />

};

export default DanyloAxiosJSON