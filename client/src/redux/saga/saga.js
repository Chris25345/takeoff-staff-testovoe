import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesContacts from '../actionTypes/contactsAT';

async function fetchData({
  url, method, headers, body
}) {
  const response = await fetch(url, {
    method,
    headers,
    body,
    credentials: "include",
  });
  const data = response.json();
  return data;
}
function* fetchContacts() {
  try {
    const contacts = yield call(fetchData, {
      url: 'https://jsonplaceholder.typicode.com/users',
    });
    yield put({ type: actionTypesContacts.INIT_CONTACTS_SUCCESS, payload: contacts });
  } catch (error) {
    yield put({ type: actionTypesContacts.INIT_CONTACTS_ERROR, payload: error });
  }
}
function* deleteContacts(action) {
  try {
    yield call(fetchData, {
      url: `https://jsonplaceholder.typicode.com/users/${action.payload}`,
      method: "DELETE",
    });
    yield put({ type: actionTypesContacts.DELETE_CONTACT_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: actionTypesContacts.DELETE_CONTACT_ERROR, payload: error.message });
  }
}

function* watchActions() {
  yield takeEvery(actionTypesContacts.INIT_CONTACTS_START, fetchContacts);
  yield takeEvery(actionTypesContacts.DELETE_CONTACT_START, deleteContacts)
}
export default watchActions;
