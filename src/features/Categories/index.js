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

const mapStateToProps = state => {
  const categories = {
    ...state.categories,
    items: state.categories.items.map(category => ({
      ...category,
      count: state.images.items.filter(img => img.category === category.title)
        .length,
    })),
  };

  return { categories };
};

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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Categories);
