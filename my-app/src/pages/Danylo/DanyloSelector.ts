import { AppStateType } from "../../redux/store";

const DanyloSelector = {
  getLogin: (state: AppStateType) => {
    return state.DanyloReducer.login;
  },
};

export default DanyloSelector
