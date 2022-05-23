import { useState, useEffect } from "react";
import { JSONPlaceholder } from "../../../api/api";
import { RoutVitrikushIhorHome } from "../../../common/UsersRout/RoutVitrikushIhorHome";
import { PhotoItem } from "./PhotoItem";

export interface Photo{
	id?: number;
	title: string;
	thumbnailUrl: string;
}


export const VitrikushIhorAxios = () => {
	const [photos, setPhotos] = useState<Photo[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		JSONPlaceholder.getPhotos()
			.then((res) => {
				setPhotos(res.data);
			})
			.catch((err) => {
				if (err.res.status !== 200) {
					setError(`Error number ${err.res.status}`);
				}
			});
	}, []);

	return (
		<div>
			<div><RoutVitrikushIhorHome /></div>
			{photos?.length > 0 ? (
				photos.map((photo) => (
					<PhotoItem
						key={photo.id}
						title={photo.title}
						thumbnailUrl={photo.thumbnailUrl}
					/>
				))
			) : error !== "" ? (
				<h3>{error}</h3>
			) : (
				<h3>Await</h3>
			)}
		</div>
	);
};

