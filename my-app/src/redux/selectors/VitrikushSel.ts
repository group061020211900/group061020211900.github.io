import { AppStateType } from "../store";

export const VitrikushSel = {
  getLogin: (state: AppStateType) => {
    return state.VitrikushReducer.login;
  },
};
