import { JSONPlaceholder } from "../../api/api";
import { Post, PostsThunkType } from "../../common/appTypes";
import { actionTypes } from "../../common/appTypes";


export const actionsPosts = {
  setPosts: (posts: Post[]) => ({ type: actionTypes.SET_POSTS, posts } as const),
  setIsLoading: (isLoading: boolean) => ({ type: actionTypes.SET_IS_LOADING, isLoading } as const),
}


export const getUsersPosts = (): PostsThunkType => async (dispatch) => {
  dispatch(actionsPosts.setIsLoading(true));
  await JSONPlaceholder.getPost()
    .then((response) => dispatch(actionsPosts.setPosts(response.data)))
    .catch((e) => console.log(e.response.data))
    .finally(() => dispatch(actionsPosts.setIsLoading(false)));
}