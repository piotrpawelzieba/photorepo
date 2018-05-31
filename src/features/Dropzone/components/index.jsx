// @flow
import * as React from 'react';
import { Row, Col } from 'antd';
import Dropzone from 'react-dropzone';
import { StyledDropzoneWrapper } from './styled';
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
    <Col key={`dropzone_${category.title}`}>
      <Category category={category} />
    </Col>
  );
  render() {
    const { showDropzone, onDragLeave, categories } = this.props;
    return (
      <StyledDropzoneWrapper isActive={showDropzone} onDragLeave={onDragLeave}>
        <Dropzone ref={this.assignRef} onDrop={this.onDrop} disableClick>
          <Row type="flex" justify="space-between">
            {categories.map(this.renderCategory)}
          </Row>
        </Dropzone>
      </StyledDropzoneWrapper>
    );
  }
}

export default Drop;
