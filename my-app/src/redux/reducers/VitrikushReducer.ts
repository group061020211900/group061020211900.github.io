import { actionTypes,TypeLogin } from "../../common/appTypes";
import { PropertiesTypes } from "../store";

const initialState = {
	login: {
		email: "",
		name: "",
		password: "",
		verifyPassword: "",
	},
};

export const VitrikushReducer = (state:initialStateType = initialState, action:ActionsTypes ) => {
  switch (action.type) {
    case actionTypes.Vitrikush_SET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  setLogin: (login:TypeLogin) => ({ type: actionTypes.Vitrikush_SET_LOGIN, payload: login }as const),
};

type initialStateType = typeof initialState;

type ActionsTypes = ReturnType<
  PropertiesTypes<typeof actions>>;