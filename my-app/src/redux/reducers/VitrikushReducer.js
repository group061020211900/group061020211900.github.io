const initialState = {
	login: {
		email: "",
		name: "",
		password: "",
		verifyPassword: "",
	},
};

export const VitrikushReducer = (state = initialState, action) => {
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
