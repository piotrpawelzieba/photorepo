import React, {Component} from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import * as photoActions from './actions/photoActions'

import ReduxToastr from 'react-redux-toastr'
import Library from './containers/Library';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(photoActions.fetchPhotos());

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
