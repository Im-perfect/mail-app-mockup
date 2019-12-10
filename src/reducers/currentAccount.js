import { accounts } from "../data.json";

const initialStateMail = accounts[0].mail.sort((a, b) => b.date - a.date);

const reducer = (
  state = { ...accounts[0], mail: initialStateMail },
  action = {}
) => {
  switch (action.type) {
    case "SWITCH_ACCOUNT":
      return { ...accounts[action.accountIndex] };
    case "SET_EMAIL_READ":
      const readMail = state.mail.map(mail =>
        mail.date === action.date ? { ...mail, read: "true" } : mail
      );
      return { ...state, mail: readMail };
    case "DELETE_EMAIL":
      const deletedMail = state.mail.map((mail, index) =>
        action.deletedIndex[index] ? { ...mail, category: "trash" } : mail
      );
      return { ...state, mail: deletedMail };
    default:
      return state;
  }
};

export default reducer;
