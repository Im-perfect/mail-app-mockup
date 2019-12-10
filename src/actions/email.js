export const setEmailRead = date => dispatch => {
  dispatch({
    type: "SET_EMAIL_READ",
    date
  });
};

export const deleteEmail = deletedIndex => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: "DELETE_EMAIL",
      deletedIndex
    });
    resolve();
  });
};
