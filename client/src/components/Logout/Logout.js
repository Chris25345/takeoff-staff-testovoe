import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypesLogin from '../../redux/actionTypes/loginAT';
import SingleContact from '../SingleContact/SingleContact';

const Logout = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const contacts = useSelector(state => state.contacts.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value);
  }
  const logout = () => {
    dispatch({ type: actionTypesLogin.LOGOUT_START });
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <button onClick={logout} type="button" className="btn btn-primary">Logout</button>
        <Link to="/add-contact" className="btn btn-primary">Добавить контакт</Link>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input className="form-control mr-sm-2" name='search' type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" >Search</button>
        </form>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {contacts
          .filter(el => {
            if (query === "") {
              return el;
            } else if (el.name.toLowerCase().includes(query.toLowerCase())) {
              return el;
            }
          })
          .map((el) => <SingleContact key={el.id} id={el.id} name={el.name} />)}
      </div>
    </div>
  )
}

export default Logout
