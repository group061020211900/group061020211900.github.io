import { actionsPosts } from "../redux/actions/actionsPosts";
import { AppStateType, PropertiesTypes } from "../redux/store";
import { ThunkAction } from "redux-thunk";

export interface Post {
  title: string;
  userId: number;
  body: string;
  id: number;
}
export interface PostsReducerTypes {
  posts: Post[];
  isLoading: boolean;
  morePosts: number[];
}

export type PostReducerActionTypes = ReturnType<
  PropertiesTypes<typeof actionsPosts>
>;

export type PostsThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  PostReducerActionTypes
>;
