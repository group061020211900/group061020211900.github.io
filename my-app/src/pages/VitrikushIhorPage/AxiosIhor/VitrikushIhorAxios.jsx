import { useState, useEffect } from "react";
import { JSONPlaceholder } from "../../../api/api";
import { PhotoItem } from "./PhotoItem";

export const VitrikushIhorAxios = () => {
	const [photos, setPhotos] = useState([]);
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
			{photos?.length > 0 ? (
				photos.map((photo, i) => (
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

