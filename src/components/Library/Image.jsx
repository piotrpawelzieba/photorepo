// @flow
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { DragSource } from 'react-dnd';
import { API_ROOT_URL } from '../../constants';

const Image = ({
  id,
  url,
  connectDragSource,
  className,
  onImageClick,
  onDeleteClick,
}) =>
  connectDragSource(
    <div className={className}>
      <button>
        <FontAwesome name="pencil" />
      </button>
      <button onClick={onDeleteClick(id)}>
        <FontAwesome name="trash-o" />
      </button>
      <button onClick={onImageClick(id)}>
        <img src={`${API_ROOT_URL}/${url}`} alt="" />
      </button>
    </div>,
  );

const spec = {
  beginDrag: props => ({
    props,
  }),
  endDrag: (props, monitor) => {
    const dropResult = monitor.getDropResult();
    if (dropResult) props.onDrop(props.id, dropResult);
  },
  canDrag: () => true,
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  getItem: monitor.getItem,
});

export default DragSource('ADD_TO_CATEGORY', spec, collect)(Image);
