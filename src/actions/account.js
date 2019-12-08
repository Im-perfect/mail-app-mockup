export const switchAccount = (accountIndex) => dispatch => {
      dispatch({
          type:"SWITCH_ACCOUNT",
          accountIndex
      })
}