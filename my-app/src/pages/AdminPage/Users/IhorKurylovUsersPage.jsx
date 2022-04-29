import styles from "./IhorKurylovUsersPage.module.css";
import { useEffect, useState } from "react";
import { JSONPlaceholder } from "../../../api/api";
import { logDOM } from "@testing-library/react";

const Posts = () => {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")));

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <h1>POSTS Compponent</h1>
      {posts?.length > 0 ? (
        posts.map((post) => <PostItem post={post} />)
      ) : (
        <p>NO POsts</p>
      )}
    </div>
  );
};

const PostItem = ({ post }) => (
  <div>
    <p>{post.title}</p>
    <p>post made by user with id {post.userId}</p>
    <span>{post.body}</span>
    <hr />
  </div>
);

const IhorKurylovUsersPage = () => {
  // const [posts, setPosts] = useState();
  // const [error, setError] = useState("");

  useEffect(() => {
    JSONPlaceholder.getPost()
      .then((response) =>
        localStorage.setItem("posts", JSON.stringify(response.data))
      )
      // .catch((e) => {
      //   e.response.status !== 200 &&
      //     setError(`Error number ${e.response.status}`);
      // })
      .finally(() => console.log("finally"));
  }, []);

    const getPOsts = async () => {
        try {
            const resp = await JSONPlaceholder.postPost({
                title: "my post",
                body: "my body",
                userId: 1,
            });
            console.log("resp", resp.data)
        } catch (e) {
            console.log(e);
        }
        finally {
            console.log("finally")
        }
    }
    const func = (value) => value*5;
    console.log(func(func(func(5))))
    console.log(compose(func(), 5))

  useEffect( () => {
    setTimeout(() => {
         getPOsts();
    }, 5000);
  }, []);

  return (
    <div className={styles.container}>
      <h1>USERS</h1>
      <Posts />
    </div>
  );
};

export default IhorKurylovUsersPage;
