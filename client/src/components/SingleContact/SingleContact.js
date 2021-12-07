import React from 'react'
import { useDispatch } from 'react-redux'
import actionTypesContacts from '../../redux/actionTypes/contactsAT'

const SingleContact = ({ id, name }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch({type: actionTypesContacts.DELETE_CONTACT_START, payload: id});
    console.log('deleted');
  }
  return (
    <div className="container mt-5">
      <div>
        <p>{name}</p>
        <button className="btn btn-secondary" onClick={handleDelete}>Delete</button>
        <button className="btn btn-info">Edit</button>
      </div>
    </div>
  )
}

export default SingleContact
