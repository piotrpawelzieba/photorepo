import React from 'react';
import FontAwesome from 'react-fontawesome';

type TProps = {
  onGridClick: () => void,
  onListClick: () => void,
};

const ViewSwitch = ({ onGridClick, onListClick }: TProps) => (
  <div className="viewSwitch">
    <button onClick={onGridClick}>
      <FontAwesome name="th-large" />
    </button>
    <button onClick={onListClick}>
      <FontAwesome name="list" />
    </button>
  </div>
);

export default ViewSwitch;
