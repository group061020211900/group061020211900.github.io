import styles from "./IhorKurylovUsersPage.module.css";
import { useEffect, useState } from "react";
import { JSONPlaceholder } from "../../../api/api";
import { logDOM } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { actionsPosts, getUsersPosts } from "../../../redux/actions/actionsPosts";

const Posts = () => {
  // @ts-ignore
  const posts: Post[] = useSelector((state) => state?.postsReducer?.posts);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const sayValue = (value: string) => console.log(value);
  return (
    <div>
      <h1>POSTS Compponent</h1>
      {posts?.length > 0 ? (
        posts.map((post) => <PostItem post={post} sayValue={sayValue}/>)
      ) : (
        <p>NO POsts</p>
      )}
    </div>
  );
};

interface Post {
  title: string
  userId: number
  body: string
  id: number
}

interface Props {
  post: Post,
  sayValue: (s: string) => void,
}

const PostItem = ({ post, sayValue }: Props) => (
  <div
  onClick={() => sayValue("123")}
  >
    <p>{post.title}</p>
    <p>post made by user with id {post.userId}</p>
    <span>{post.body}</span>
    <hr />
  </div>
);

const IhorKurylovUsersPage = () => {
  const [posts, setPosts] = useState<Post[]>();
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  // @ts-ignore
  const isLoading: boolean = useSelector((state) => state?.postsReducer?.isLoading);
  // @ts-ignore
  const _getUsersPosts = () => dispatch(getUsersPosts());


  useEffect(() => {
    _getUsersPosts();
  }, []);

  // const getPOsts = async () => {
  //   try {
  //     const resp = await JSONPlaceholder.postPost({
  //       title: "my post",
  //       body: "my body",
  //       userId: 1,
  //     });
  //     console.log("resp", resp.data);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     console.log("finally");
  //   }
  // };

  // useEffect( () => {
  //   setTimeout(() => {
  //        getPOsts();
  //   }, 5000);
  // }, []);

  return (
    <div className={styles.container}>
      <h1>USERS</h1>
      {isLoading ? <h1>Loading....</h1> : <Posts />}
    </div>
  );
};

export default IhorKurylovUsersPage;
