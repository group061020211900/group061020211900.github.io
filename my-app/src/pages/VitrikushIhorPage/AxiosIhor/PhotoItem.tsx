import { Photo } from "./VitrikushIhorAxios";

export const PhotoItem = ({ title, thumbnailUrl }: Photo) => {
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<img src={thumbnailUrl} alt={title} />
			</div>
		</div>
	);
};