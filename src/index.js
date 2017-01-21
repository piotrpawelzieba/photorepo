import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
    render(){
        return (
            <div id="app">
                App
            </div>
        );
    }
}

render(<App />, document.body);
