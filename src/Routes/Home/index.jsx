// @flow
import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Row } from 'antd';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import type { Match } from 'react-router-dom';
import Categories from 'containers/Categories';
import Library from 'containers/Library';
import Dropzone from 'containers/Dropzone';
import './index.css';

type TProps = {
  match: Match,
};

type TState = {
  showDropzone: boolean,
};

class Home extends Component<TProps, TState> {
  state = {
    showDropzone: false,
  };

  onDragLeave = (event: DragEvent) => {
    const { clientX, clientY } = event;
    if (!clientX && !clientY) this.hideDropzone();
  };
  showDropzone = (event: DragEvent) => {
    if (this.state.showDropzone) return;
    const { dataTransfer } = event;
    const [type = ''] = dataTransfer ? dataTransfer.types : [];
    if (type === 'Files') this.setState({ showDropzone: true });
  };
  hideDropzone = () => {
    this.setState({ showDropzone: false });
  };
  render() {
    const { category = '' } = this.props.match.params;
    return (
      <div onDragOver={this.showDropzone}>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
        <Row type="flex" justify-content="flex-end">
          <h1>Library</h1>
        </Row>
        <Categories activeCategory={category} />
        <Library />
        <div>
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
