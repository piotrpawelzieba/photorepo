import React from 'react';
const renderGridItem = ({url}) => (
    <img src={'http://localhost:3090/'+
    url} className="gridview__item" />
) 

export default ({images}) => {
    
    return (
        <div>
            {images.map(renderGridItem)}
        </div>
    )
};