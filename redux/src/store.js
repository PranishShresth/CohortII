import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/RootReducer";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
