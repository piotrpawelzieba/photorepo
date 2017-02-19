import React from 'react';

export default function({isPrivate, onLockClick, className}) {
    if(isPrivate){
        return <a className={className + " fa fa-lock"} onClick={onLockClick} aria-hidden="true"></a>;
    } else {
        return <a className={className + " fa fa-unlock"} onClick={onLockClick} aria-hidden="true"></a>;
    }
}