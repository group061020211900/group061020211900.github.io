import React from 'react';
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from "rsuite";
import { RouteConst } from "../../common/RouteConst";
import { RoutVitrikushIhorHome } from "./RoutVitrikushIhorHome";
import "rsuite/styles/index.less";

export const UsersRouts = () => {
	return (
		<ButtonToolbar>

			<Link to={RouteConst.IhorKurylov}>
				<Button color="orange" appearance="primary">
					Go to Mentors page
				</Button>
			</Link>

			<Link to={RouteConst.MARK}>
				<Button color="orange" appearance="primary">
					Go to Mark page
				</Button>
			</Link>

			<Link to={RouteConst.ANDRIANA_M}>
				<Button color="orange" appearance="primary">
					Go to Andriana's page
				</Button>
			</Link>


			<RoutVitrikushIhorHome />

		</ButtonToolbar>
	)
}
