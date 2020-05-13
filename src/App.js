import React from 'react';
import Homepage from './pages/Homepage'
import { createBrowserHistory } from "history";
import {Router, Switch, Route} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
