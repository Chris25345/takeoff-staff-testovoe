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
    yield put({ type: actionTypesContacts.INIT_CONTACTS_ERROR, payload: error.message });
  }
}
function* addContact(action) {
  try {
    const newUser = yield call(fetchData, {
      url: `https://jsonplaceholder.typicode.com/users`,
      method: "POST",
      body: JSON.stringify({
        name: action.payload,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    yield put({ type: actionTypesContacts.ADD_CONTACT_SUCCESS, payload: { id: newUser.id, name: action.payload } });
  } catch (error) {
    yield put({ type: actionTypesContacts.INIT_CONTACTS_ERROR, payload: error.message });
  }
}
function* editContact(action) {
  try {
    console.log(action);
    const updatedUser = yield call(fetchData, {
      url: `https://jsonplaceholder.typicode.com/users/${action.payload.id}`,
      method: "PUT",
      body: JSON.stringify({
        name: action.payload,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    yield put({ type: actionTypesContacts.EDIT_CONTACT_SUCCESS, payload: { id: updatedUser.id, name: action.payload.name } });
  } catch (error) {
    yield put({ type: actionTypesContacts.INIT_CONTACTS_ERROR, payload: error.message });
  }
}
function* watchActions() {
  yield takeEvery(actionTypesContacts.INIT_CONTACTS_START, fetchContacts);
  yield takeEvery(actionTypesContacts.DELETE_CONTACT_START, deleteContacts);
  yield takeEvery(actionTypesContacts.ADD_CONTACT_START, addContact);
  yield takeEvery(actionTypesContacts.EDIT_CONTACT_START, editContact);
}
export default watchActions;
