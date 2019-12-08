import { accounts } from "../data.json";

const reducer = (state = accounts[0], action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
