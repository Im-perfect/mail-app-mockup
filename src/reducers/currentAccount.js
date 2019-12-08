import { accounts } from "../data.json";

const reducer = (state = accounts[0], action = {}) => {
  switch (action.type) {
    case "SET_EMAIL_READ":
      const newMail = state.mail.map(mail =>
        mail.date === action.date ? { ...mail, read: "true" } : mail
      );
      return { ...state, mail: newMail };
    default:
      return state;
  }
};

export default reducer;
