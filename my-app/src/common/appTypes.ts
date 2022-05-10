import { actionsPosts } from "../redux/actions/actionsPosts";
import { AppStateType, PropertiesTypes } from "../redux/store";
import { ThunkAction } from "redux-thunk";

export enum actionTypes {
  SET_POSTS = "SET_POSTS",
  SET_IS_LOADING = "SET_IS_LOADING",
  DANYLO_SET_LOGIN = "DANYLO_SET_LOGIN",
  Vitrikush_SET_LOGIN = "Vitrikush_SET_LOGIN",
}

export interface TypeLogin {
  email: string,
  name: string,
  password: string,
  verifyPassword: string,
}

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
