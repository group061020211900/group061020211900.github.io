import { RouteConst } from "./common/RouteConst";

export const showNavbar = (value) => {
    console.log(value)
switch (value){
    case RouteConst.NOT_FOUND_PAGE:
        return false;
    default:
        return true;
}
}