import { accounts } from "../data.json";
const reducer = (state = accounts, action = {}) => {
  switch (action.type) {
    // mockup api call
    case "SET_EMAIL_READ_API":
      return state.map(account =>
        account.address === action.payload.address
          ? {
              ...account,
              mail: account.mail.map(mail =>
                mail.date === action.payload.date
                  ? { ...mail, read: "true" }
                  : mail
              )
            }
          : account
      );

    // mockup api call
    case "DELETE_EMAIL_API":
      return state.map(account =>
        account.address === action.payload.address
          ? {
              ...account,
              mail: account.mail.map(mail =>
                action.payload.deletedItems.find(
                  item => mail.date === item.date
                )
                  ? { ...mail, category: "trash" }
                  : mail
              )
            }
          : account
      );
    default:
      return state;
  }
};

export default reducer;
