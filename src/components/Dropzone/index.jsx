// @flow
import Dropzone from 'react-dropzone';
import * as React from 'react';
import Category from './Category';
import './index.css';

type TProps = {
  categories: Array<TCategory>,
  showDropzone: () => void,
  onDragLeave: () => void,
  hideDropzone: () => void,
  uploadPhoto: ({| files: Array<File>, category: TCategory |}) => void,
};

class Drop extends React.Component<TProps> {
  onDrop = (files: Array<File>, arr: Array<*>, event: SyntheticEvent<*>) => {
    const { category } = event.currentTarget.dataset;
    this.props.hideDropzone();
    this.props.uploadPhoto({ files, category });
  };
  dropzone: ?HTMLElement;
  assignRef = (dropzone: ?HTMLElement) => {
    this.dropzone = dropzone;
  };
  renderCategory = (category: TCategory) => (
    <Category
      category={category}
      key={`dropzone_${category.title}`}
      className="dropzone__category"
    />
  );
  render() {
    const { showDropzone, onDragLeave } = this.props;
    return (
      <div
        className={showDropzone ? 'dropzone--active' : 'dropzone--inactive'}
        onDragLeave={onDragLeave}
      >
        <Dropzone
          ref={this.assignRef}
          onDrop={this.onDrop}
          disableClick
          className="dropzoneContainer"
        >
          <ul className="dropzone__categories">
            {this.props.categories.map(this.renderCategory)}
          </ul>
        </Dropzone>
      </div>
    );
  }
}

export default Drop;
