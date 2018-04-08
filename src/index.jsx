import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

/*      middlewares         */
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic, rootReducer } from './redux';
import Home from './Routes/Home';
import Edit from './Routes/Edit';
import Users from './Routes/Users';

const logger = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware, logger));

const Links = () => (
  <div>
    <NavLink exact activeClassName="active" to="/">
      {' '}
      Home{' '}
    </NavLink>
  </div>
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Links />
        <Switch>
          <Route exact path="/?" component={Home} />
          <Route path="/edit" component={Edit} />
          <Route path="/users" component={Users} />
          <Route path="/:category?" component={Home} />
          <Route render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

const container = document.createElement('div');
render(<App />, container);
document.body.appendChild(container);

export default App;
