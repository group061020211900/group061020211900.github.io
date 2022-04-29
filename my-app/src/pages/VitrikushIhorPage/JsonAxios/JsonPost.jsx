import { useEffect } from "react";
import { JsonItem } from "./JsonItem";

export const JsonPost = () => {

	const posts = JSON.parse(localStorage.getItem("posts"));
	useEffect(() => {
	}, [posts]);

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