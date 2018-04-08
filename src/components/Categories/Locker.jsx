// @flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';

type TProps = {
  isPrivate: boolean,
  onLockClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
  className: string,
};

const Locker = (props: TProps) => {
  const { isPrivate, onLockClick, className } = props;
  const icon = isPrivate ? 'lock' : 'unlock';
  return (
    <React.Fragment>
      <button className={className} onClick={onLockClick}>
        <FontAwesome name={icon} />
      </button>
    </React.Fragment>
  );
};

export default Locker;
