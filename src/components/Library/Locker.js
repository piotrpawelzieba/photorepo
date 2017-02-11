import React from 'react';

export default function({isPrivate, onLockClick}) {
    if(isPrivate){
        return <a className="fa fa-lock" onClick={onLockClick} aria-hidden="true"></a>;
    } else {
        return <a className="fa fa-unlock" onClick={onLockClick} aria-hidden="true"></a>;
    }
}