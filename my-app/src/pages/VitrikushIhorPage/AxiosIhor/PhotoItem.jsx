export const PhotoItem = ({ title, thumbnailUrl }) => {
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<img src={thumbnailUrl} alt={title} />
			</div>
		</div>
	);
};