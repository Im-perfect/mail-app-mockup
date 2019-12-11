const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case "GET_ACCOUNT":
      const sortedMail = action.newAccount.mail.sort((a, b) => b.date - a.date);
      return { ...action.newAccount, mail: sortedMail };
    case "SET_EMAIL_READ":
      const readMail = state.mail.map(mail =>
        mail.date === action.date ? { ...mail, read: "true" } : mail
      );
      return { ...state, mail: readMail };
    case "DELETE_EMAIL":
      const deletedMail = state.mail.map(mail =>
        action.deletedItems.find(item => item.date === mail.date)
          ? { ...mail, category: "trash" }
          : mail
      );
      return { ...state, mail: deletedMail };

    default:
      return state;
  }
};

export default reducer;
