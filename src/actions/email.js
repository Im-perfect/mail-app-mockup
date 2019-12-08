export const setEmailRead = date => dispatch => {
  dispatch({
    type: "SET_EMAIL_READ",
    date
  });
};
