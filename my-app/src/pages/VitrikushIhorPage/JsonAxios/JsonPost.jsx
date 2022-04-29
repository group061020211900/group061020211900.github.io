
import { useEffect, useState } from "react";
import { JsonItem } from "./JsonItem";

export const JsonPost = () => {

	const posts = useState(JSON.parse(localStorage.getItem("posts")));
	useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<div>
			{posts?.length > 0 ? (
				posts.map((post, i) => <JsonItem post={post.post} key={i} />)
			) : (
				<p>No Posts</p>
			)}
		</div>
	);
};