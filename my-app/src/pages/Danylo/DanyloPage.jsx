import { useNavigate, useParams } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import { useEffect, useState, css } from "react";
import myStyles from "../Danylo/DanyloPage.modules.scss"
const DanyloPage = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setValue((v) => (v === 9 ? 0 : v + 1));
        }, 1000);
    }, []);
    const colors = [
        'greenyellow',
        'gold',
        'lightcoral',
        'mediumorchid',
        'pink',
        'tomato',
        'purple',
        'yellow',
        'palegreen',
        'lilac',
    ];

    return (
        <div
            className="danyloPageDiv"
            style={{ backgroundColor: colors[value] }}
        >
            <div className="photoDiv">
            </div>
            <div className="infoDiv">
                <h1>Hello :)</h1>
                <div className="textDiv">
                    <h2>A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles. Their flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. <br />Roses are best known as ornamental plants grown for their flowers in the garden and sometimes indoors. They have been also used for commercial perfumery and commercial cut flower crops. Some are used as landscape plants, for hedging and for other utilitarian purposes such as game cover and slope stabilization.</h2>
                </div>
                <button onClick={() => { navigate("/") }} className="backToMain">Go to the main page</button>
            </div>
            <div class="container">
                <div class="bird-container bird-container--one">
                    <div class="bird bird--one"></div>
                </div>

                <div class="bird-container bird-container--two">
                    <div class="bird bird--two"></div>
                </div>

                <div class="bird-container bird-container--three">
                    <div class="bird bird--three"></div>
                </div>

                <div class="bird-container bird-container--four">
                    <div class="bird bird--four"></div>
                </div>

            </div>
        </div>
    )
}

export default DanyloPage