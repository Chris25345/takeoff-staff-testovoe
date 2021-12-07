import actionTypesContacts from "../actionTypes/contactsAT";

const initalState = {
  list: [],
  error: null,
}
const contactsReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypesContacts.INIT_CONTACTS_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesContacts.INIT_CONTACTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      }
    case actionTypesContacts.INIT_CONTACTS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case actionTypesContacts.DELETE_CONTACT_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesContacts.DELETE_CONTACT_SUCCESS: {
      const copyList = [...state.list];
      return {
        ...state,
        list: copyList.filter(el => el.id !== action.payload)
      }
    }
    case actionTypesContacts.DELETE_CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
export default contactsReducer;
