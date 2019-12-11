export const setEmailRead = (address, date) => dispatch => {
  //mockup api call - change read property to true
  dispatch({
    type: "SET_EMAIL_READ_API",
    payload: { address, date }
  });

  dispatch({
    type: "SET_EMAIL_READ",
    date
  });
};

export const deleteEmail = (address, deletedItems) => dispatch => {
  return new Promise((resolve, reject) => {
    //mockup api call - change email category to trash
    dispatch({
      type: "DELETE_EMAIL_API",
      payload: { address, deletedItems }
    });

    dispatch({
      type: "DELETE_EMAIL",
      deletedItems
    });
    resolve();
  });
};
