import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dropzone from '../../components/Dropzone';
import { uploadPhoto } from '../../redux/actions/photoActions';

const mapStateToProps = state => ({
  categories: state.categories.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ uploadPhoto }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dropzone);
