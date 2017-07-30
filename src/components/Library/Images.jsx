import React from 'react';
import './Images.css';
import Image from  './Image.jsx';

const renderListItem = ({_id, url, category}, pos, onDrop, className, onImageClick, onDeleteClick) => (
<Image 
    key={pos} 
    id={_id} 
    category={category} 
    url={url} 
    onDrop={onDrop} 
    className={className} 
    onImageClick={onImageClick} 
    onDeleteClick={onDeleteClick}
/>
);

const Images = ({images, onDrop, listview, onImageClick, onDeleteClick}) => {  
   const itemClass = listview ? 'listview__item' : 'gridview__item'; 
   const wrapperClass = listview ? 'listview' : 'gridview'; 
   
   return  (
        <div className={'images ' + wrapperClass}>
            {images.map((image, pos)=>renderListItem(image,pos, onDrop, itemClass, onImageClick, onDeleteClick))}
        </div>
    );
}

export default Images;