import { connect } from 'react-redux';
import Dropzone from '../../components/Dropzone';
import {bindActionCreators} from 'redux';
import {uploadPhoto} from '../../redux/actions/photoActions';

const mapStateToProps = (state) => {
    return {
        categories: state.categories.items,
    };
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({uploadPhoto}, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dropzone);

