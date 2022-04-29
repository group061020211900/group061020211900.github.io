import { useEffect } from 'react';
import { RoutVitrikushIhorHome } from "../../../common/UsersRout/RoutVitrikushIhorHome";
import { JSONPlaceholder } from "../../../api/api";

import { JsonPost } from "./JsonPost";

export const VitrikushJsonAxios = () => {

	useEffect(() => {
		JSONPlaceholder.getPost()
			.then((response) =>
				localStorage.setItem("posts", JSON.stringify(response.data))
			)
			.finally(() => console.log("finally"));
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
		finally {
			console.log("finally")
		}
	}

	useEffect(() => {
		setTimeout(() => {
			getUserPost();
		}, 3000);
	}, []);

	return (
		<div>
			<div><RoutVitrikushIhorHome /></div>
			<JsonPost />
		</div>
	)
}
