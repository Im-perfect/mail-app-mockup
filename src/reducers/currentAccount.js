import { accounts } from "../data.json";

const initialStateMail = accounts[0].mail.sort((a, b) => b.date - a.date);

const reducer = (
  state = { ...accounts[0], mail: initialStateMail },
  action = {}
) => {
  switch (action.type) {
    case "SWITCH_ACCOUNT":
      return {...accounts[action.accountIndex]};
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
