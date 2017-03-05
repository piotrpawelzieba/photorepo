
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import Library from './containers/Library';
import Dropzone from './containers/Dropzone';


import {render} from 'react-dom';

import {createStore, applyMiddleware} from 'redux';

/*      middlewares         */ 
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers';
import {getPhotos} from './actions/photoActions'
import {getCategories} from './actions/categoriesActions'


import './index.css';
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(getPhotos());
store.dispatch(getCategories());


class App extends Component {
    constructor(props){
        super(props);
        this.showDropzone = this.showDropzone.bind(this);
        this.hideDropzone = this.hideDropzone.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.state = {
            showDropzone: false
        };
    }   
    showDropzone(ev){
        const {dataTransfer: {types}} = ev;
        const [type = ""] = types; 
        if(type==="Files")
            this.setState({showDropzone: true});
    }
    hideDropzone(){
            this.setState({showDropzone: false});
    }
    onDragLeave(ev){
        const {target, clientX, clientY} = ev;

        if(!clientX && !clientY)
            this.hideDropzone();
    }
    render(){
        return (
            <Provider store={store} >
                <div 
                    onDragOver={this.showDropzone}
                >
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
                    <div >
                        <Dropzone 
                            onDragLeave={this.onDragLeave}
                            showDropzone={this.state.showDropzone}    
                            hideDropzone={this.hideDropzone}
                        />
                    </div>
                </div>
            </Provider>
        );
    }
}


const container = document.createElement('div');
render(<App />, container);
document.body.appendChild(container);
