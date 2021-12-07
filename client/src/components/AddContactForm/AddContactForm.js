import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypesContacts from '../../redux/actionTypes/contactsAT';
// import { useHistory } from 'react-router-dom';;


const AddContactForm = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypesContacts.ADD_CONTACT_START, payload: e.target.name.value });
    setAlert(true)
    setTimeout(() => setAlert(false), 2000)
  }
  return (
    <form className='container mt-5' onSubmit={handleSubmit}>
      {!alert ? null : <div className="alert alert-success" role="alert">
        Пользователь добавлен
      </div>}
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link className="btn btn-primary ml-5" to="/">Вернуться на главную</Link>
    </form>
  )
}

export default AddContactForm
