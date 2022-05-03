import { actionTypes } from "../actions/actionsPosts";

const initialState = {
  posts: [],
  isLoading: false,
  morePosts: [1, 2, 3],
};

const postsReducer = (
  state = initialState,
  action
  // action: { type: "SET_POSTS", payload: [] }
) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
export default postsReducer;
