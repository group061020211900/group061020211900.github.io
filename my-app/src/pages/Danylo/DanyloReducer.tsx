export const DanyloReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "DANYLO/SET_LOGIN":
            return {
                ...state,
                login: action.payload
            };
        default:
            return state;
    }
};

export const initialState = {
    login: {
        email: "",
        nickname: "",
        password: ""
    }
};

export const actions = {
    setLogin: (login: TypeLogin) => ({
        type: "DANYLO/SET_LOGIN",
        payload: login
    })
};

type initialStateType = typeof initialState;
type InferActionsTypes<T> = T extends {
    [keys: string]: (...args: any[]) => infer U
} ? U : never;
type ActionsTypes = InferActionsTypes<typeof actions>;
interface TypeLogin {
    email: string,
    nickname: string,
    password: string
}