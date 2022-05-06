import { JSONPlaceholder } from "../../api/api";
import { Post, PostsThunkType } from "../../common/appTypes";

export const actionsPosts = {
  setPosts: (posts: Post[]) => ({ type: actionTypes.SET_POSTS, posts } as const),
  setIsLoading: (isLoading: boolean) => ({ type: actionTypes.SET_IS_LOADING, isLoading } as const),
}
export enum actionTypes  {
  SET_POSTS = "SET_POSTS",
  SET_IS_LOADING = "SET_IS_LOADING"
}

export const getUsersPosts = (): PostsThunkType => async(dispatch) =>{
  dispatch(actionsPosts.setIsLoading(true));
  await JSONPlaceholder.getPost()
    .then((response) => dispatch(actionsPosts.setPosts(response.data)))
    .catch((e) => console.log(e.response.data))
    .finally(() => dispatch(actionsPosts.setIsLoading(false)));
}
enum list {
  one,
  two,
  three,
  four = 56,
  five = 266,
  six,
}
