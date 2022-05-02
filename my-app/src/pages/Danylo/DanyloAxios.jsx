import { JSONPlaceholder } from "../../api/api";
import { useState, useEffect } from "react";

const Picture = ({ title, thumbnailUrl }) => {
    return (
        <div>
            <p>{title}</p>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

const DanyloAxios = () => {
    const [pics, setPics] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        JSONPlaceholder.getPhotos()
            .then((result) => {
                setPics(result.data);
            })
            .catch((prblm) => {
                if (prblm.result.status !== 200) {
                    setError(`Error #${prblm.result.status}`);
                }
            });
    }, []);

    return (
        <div>
            {pics?.length > 0 ? (
                pics.map((photo, i) => (
                    <Picture
                        key={photo.id}
                        title={photo.title}
                        thumbnailUrl={photo.thumbnailUrl}
                    />
                ))
            ) : error !== "" ? (
                <p>{error}</p>
            ) : (
                <p>...</p>
            )}
        </div>
    );
};


export default DanyloAxios;