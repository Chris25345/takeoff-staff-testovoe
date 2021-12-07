import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypesLogin from '../../redux/actionTypes/loginAT';
import SingleContact from '../SingleContact/SingleContact';
import actionContacts from '../../redux/actionCreators/contactsAC';

const Logout = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);

  useEffect(() => {
    dispatch(actionContacts.initContacts());
  }, [dispatch]);

  const logout = () => {
    dispatch({type: actionTypesLogin.LOGOUT_START });
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <button onClick={logout} type="button" className="btn btn-primary">Logout</button>
      </nav>
      {contacts.map((el) => <SingleContact key={el.id} id={el.id} name={el.name} />)}
    </div>
  )
}

export default Logout
