import { JSONPlaceholder } from "../../../api/api";
import { useState, useEffect } from "react";
import { RouteConst } from "../../../common/RouteConst";
import { Button,ButtonToolbar } from "rsuite";
import { Link } from "react-router-dom";

const Pictures = ({ title, thumbnailUrl }) => {
    return (
        <div>
            <p>{title}</p>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};


const AxiosVolodia= () =>{
    const [photos, setphotos] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        JSONPlaceholder.getPhotos().then((result) => {
            setphotos(result.data);
        })
            .catch((prblm) => {
                if (prblm.result.status !== 200) {
                    setError(`Error #${prblm.result.status}`);
                }
            });
    }, []);
    return (
        <div>
            <ButtonToolbar>
        <Link to={RouteConst.Volodia}>
            <Button color="red"  appearance="primary">
                Volodia
            </Button>
        </Link>
            </ButtonToolbar>
          <div>
          </div>
        {photos?.length > 0 ? (
            photos.map((photo, i) => (
                <Pictures
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
export default AxiosVolodia;