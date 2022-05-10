import { actionTypes } from "../../common/appTypes";
import { PostReducerActionTypes, PostsReducerTypes } from "../../common/appTypes";

const initialState: PostsReducerTypes = {
  posts: [],
  isLoading: false,
  morePosts: [1, 2, 3],
};

const postsReducer = (
  state = initialState,
  action: PostReducerActionTypes
) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
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