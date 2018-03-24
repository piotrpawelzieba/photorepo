// @flow
import * as React from 'react';
import './Categories.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import Category from './Category';
import CategoryCreator from './CategoryCreator';
import NewCategoryButton from './NewCategoryButton';

type TProps = {
  categories: {
    current: TCategory,
    items: Array<TCategory>,
    isFetching: boolean,
  },
  activeCategory: string,
  getCategories: () => void,
  addCategory: ({ title: string, isPrivate: boolean }) => void,
  removeCategory: ({ category: string }) => void,
  setCategory: ({ category: string }) => void,
  assignCategory: () => void,
};

type TState = {
  categoryCreator: ?{
    title: string,
    isPrivate: boolean,
  },
};

class Categories extends React.Component<TProps, TState> {
  state = {
    categoryCreator: null,
  };
  componentDidMount() {
    const { activeCategory, setCategory, getCategories } = this.props;
    getCategories();
    if (activeCategory) {
      setCategory({ category: activeCategory });
    }
  }

  onNewCategoryClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const categoryCreator = {
      title: '',
      isPrivate: true,
    };

    this.setState({ categoryCreator });
  };

  onAddClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const {
      categorytitle: category,
    }: { categorytitle: string } = event.currentTarget.dataset;
    const { isPrivate = false } = this.state.categoryCreator || {};

    this.props.addCategory({
      title: category.toLowerCase().trim(),
      isPrivate,
    });

    this.hideCategoryCreator();
  };

  onCategoryClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const category: string = event.currentTarget.dataset.value;
    this.props.setCategory({ category });
  };

  onDeleteClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { category }: { category: string } = event.currentTarget.dataset;
    this.props.removeCategory({ category });
  };

  onCancelClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.hideCategoryCreator();
  };

  onLockClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.togglePrivacy();
  };

  setTitle = ({ currentTarget }: SyntheticEvent<HTMLInputElement>) => {
    this.setState(({ categoryCreator }) => ({
      categoryCreator: {
        ...categoryCreator,
        title: currentTarget.value,
      },
    }));
  };

  togglePrivacy = () => {
    this.setState(({ categoryCreator }) => ({
      categoryCreator: {
        ...categoryCreator,
        isPrivate: !!categoryCreator && !categoryCreator.isPrivate,
      },
    }));
  };

  hideCategoryCreator = () => {
    this.setState({ categoryCreator: null });
  };

  renderExistingCategory = (category: TCategory) => (
    <Category
      category={category}
      key={category.title}
      isActive={this.props.categories.current === category.title}
      onDeleteClick={this.onDeleteClick}
      onCategoryClick={this.onCategoryClick}
    />
  );

  render() {
    const { categories } = this.props;
    const { categoryCreator } = this.state;

    return (
      <div>
        <h2>Categories:</h2>
        <ul className="categories">
          <NewCategoryButton onNewCategoryClick={this.onNewCategoryClick} />
          {categories.items.map(this.renderExistingCategory)}
          {categoryCreator && (
            <CategoryCreator
              {...categoryCreator}
              onChange={this.setTitle}
              onLockClick={this.onLockClick}
              onAddClick={this.onAddClick}
              onCancelClick={this.onCancelClick}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Categories;
