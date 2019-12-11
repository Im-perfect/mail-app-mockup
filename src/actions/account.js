import { accounts } from "../data.json";

export const getAccount = accountIndex => dispatch => {
  //api call to fetch data of selected account
  const newAccount = accounts[accountIndex];
  dispatch({
    type: "GET_ACCOUNT",
    newAccount
  });
};
