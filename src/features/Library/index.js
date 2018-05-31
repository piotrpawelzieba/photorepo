import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getPhotos,
  assignCategory,
  deletePhoto,
} from 'store/redux/actions/photoActions';
import Library from './components';

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
