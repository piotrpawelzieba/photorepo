import React, {Component} from 'react';
import ReduxToastr from 'react-redux-toastr';

import Categories from '../../containers/Categories';
import Library from '../../containers/Library';
import Dropzone from '../../containers/Dropzone';

import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import './index.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.showDropzone = this.showDropzone.bind(this);
        this.hideDropzone = this.hideDropzone.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.state = {
            showDropzone: false
        };
    }
    showDropzone(ev) {
        if (this.state.showDropzone) return;
        const { dataTransfer: { types } } = ev;
        const [type = ""] = types;
        if (type === "Files")
            this.setState({ showDropzone: true });
    }
    hideDropzone() {
        this.setState({ showDropzone: false });
    }
    onDragLeave(ev) {
        const { clientX, clientY } = ev;

        if (!clientX && !clientY)
            this.hideDropzone();
    }
    render() {
        const {category = ""} = this.props.match.params;
        return (
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
                <Categories activeCategory={category}/>
                <Library />
                <div >
                    <Dropzone
                        onDragLeave={this.onDragLeave}
                        showDropzone={this.state.showDropzone}
                        hideDropzone={this.hideDropzone}
                    />
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Home);