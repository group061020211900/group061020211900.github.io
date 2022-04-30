import { useSelector } from "react-redux";
import { VitrikushSel } from '../../../redux/selectors/VitrikushSel'
import { RoutVitrikushIhorHome } from '../../../common/UsersRout/RoutVitrikushIhorHome'
export const VitrikushRegistered = () => {

	const login = useSelector(VitrikushSel.getLogin);

	return (
		<div>
			<h3>User name: {login.name}</h3>
			<h3>User email: {login.email}</h3>
			<h3>User password: {login.password}</h3>
			<RoutVitrikushIhorHome />
		</div>
	)
}
