import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/postReducer";
import { VitrikushReducer } from "./reducers/VitrikushReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const rootReducer = combineReducers({
  postsReducer: postsReducer,
  VitrikushReducer,
})

type RootReducerType = typeof rootReducer;
// (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>



const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
