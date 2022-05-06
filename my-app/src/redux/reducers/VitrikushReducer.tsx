const initialState = {
	login: {
		email: "",
		name: "",
		password: "",
		verifyPassword: "",
	},
};

export const VitrikushReducer = (state:initialStateType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "Vitrikush/SET_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  setLogin: (login:TypeLogin) => ({ type: "Vitrikush/SET_LOGIN", payload: login }as const),
};

type initialStateType = typeof initialState;
type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
type ActionsTypes = InferActionsTypes<typeof actions>;
interface TypeLogin{
  email: string,
  name: string,
  password: string,
  verifyPassword: string,
}