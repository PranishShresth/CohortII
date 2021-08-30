import { combineReducers } from "redux";
import { BankReducer } from "./BankReducer";
import { JokesReducer } from "./JokesReducer";

const rootReducer = combineReducers({
  jokes: JokesReducer,
  bank: BankReducer,
});

export default rootReducer;
