// @flow
import * as React from 'react';
import { Row } from 'antd';
import { StyledDropzone } from './styled';
import Category from './Category';

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
    <Category category={category} key={`dropzone_${category.title}`} />
  );
  render() {
    const { showDropzone, onDragLeave } = this.props;
    return (
      <div onDragLeave={onDragLeave}>
        <StyledDropzone
          isActive={showDropzone}
          innerRef={this.assignRef}
          onDrop={this.onDrop}
          disableClick
        >
          <Row type="flex" justify="space-between">
            {this.props.categories.map(this.renderCategory)}
          </Row>
        </StyledDropzone>
      </div>
    );
  }
}

export default Drop;
