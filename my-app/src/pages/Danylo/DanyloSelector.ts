import { AppStateType } from "../../redux/store";

export const DanyloSelector = {
  getLogin: (state: AppStateType) => {
    return state.DanyloReducer.login
  },
};
