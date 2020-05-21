import React from 'react';
import { createBrowserHistory } from "history";
import {Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
