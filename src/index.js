import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import App from './components/App';
import About from './components/About/About';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Switch path="/"> {/* Switch makes all routes that have the same URL properties get rendered */}
        <Route exact path="" component={App} />
        <Route exact path="about" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

