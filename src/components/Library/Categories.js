import React from 'react';
import './Categories.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import Locker from './Locker';
import Category from './Category.jsx';

const renderExistingCategories = (
    categories, 
    onDeleteClick, 
    onCategoryClick, 
    onDrop
    ) => categories.map(
        (category, pos) => <Category 
                                category={category} 
                                key={pos} 
                                onDeleteClick={onDeleteClick} 
                                onCategoryClick={onCategoryClick}
                                onDrop={onDrop} />);

const renderNewCategoryButton = (showCategoryCreator) => (
    <li key={0} className={"categories__item"} >
        <a className={'categories__link'} href="#newCategory" onClick={showCategoryCreator}>
            {'New Category'}
        </a>
    </li>
);

const renderNewCategoryCreator = (categoryCreator, setTitle, onLockClick, onAddClick, onCancelClick) => (
    <li className={"categories__item categories__newItem"} key={9999}> 
        <input className="categories__input" type="text" name="newCategory" onChange={setTitle} value={categoryCreator.title} />
        <span className="categories__icons"> 
            <Locker className={'categories__icon'} isPrivate={categoryCreator.isPrivate} onLockClick={onLockClick} />
            <a className="categories__icon fa fa-check" data-categoryTitle={categoryCreator.title} onClick={onAddClick} aria-hidden="true"></a>
            <a className="categories__icon fa fa-times" onClick={onCancelClick} aria-hidden="true"></a>
        </span>
    </li>
)

const addCount = () => {
    console.log('Add count!');
}

export default ({
        categories, 
        categoryCreator,
        setTitle,
        showCategoryCreator,
        onDeleteClick,
        onCategoryClick,
        onCancelClick,
        onAddClick,
        onLockClick,
        onDrop

    }) => (
        <div>
            <h2>{'Categories:'}</h2>
            <ul className='categories'>
                    { renderNewCategoryButton(showCategoryCreator, ) }
                    { renderExistingCategories(categories, onDeleteClick, onCategoryClick, onDrop)}
                    { categoryCreator.visible && renderNewCategoryCreator(categoryCreator, setTitle, onLockClick, onAddClick, onCancelClick) }                           
            </ul>
        </div>
);