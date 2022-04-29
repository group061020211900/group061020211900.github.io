import { useEffect } from 'react';
import { JSONPlaceholder } from "../../../api/api";
import { JsonPost } from "./JsonPost";
import { RoutVitrikushIhorHome } from "../../../common/UsersRout/RoutVitrikushIhorHome";


export const VitrikushJsonAxios = () => {

	useEffect(() => {
		JSONPlaceholder.getPost()
			.then((response) =>
				localStorage.setItem("posts", JSON.stringify(response.data))
			)
	}, []);

	const getUserPost = async () => {
		try {
			const resp = await JSONPlaceholder.postPost({
				title: "my post",
				body: "my body",
				userId: 1,
			});
			console.log("resp", resp.data)
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		setTimeout(() => {
			getUserPost();
		}, 8000);
	}, []);

	return (
		<div>
			<div><RoutVitrikushIhorHome /></div>
			<JsonPost />
		</div>
	)
}
