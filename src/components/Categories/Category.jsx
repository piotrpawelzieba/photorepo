// @flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { DropTarget } from 'react-dnd';
import type { ConnectDropTarget } from 'react-dnd';
import { Button } from 'shared/styled';
import { StyledCategory } from './styled';

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
    category,
    isActive,
    onDeleteClick,
    onCategoryClick,
    connectDropTarget,
    isOver,
    canDrop,
  } = props;

  return connectDropTarget(
    <div>
      <StyledCategory isActive={isActive} isOver={isOver} canDrop={canDrop}>
        <Button data-value={category.title} onClick={onCategoryClick}>
          {`${category.title} (${category.count})`}
        </Button>
        <Button data-category={category.title} onClick={onDeleteClick}>
          <FontAwesome name="trash-o">Delete</FontAwesome>
        </Button>
      </StyledCategory>
    </div>,
  );
};

const spec = {
  drop: props => ({
    category: props.category.title.toLowerCase().trim(),
  }),
  canDrop: (props, monitor) => {
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
