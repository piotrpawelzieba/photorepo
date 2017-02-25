import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';

const Category = (  {
    category: {
        title, 
        itemsCount
    }, 
    key,
    onDeleteClick,
    onCategoryClick,
    connectDropTarget,
    isOver,
    canDrop
}) => {
    let className = 'categories__item';
    if(canDrop)
        className += " categories__item--droppable";

    if(isOver)
        className += " categories__item--isOver";
    
    return connectDropTarget(
    <li 
        key={key+1} 
        className={className}>
        <a className={'categories__link'} data-value={title} onClick={onCategoryClick} href={`#${title}`} >{`${title} (${itemsCount})`} </a>  
        <a className="categories__icon fa fa-trash-o" data-category={title} aria-hidden="true" onClick={onDeleteClick}></a>
    </li>
);

}

// class Category extends Component{
//     constructor(props){
//         super(props);
//     }
//     render() {
//         const { category: { title, itemsCount }, 
//             onDrop,
//             key,  
//             onDeleteClick,
//             connectDropTarget
//         } = this.props;

//         return connectDropTarget(
//             <li key={key+1} className={"categories__item"}>
//                 <a className={'categories__link'} href={`#${title}`} >{`${title} (${itemsCount})`} </a>  
//                 <a className="categories__icon fa fa-trash-o" data-category={title} aria-hidden="true" onClick={onDeleteClick}></a>
//             </li>
//         );
//     }

// }

const spec = {
    drop(props, monitor, component) {
        return {
            category: props.category.title.toLowerCase().trim()
        };
    },
    hover(props, monitor, component) {

    },
    canDrop(props, monitor, component) {
        const {props: {category}} = monitor.getItem();
        return category !== props.category.title.toLowerCase();
    }
};

const collect = (connect, monitor) => {

    return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
    });
}

export default DropTarget('ADD_TO_CATEGORY', spec, collect)(Category);