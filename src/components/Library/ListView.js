import React from 'react';
import './listview.css';
import ListItem from  './ListItem.jsx';



const renderListItem = ({_id, url, category}, pos, onDrop) => (<ListItem key={pos} id={_id} category={category} url={url} onDrop={onDrop} className={"listview__item"}/>);
console.log(renderListItem);

let Images = ({images, onDrop}) => (
    <div>
        {images.map((image, pos)=>renderListItem(image,pos, onDrop))}
    </div>
);



console.log({Images});
export default Images;