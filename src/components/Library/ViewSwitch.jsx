import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'shared/styled';

type TProps = {
  onGridClick: () => void,
  onListClick: () => void,
};

const ViewSwitch = ({ onGridClick, onListClick }: TProps) => (
  <div className="viewSwitch">
    <Button onClick={onGridClick}>
      <FontAwesome name="th-large" />
    </Button>
    <Button onClick={onListClick}>
      <FontAwesome name="list" />
    </Button>
  </div>
);

export default ViewSwitch;
