import React from 'react'

const onDragEnter = (ev) => {
    ev.target.className = "dropzone__category dropzone__category--hover";
}

const onDragLeave = (ev) => {
    ev.target.className = "dropzone__category";
}

const Category = ({key, category: {title}, className}) => {
    return(
        <li 
            data-category={title}
            className={className} 
            key={key} 
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            
        > 
            {title} 
        </li>
    )
}
export default Category