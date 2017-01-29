import React, {Component} from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

/*      middlewares         */ 
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers';
import {getPhotos} from './actions/photoActions'
import {getCategories} from './actions/categoriesActions'

import ReduxToastr from 'react-redux-toastr'
import Library from './containers/Library';

import './index.css';
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(getPhotos());
store.dispatch(getCategories());

class App extends Component {
    render(){
        return (
            <Provider store={store} >
                <div>
                    <ReduxToastr
                        timeOut={4000}
                        newestOnTop={false}
                        preventDuplicates={true}
                        position="top-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                    />
                    <Library />
                </div>
            </Provider>
        );
    }
}

const container = document.createElement('div');
render(<App />, container);
document.body.appendChild(container);
