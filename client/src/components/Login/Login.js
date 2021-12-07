import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actionTypesLogin from '../../redux/actionTypes/loginAT';

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    dispatch({ type: actionTypesLogin.LOGIN_START, payload: person });
    history.push('/');
  }
  return (
    <form onSubmit={handleSubmit} className='container mt-5'>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login

