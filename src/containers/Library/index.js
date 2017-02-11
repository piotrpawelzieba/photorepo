/*      React dependencies      */

import React, {Component} from 'react';
import {connect} from 'react-redux';

/*      Actions      */
import {removeCategory, addCategory} from '../../actions/categoriesActions';


/*      Components      */
import {
    CategoryCreator,
    GridView, 
    ListView, 
    Categories } from '../../components';


class Library extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            listmode: true,
            categoryCreator: {
                visible: false
            }
        };

        this.addCategory =  this.addCategory.bind(this);
        this.removeCategory =  this.removeCategory.bind(this);
        this.showCategoryCreator =  this.showCategoryCreator.bind(this);
        this.hideCategoryCreator =  this.hideCategoryCreator.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.setTitle =  this.setTitle.bind(this);
        this.setPrivacy =  this.setPrivacy.bind(this);
    }

    showCategoryCreator(ev){
        ev.preventDefault();
        this.setState({
            categoryCreator: {
                ...this.state.categoryCreator,
                visible: true
            }
        });
    }
    hideCategoryCreator(){
        this.setState({
            categoryCreator: {
                ...this.state.categoryCreator,
                visible: false
            }
        });

    } 
    onCancelClick(ev){
        ev.preventDefault();
        this.hideCategoryCreator();
    }

    addCategory({
        target: {
            dataset: {
                categorytitle: category
            }
        }
    }) {
        this.props.addCategory({title: category, isPrivate: false});
        this.hideCategoryCreator();
    }

    removeCategory({target: {dataset: {category}}}) {
        this.props.removeCategory(category);
    }
    
    getCategories(images){
              
        return this.props.categories.map(({title}) => ({
            title: title.toUpperCase(),
            itemsCount: images.filter((img)=>(img.category === title)).length
        }));
    }

    setTitle({target: {value:title}}){
        this.setState({
            categoryCreator: {
                ...this.state.categoryCreator,
                title
            }
        })
    }
    setPrivacy() {
        this.setState({
            categoryCreator: {
                ...this.state.categoryCreator,
                isPrivate: !this.state.categoryCreator.isPrivate
            }
        });
    }
    render(){
        const {images} = this.props;
        const categories = this.getCategories(this.props.images);
        
        return (
            <div>
                <h1>{'PIOTR ZIEBA'}</h1>
                <h2>{'Library'}</h2>
                <Categories 
                    categories={categories} 
                    showCategoryCreator={this.showCategoryCreator} 
                    categoryCreator={this.state.categoryCreator}
                    setTitle={this.setTitle}
                    onAddClick={this.addCategory}
                    onDeleteClick={this.removeCategory}
                    onCancelClick={this.onCancelClick}
                />
                {this.state.listmode ? <ListView images = {images} /> : <GridView images={images} />  }
            </div>
        );
    }
}

const mapStateToProps = ({images: {items: images}, categories: {items: categories}}, ownProps) => {
     return { images, categories };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeCategory: (title) =>{
            dispatch(removeCategory(title));
        },
        addCategory: ({title, isPrivate}) => {
            dispatch(addCategory({title, isPrivate}));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Library)

