import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import { LocaleProvider, Breadcrumb, Col, Row } from 'antd';

import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
/*      middlewares         */

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from 'store/redux';
import Home from './Routes/Home';
import Edit from './Routes/Edit';
import Users from './Routes/Users';

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

const Links = () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <NavLink exact activeClassName="active" to="/">
        Blog
      </NavLink>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <NavLink exact activeClassName="active" to="/Edit">
        Library
      </NavLink>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <NavLink exact activeClassName="active" to="/">
        Settings
      </NavLink>
    </Breadcrumb.Item>
  </Breadcrumb>
);

const App = () => (
  <LocaleProvider>
    <Provider store={store}>
      <Router>
        <Col>
          <Row>
            <Links />
          </Row>
          <Switch>
            <Route exact path="/?" component={Home} />
            <Route path="/edit" component={Edit} />
            <Route path="/users" component={Users} />
            <Route path="/:category?" component={Home} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
        </Col>
      </Router>
    </Provider>
  </LocaleProvider>
);

const container = document.createElement('div');
render(<App />, container);
document.body.appendChild(container);

export default App;
