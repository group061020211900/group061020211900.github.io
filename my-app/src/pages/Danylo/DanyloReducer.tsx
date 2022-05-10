import { actionTypes, TypeLogin } from "../../common/appTypes";
import { PropertiesTypes } from "../../redux/store";


const initialState = {
    login: {
        email: "",
        name: "",
        password: "",
        verifyPassword: "",
    },
};

type initialStateType = typeof initialState;

type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>

export const actions = {
    setLogin: (login: TypeLogin) => ({ type: actionTypes.DANYLO_SET_LOGIN, payload: login } as const),
};

const DanyloReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case actionTypes.DANYLO_SET_LOGIN:
            return {
                ...state,
                login: action.payload,
            };
        default:
            return state;
    }
};

export default DanyloReducer


