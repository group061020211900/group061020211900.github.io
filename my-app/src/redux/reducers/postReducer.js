const initialState = {
  posts: ['ascacas', 'acascacac', 'acsascascas'],
  morePosts: [1,2,3],
};

const postsReducer = (
  state = initialState,
  action
  // action: { type: "SET_POSTS", payload: [] }
) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
export default postsReducer;
