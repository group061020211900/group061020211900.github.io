import React from 'react';
import { Link } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import style from "./VitrikushIhor.module.scss";
import { VitrikushIhorAxios }	from "./AxiosIhor/VitrikushIhorAxios";

export const VitrikushIhor = () => {
	return (
		<div>
			<h2 className={style.logo}>VitrikushIhor</h2>
			<Link to={RouteConst.Vitrikush_Ihor_FORM}>FORM</Link>
			<VitrikushIhorAxios/>
		</div>
	)
}
