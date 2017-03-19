import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';

const Category = (props) => {
    const { 
        category: {title, isPrivate, count},
        isActive,
        key,
        onDeleteClick,
        onCategoryClick,
        connectDropTarget,
        isOver,
        canDrop
    } = props;

    let className = 'categories__item';
    if(canDrop)
        className += " categories__item--droppable";

    if(isOver)
        className += " categories__item--isOver";

    if(isActive)
        className += " categories__item--isActive";
   
   
    return connectDropTarget(
        <li 
            key={key+1} 
            className={className}>
            <a className={'categories__link'} data-value={title} onClick={onCategoryClick} href={`#${title}`} >{`${title} (${count})`} </a>  
            <a className="categories__icon fa fa-trash-o" data-category={title} aria-hidden="true" onClick={onDeleteClick}></a>
        </li>
    );
}

const spec = {
    drop(props, monitor, component) {
        return {
            category: props.category.title.toLowerCase().trim()
        };
    },
    canDrop(props, monitor, component) {
        const {category} = monitor.getItem().props;
        return category !== props.category.title.toLowerCase();
    }
};

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
});

export default DropTarget('ADD_TO_CATEGORY', spec, collect)(Category);