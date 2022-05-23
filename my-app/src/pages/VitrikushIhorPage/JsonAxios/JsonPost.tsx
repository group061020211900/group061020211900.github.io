import { useEffect } from "react";
import { JsonItem } from "./JsonItem";

export interface Posts {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export const JsonPost = () => {
  const posts:Posts[] = JSON.parse(localStorage.getItem("posts")|| '{}');
  useEffect(() => {}, [posts]);
  return (
    <div>
      {posts?.length > 0 ? (
        posts.map((post, i) => <JsonItem post={post} key={i} />)
      ) : (
        <p>No Posts</p>
      )}
    </div>
  );
};
