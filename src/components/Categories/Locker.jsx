import React, {PropTypes} from 'react';

const Locker = (props) => {
    const {isPrivate, onLockClick, className} = props;

    if(isPrivate){
        return <a className={className + " fa fa-lock"} onClick={onLockClick} aria-hidden="true"/>;
    } else {
        return <a className={className + " fa fa-unlock"} onClick={onLockClick} aria-hidden="true"/>;
    }
};

Locker.propTypes = {
    isPrivate: PropTypes.bool.isRequired,
    onLockClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
};

export default Locker;