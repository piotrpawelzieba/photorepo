// @flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { DragSource } from 'react-dnd';
import { Card } from 'antd';
import { Button, Img } from 'shared/styled';
import { API_ROOT_URL } from '../../../api/utils';

type TProps = {
  id: number,
  url: string,
  connectDragSource: (node: React.Node) => React.Node,
  onImageClick: (id: number) => void,
  onDeleteClick: (id: number) => void,
};

type TExternalProps = {
  id: number,
  url: string,
  onImageClick: (id: number) => void,
  onDeleteClick: (id: number) => void,
};

const Image = ({
  id,
  url,
  connectDragSource,
  onImageClick,
  onDeleteClick,
}: TProps) =>
  connectDragSource(
    <div>
      <Card
        title="Title"
        extra={
          <React.Fragment>
            <Button>
              <FontAwesome name="pencil" />
            </Button>
            <Button onClick={onDeleteClick(id)}>
              <FontAwesome name="trash-o" />
            </Button>
          </React.Fragment>
        }
        cover={
          <Button onClick={onImageClick(id)}>
            <Img src={`${API_ROOT_URL}/${url}`} alt="" />
          </Button>
        }
      />
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

const Draggable = DragSource('ADD_TO_CATEGORY', spec, collect)(Image);

export default (props: TExternalProps) => <Draggable {...props} />;
