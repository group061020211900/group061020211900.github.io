

export const JsonItem = ({ post }) => {
	return (
		<div>
			<p>{post.title}</p>
			<p>post made by user with id {post.userId}</p>
			<span>{post.body}</span>
			<hr />
		</div>
	)
}
