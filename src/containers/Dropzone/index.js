import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uploadPhoto } from 'store/redux/actions/photoActions';
import Dropzone from '../../components/Dropzone';

const mapStateToProps = state => ({
  categories: state.categories.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ uploadPhoto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dropzone);
