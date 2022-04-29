import { Link } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import { RoutHomePage } from "../../common/UsersRout/RoutHomePage";
import { Button, ButtonToolbar } from "rsuite";
import "rsuite/styles/index.less";
import style from "./VitrikushIhor.module.scss";

export const VitrikushIhor = () => {
	return (
		<div className={style.container}>
			<h2 className={style.logo}>Vitrikush Ihor Page</h2>
			<div className={style.links}>
				<ButtonToolbar>
					<Link to={RouteConst.Vitrikush_Ihor_FORM}>
						<Button color="orange" appearance="primary">
							Form
						</Button>
					</Link>
					<Link to={RouteConst.Vitrikush_Ihor_Axios}>
						<Button color="yellow" appearance="primary">
							Axios
						</Button>
					</Link>
					<Link to={RouteConst.Vitrikush_Ihor_Json_Axios}>
						<Button color="yellow" appearance="primary">
							Json Axios
						</Button>
					</Link>
				</ButtonToolbar>
			</div>
			<div className={style.homePage}>
				<RoutHomePage />
			</div>
		</div>
	);
};
