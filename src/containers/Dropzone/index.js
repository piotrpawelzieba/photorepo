import { connect } from 'react-redux'
import Dropzone from '../../components/Dropzone';


const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories.items
    }
}

export default connect(mapStateToProps, null)(Dropzone)

