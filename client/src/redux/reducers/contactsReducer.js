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
    case actionTypesContacts.ADD_CONTACT_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesContacts.ADD_CONTACT_SUCCESS: {
      const copyList = [...state.list];
      return {
        ...state,
        list: [...copyList, { id: action.payload.id, name: action.payload.name }]
      }
    }
    case actionTypesContacts.EDIT_CONTACT_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesContacts.EDIT_CONTACT_SUCCESS: {
      const copyList = [...state.list];
      console.log(copyList, '1');
      copyList.forEach((el) => {
        if (el.id === action.payload.id) {
          el.name = action.payload.name
        }
      });
      console.log(copyList, '2');
      return {
        ...state,
        list: copyList,
      }
    }
    default:
      return state;
  }
}
export default contactsReducer;
