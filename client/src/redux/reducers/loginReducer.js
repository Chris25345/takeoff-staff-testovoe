import actionTypesLogin from "../actionTypes/loginAT";

const initialState = {
  loggedIn: false,
  person: {},
}
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesLogin.LOGIN_START:
      return {
        ...state,
        loggedIn: true,
        person: action.payload,
      }
    case actionTypesLogin.LOGOUT_START:
      return {
        ...state,
        loggedIn: false,
        person: {},
      }

    default:
      return state;
  }
}
export default loginReducer;
