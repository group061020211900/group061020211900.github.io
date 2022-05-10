import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/postReducer";
import { DanyloReducer } from "../pages/Danylo/DanyloReducer";
import { VitrikushReducer } from "./reducers/VitrikushReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const rootReducer = combineReducers({
  postsReducer: postsReducer,
  VitrikushReducer,
  DanyloReducer,
})

type RootReducerType = typeof rootReducer;
// (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType> //type of our store

export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
