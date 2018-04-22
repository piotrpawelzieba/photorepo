// @flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { DragSource } from 'react-dnd';
import { Card, Col } from 'antd';
import { API_ROOT_URL } from 'store/constants';
import { Button } from 'shared/styled';

type TProps = {
  id: number,
  url: string,
  listview: boolean,
  connectDragSource: (node: React.Node) => React.Node,
  onImageClick: (id: number) => void,
  onDeleteClick: (id: number) => void,
};

const Image = ({
  id,
  url,
  listview,
  connectDragSource,
  onImageClick,
  onDeleteClick,
}: TProps) =>
  connectDragSource(
    <div>
      <Col span={listview ? 24 : 4}>
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
              <img src={`${API_ROOT_URL}/${url}`} alt="" />
            </Button>
          }
        />
      </Col>
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

type TExternalProps = {
  id: number,
  url: string,
  listview: boolean,
  onImageClick: (id: number) => void,
  onDeleteClick: (id: number) => void,
};

export default (props: TExternalProps) => <Draggable {...props} />;
