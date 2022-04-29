import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/postReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const rootReducer = combineReducers({
  postsReducer: postsReducer,
})

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;