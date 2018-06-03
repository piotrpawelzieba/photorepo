import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {
  removeCategory,
  addCategory,
  getCategories,
  setCategory,
} from 'store/redux/actions/categoriesActions';
import { assignCategory } from 'store/redux/actions/photoActions';
import Categories from './components';
import { selectCategories } from './redux/selectors';

const mapStateToProps = state => ({
  categories: selectCategories(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeCategory,
      addCategory,
      getCategories,
      setCategory,
      assignCategory,
    },
    dispatch,
  );

const withConnect = comp => {
  debugger; //eslint-disable-line
  const connected = connect(mapStateToProps, mapDispatchToProps)(comp);
  debugger; //eslint-disable-line
  return connected;
};

export default compose(withConnect)(Categories);
