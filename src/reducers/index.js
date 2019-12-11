import { combineReducers } from "redux";
import accounts from "./accounts";
import currentAccount from "./currentAccount";

export default combineReducers({
  accounts,
  currentAccount
});
