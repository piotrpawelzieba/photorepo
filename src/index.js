import React, { Component } from 'react';
import { Provider } from 'react-redux';


import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
/*      middlewares         */
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './redux';
import Home from './Routes/Home';
import Edit from './Routes/Edit';

const logger = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware, logger));

const isActiveFn = (...props) => {
    debugger;
    console.log(props);
}

const Links = () => (
    <div>
        <NavLink exact activeClassName="active" to="/"> Home </NavLink>
    </div>
);

const App = () => (
    <Provider store={store} >
        <Router>
            <div>
                <Links />
                <Route exact path="/:category?/:photoId?" component={Home} />
                <Route strict path="/photos/:photoId?/edit" component={Edit} />
            </div>
        </Router>
    </Provider>
);

const container = document.createElement('div');
render(<App />, container);
document.body.appendChild(container);
