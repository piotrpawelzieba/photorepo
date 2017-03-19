import React from 'react';
import Locker from './Locker.jsx';

const CategoryCreator = ({isVisible, title, isPrivate, onChange, onLockClick, onAddClick, onCancelClick}) => (
    <li className={`categories__item categories__newItem ${isVisible ? '' : 'categories__newItem--hidden'}`} key={9999}> 
        <input className="categories__input" type="text" name="newCategory" onChange={onChange} value={title} />
        <span className="categories__icons"> 
            <Locker className={'categories__icon'} isPrivate={isPrivate} onLockClick={onLockClick} />
            <a className="categories__icon fa fa-check" data-categoryTitle={title} onClick={onAddClick} aria-hidden="true"></a>
            <a className="categories__icon fa fa-times" onClick={onCancelClick} aria-hidden="true"></a>
        </span>
    </li>
);

export default CategoryCreator;