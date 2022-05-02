import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "rsuite";
import { RouteConst } from "../RouteConst";
import "rsuite/styles/index.less";

export const RoutHomePage = () => {
	return (
		<>
			<Link to={RouteConst.MAIN}>
				<Button color="orange" appearance="primary">
					Home Page
				</Button>
			</Link>
		</>
	)
}
