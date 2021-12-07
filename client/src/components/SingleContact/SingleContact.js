import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypesContacts from '../../redux/actionTypes/contactsAT';

const SingleContact = ({ id, name }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch({ type: actionTypesContacts.DELETE_CONTACT_START, payload: id });
  }
  return (
    <div style={{margin: '20px'}}>
      <div className="card" style={{width: "18rem"}}>
        <div className ="card-body">
        <h5 className ="card-title">{name}</h5>
        <button className="btn btn-secondary" onClick={handleDelete}>Delete</button>
        <Link to={`/edit/${id}`} className="btn btn-info ml-5">Edit</Link>
        </div>
      </div>
    </div>
  )
}

export default SingleContact
