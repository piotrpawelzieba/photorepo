// @flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { DropTarget } from 'react-dnd';
import type { ConnectDropTarget } from 'react-dnd';

type TProps = {
  category: TCategory,
  isActive: boolean,
  onDeleteClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
  onCategoryClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
  isOver: boolean,
  connectDropTarget: ConnectDropTarget,
  canDrop: boolean,
};

const Category = (props: TProps) => {
  const {
    category: { title, count },
    isActive,
    onDeleteClick,
    onCategoryClick,
    connectDropTarget,
    isOver,
    canDrop,
  } = props;

  let className: string = 'categories__item';
  className += canDrop ? `${className} categories__item--droppable` : '';
  className += isOver ? `${className} categories__item--isOver` : '';
  className += isActive ? `${className} categories__item--isActive` : '';

  return connectDropTarget(
    <li className={className}>
      <button
        className="categories__button"
        data-value={title}
        onClick={onCategoryClick}
      >
        {`${title} (${count})`}
      </button>
      <button
        className="categories__icon"
        data-category={title}
        onClick={onDeleteClick}
      >
        <FontAwesome name="trash-o">Delete</FontAwesome>
      </button>
    </li>,
  );
};

const spec = {
  drop(props) {
    return {
      category: props.category.title.toLowerCase().trim(),
    };
  },
  canDrop(props, monitor) {
    const { category } = monitor.getItem().props;
    return category !== props.category.title.toLowerCase();
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType(),
});

const WithDropTarget = DropTarget('ADD_TO_CATEGORY', spec, collect)(Category);

type TInputProps = {
  category: TCategory,
  isActive: boolean,
  onDeleteClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
  onCategoryClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

export default (props: TInputProps) => <WithDropTarget {...props} />;
