import { JSONPlaceholder } from "../../api/api";

export const actionsPosts = {
  setPosts: (posts) => ({ type: actionTypes.SET_POSTS, payload: posts }),
  setIsLoading: (isLoading) => ({ type: actionTypes.SET_IS_LOADING, isLoading }),
}
export const actionTypes = {
  SET_POSTS: "SET_POSTS",
  SET_IS_LOADING: "SET_IS_LOADING"
}

export const getUsersPosts = () => async(dispatch) =>{
  dispatch(actionsPosts.setIsLoading(true));
  await JSONPlaceholder.getPost()
    .then((response) => dispatch(actionsPosts.setPosts(response.data)))
    .catch((e) => console.log(e.response.data))
    .finally(() => dispatch(actionsPosts.setIsLoading(false)));
}