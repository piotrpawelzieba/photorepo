import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'shared/styled';
import { Row } from 'antd';

type TProps = {
  onGridClick: () => void,
  onListClick: () => void,
};

const ViewSwitch = ({ onGridClick, onListClick }: TProps) => (
  <Row>
    <Button onClick={onGridClick}>
      <FontAwesome name="th-large" />
    </Button>
    <Button onClick={onListClick}>
      <FontAwesome name="list" />
    </Button>
  </Row>
);

export default ViewSwitch;
