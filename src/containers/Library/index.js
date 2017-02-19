/*      React dependencies      */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
/*      Actions      */
import {removeCategory, addCategory} from '../../actions/categoriesActions';
import {assignCategory} from '../../actions/photoActions';


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
                visible: false,
                isPrivate: false
            },
            filteredImages: props.images
        };

        this.addCategory =  this.addCategory.bind(this);
        this.removeCategory =  this.removeCategory.bind(this);
        this.showCategoryCreator =  this.showCategoryCreator.bind(this);
        this.hideCategoryCreator =  this.hideCategoryCreator.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onLockClick = this.onLockClick.bind(this);
        this.setTitle =  this.setTitle.bind(this);
        this.onDropOnCategory =  this.onDropOnCategory.bind(this);
        this.onCategoryClick =  this.onCategoryClick.bind(this);
        // this.setPrivacy =  this.setPrivacy.bind(this);
    }

    onCategoryClick(ev){
        ev.preventDefault();

        const {images} = this.props;
        const {target : {
            dataset: {value: clickedCategory}
        }} = ev;

        this.setState({
            filteredImages: images.filter(({category})=> category===clickedCategory.toLowerCase().trim() )
        });
    }

    onDropOnCategory(id, payload) {
        console.log({id, payload});
        this.props.assignCategory(id, payload);
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
        this.props.addCategory({title: category.toLowerCase().trim(), isPrivate: this.state.categoryCreator.isPrivate});
        this.hideCategoryCreator();
    }

    removeCategory({target: {dataset: {category}}}) {
        this.props.removeCategory(category);
    }
    
    getCategories(images){             
        const imagesWithCategory = images.filter(({category})=>category);
        return this.props.categories.map(({title}) => ({
            title: title.toUpperCase(),
            itemsCount: imagesWithCategory.filter((img)=>(img.category.toLowerCase().trim() === title.toLowerCase().trim())).length
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
    onLockClick(ev) {
        ev.preventDefault();
        this.setPrivacy();
    }
    componentWillReceiveProps(props){
        this.setState({
            filteredImages: props.images
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
                    onCategoryClick={this.onCategoryClick}
                    onCancelClick={this.onCancelClick}
                    onLockClick={this.onLockClick}
                />
                {this.state.listmode ? 
                    <ListView 
                        images = {this.state.filteredImages} 
                        onDrop = {this.onDropOnCategory}    
                    /> : <GridView images={images} />  }
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
        },
        assignCategory: (id, payload) => {
            dispatch(assignCategory(id, payload));
        }
    };
};

const DraggableLibrary = DragDropContext(HTML5Backend)(Library);

export default connect(mapStateToProps, mapDispatchToProps)(DraggableLibrary);

