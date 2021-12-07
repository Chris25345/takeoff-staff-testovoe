import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import actionTypesContacts from '../../redux/actionTypes/contactsAT';

const EditContactForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [alert, setAlert] = useState(false);
  const [short, setShort] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.name.value) {
      setShort(true);
      setTimeout(() => setShort(false), 3000);
      return;
    }
    const person = {
      id,
      name: e.target.name.value
    }
    dispatch({ type: actionTypesContacts.EDIT_CONTACT_START, payload: person });
    setAlert(true)
    setTimeout(() => setAlert(false), 3000)
  }
  return (
    <div>
      <form className='container mt-5' onSubmit={handleSubmit}>
        {!alert ? null : <div className="alert alert-success" role="alert">
          Пользователь изменен
        </div>}
        {!short ? null : <div className="alert alert-success" role="alert">
          Поле не должно быть пустым
        </div>}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-primary ml-5" to="/">Вернуться на главную</Link>
      </form>
    </div>
  )
}

export default EditContactForm
