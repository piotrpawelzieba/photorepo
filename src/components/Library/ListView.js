import React from 'react';
import './listview.css';
const renderListItem = ({url}) => (
    <img src={`http://localhost:3090/${url}`} className="listview__item" />
) 

export default ({images}) => (
    <div>
        {images.map(renderListItem)}
    </div>
);