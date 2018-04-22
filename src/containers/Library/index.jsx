/*      React dependencies      */

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Images, FullImage, ViewSwitch } from '../../components';
import {
  getPhotos,
  assignCategory,
  deletePhoto,
} from '../../store/redux/actions/photoActions';

type TProps = {
  images: Array<TImage>,
  getPhotos: () => void,
  assignCategory: ({ id: number, payload: * }) => void,
  deletePhoto: id => () => void,
};

type TState = {
  image: string,
  listmode: boolean,
};

class Library extends React.Component<TProps, TState> {
  state = {
    image: '',
    listmode: true,
  };

  componentDidMount() {
    this.props.getPhotos();
  }

  onOverlayClick = () => {
    this.setState({ image: null });
  };

  onImageClick = id => () => {
    if (this.state.listmode) return;
    const img = this.props.images.find(({ _id }) => id === _id);
    this.setState({ image: img });
  };

  onGridClick = () => {
    this.setState({ listmode: false });
  };

  onListClick = () => {
    this.setState({ listmode: true });
  };

  onDrop = (id, payload) => {
    this.props.assignCategory({ id, payload });
  };

  onDeleteClick = id => () => {
    this.props.deletePhoto({ id });
  };

  render() {
    const { image } = this.state;
    return (
      <div>
        <ViewSwitch
          onGridClick={this.onGridClick}
          onListClick={this.onListClick}
        />
        <Images
          images={this.props.images}
          onDrop={this.onDrop}
          listview={this.state.listmode}
          onImageClick={this.onImageClick}
          onDeleteClick={this.onDeleteClick}
        />
        {image && (
          <FullImage image={image} onOverlayClick={this.onOverlayClick} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ images, categories }) => ({
  images: images.items.filter(
    img => img.category === categories.current || !categories.current,
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhotos,
      assignCategory,
      deletePhoto,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Library);
