import React from 'react';
import './Categories.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';



const renderCategory = ({title, count}, removeCategory) => (
    <li className={"categories__item"}>
        <a className={'categories__link'} href={`#${title}`} >{`${title} (${count})`} </a>  
        <a className="fa fa-trash-o" data-category={title} aria-hidden="true" onClick={removeCategory}></a>
    </li>
);

export default ({categories, removeCategory}) => (
    <div>
        <h2>{'Categories:'}</h2>
        <ul className='categories'>{categories.map((category) => renderCategory(category, removeCategory))}</ul>
    </div>
);