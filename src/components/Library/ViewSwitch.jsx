import React from 'react';

export default function({onGridClick, onListClick}){
    return (
        <div className="viewSwitch">
            <span onClick={onGridClick}>
                <a className="fa fa-th-large link" ara-hidden="true"></a>
            </span>
            <span onClick={onListClick}>
                <a className="fa fa-list link" ara-hidden="true"></a>
            </span>
        </div>
    );
}