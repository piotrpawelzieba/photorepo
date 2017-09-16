import React, { Component } from 'react';
import { object, func, string } from 'prop-types';
import './Categories.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import Category from './Category.jsx';
import CategoryCreator from './CategoryCreator.jsx';
import NewCategoryButton from './NewCategoryButton.jsx';

class Categories extends Component {
    static propTypes = {
        categories: object.isRequired,
        activeCategory: string.isRequired,
        getCategories: func.isRequired,
        addCategory: func.isRequired,
        removeCategory: func.isRequired,
        setCategory: func.isRequired,
        assignCategory: func.isRequired
    };

    state = {
        categoryCreator: {
            title: '',
            isPrivate: true,
            isVisible: false
        }
    };

    setTitle = ({ target: { value } }) => {
        this.setState({
            categoryCreator: {
                ...this.state.categoryCreator,
                title: value
            }
        });
    }

    setPrivacy() {
        const categoryCreator = {
            ...this.state.categoryCreator,
            isPrivate: !this.state.categoryCreator.isPrivate
        };

        this.setState({ categoryCreator });
    }

    onNewCategoryClick = (ev) => {
        ev.preventDefault();
        const categoryCreator = {
            title: '',
            isPrivate: true,
            isVisible: true
        };

        this.setState({ categoryCreator });
    }

    hideCategoryCreator = () => {
        const categoryCreator = {
            ...this.state.categoryCreator,
            isVisible: false
        };

        this.setState({ categoryCreator });
    }

    onCategoryClick = (ev) => {
        ev.preventDefault();
        const category = ev.target.dataset.value;
        this.props.setCategory({category});
    }

    onAddClick = (ev) => {
        const { categorytitle: category } = ev.target.dataset;

        this.props.addCategory({ title: category.toLowerCase().trim(), isPrivate: this.state.categoryCreator.isPrivate });
        this.hideCategoryCreator();
    }
    onDeleteClick = (ev) => {
        const { category } = ev.target.dataset;
        this.props.removeCategory({category});
    }
    onCancelClick = (ev) => {
        ev.preventDefault();
        this.hideCategoryCreator();
    }
    onLockClick = (ev) => {
        ev.preventDefault();
        this.setPrivacy();
    }

    componentDidMount() {
        this.props.getCategories();
        if(this.props.activeCategory)
            this.props.setCategory({category: this.props.activeCategory});
    }

    renderExistingCategories() {
        const lis = this.props.categories.items
            .map((category, pos) =>
                <Category category={category}
                    isActive={this.props.categories.current === category.title}
                    key={pos}
                    onDeleteClick={this.onDeleteClick}
                    onCategoryClick={this.onCategoryClick}
                />
            );
        return lis;
    }
    render() {

        const { isPrivate, isVisible, title } = this.state.categoryCreator;

        return (
            <div>
                <h2>Categories:</h2>
                <ul className='categories'>
                    <NewCategoryButton
                        onNewCategoryClick={this.onNewCategoryClick}
                    />
                    {this.renderExistingCategories()}
                    <CategoryCreator
                        title={title}
                        isVisible={isVisible}
                        isPrivate={isPrivate}
                        onChange={this.setTitle}
                        onLockClick={this.onLockClick}
                        onAddClick={this.onAddClick}
                        onCancelClick={this.onCancelClick}
                    />
                </ul>
            </div>
        );
    }
}


export default Categories;

