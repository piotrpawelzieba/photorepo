import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { API_ROOT_URL } from '../../constants';

const Image = ({ key, id, url, category, connectDragSource, onDrop, className, onImageClick, onDeleteClick }) => {

    return connectDragSource(
        <div className={className} data-id={id} key={key} onClick={onImageClick}>
            <i className="fa fa-trash-o" aria-hidden="true" onClick={onDeleteClick(id)}></i>
            <i className="fa fa-pencil" aria-hidden="true" ></i>
            <img data-id={id} src={`${API_ROOT_URL}/${url}`} />
        </div>
    );
}



const spec = {
    beginDrag: (props, monitor, component) => {
        return {
            props
        };
    },
    endDrag: (props, monitor, component) => {
        const dropResult = monitor.getDropResult();
        if (dropResult)
            props.onDrop(props.id, dropResult);

    },
    canDrag: (props, monitor, component) => {
        return true;
    },
    isDragging: (props, monitor, component) => {

    }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    getItem: monitor.getItem,
});

export default DragSource('ADD_TO_CATEGORY', spec, collect)(Image);
