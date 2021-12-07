import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';
import AddContactForm from './components/AddContactForm/AddContactForm';
import { useEffect } from 'react';
import actionContacts from './redux/actionCreators/contactsAC';
import EditContactForm from './components/EditContactForm/EditContactForm';

function App() {
  const loggedIn = useSelector(state => state.login.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionContacts.initContacts());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={loggedIn ? Logout : Login} />
        {!loggedIn
          ? null
          :
          <Route exact path="/edit/:id" component={EditContactForm} />
        } 
        {!loggedIn
          ? null
          :
          <Route exact path="/add-contact" component={AddContactForm} />
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
