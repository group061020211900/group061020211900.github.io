import React from 'react';
import { Link } from "react-router-dom";
import { Button} from "rsuite";
import { RouteConst } from "../RouteConst";
import "rsuite/styles/index.less";

export const RoutVitrikushIhorHome = () => {
	return (
		<>
			<Link to={RouteConst.Vitrikush_Ihor}>
				<Button color="orange" appearance="primary">
					Go to Vitrikush Ihor page
				</Button>
			</Link>
		</>
	)
}
