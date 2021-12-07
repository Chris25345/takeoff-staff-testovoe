import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';

function App() {
  const loggedIn = useSelector(state => state.login.loggedIn);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={loggedIn ? Logout : Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
