/*      React dependencies      */

import React, {Component} from 'react';
import {connect} from 'react-redux';

/*      Actions      */
import {removeCategory} from '../../actions/categoriesActions';


/*      Components      */
import {
    GridView, 
    ListView, 
    Categories } from '../../components';


class Library extends Component {
    constructor(props){
        super(props);
        this.state = {
            listmode: true 
        }
       this.removeCategory =  this.removeCategory.bind(this);
    }

    removeCategory({target: {dataset: {category}}}) {
        this.props.removeCategory(category);
    }
    
    getCategories(images){
        // const distinctCategories = images.map(({category})=>category).filter((category,pos, array)=> array.indexOf(category) === pos && category !== null);
                
        return this.props.categories.map(({title}) => ({
            title: title.toUpperCase(),
            count: images.filter((img)=>(img.category === title)).length
        }));
    }

    render(){
        const {images} = this.props;
        const categories = this.getCategories(this.props.images);
        
        return (
            <div>
                <h1>{'PIOTR ZIEBA'}</h1>
                <h2>{'Library'}</h2>
                <Categories categories={categories} removeCategory={this.removeCategory}/>
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Library)

