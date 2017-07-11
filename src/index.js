import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Categories from './containers/Categories';
import Library from './containers/Library';
import Dropzone from './containers/Dropzone';

import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';

import {render} from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

/*      middlewares         */ 
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';



import './index.css';
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

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
        if(this.state.showDropzone) return;
        const {dataTransfer: {types}} = ev;
        const [type = ""] = types; 
        if(type==="Files")
            this.setState({showDropzone: true});
    }
    hideDropzone(){
            this.setState({showDropzone: false});
    }
    onDragLeave(ev){
        const {clientX, clientY} = ev;

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
                    <Categories />
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

const DraggableApp = DragDropContext(HTML5Backend)(App);
const container = document.createElement('div');
render(<DraggableApp />, container);
document.body.appendChild(container);
