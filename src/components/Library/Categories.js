import React from 'react';
import './Categories.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';



const renderCategory = ({title, itemsCount},pos,  onDeleteClick) => (
    <li key={pos+1} className={"categories__item"}>
        <a className={'categories__link'} href={`#${title}`} >{`${title} (${itemsCount})`} </a>  
        <a className="fa fa-trash-o" data-category={title} aria-hidden="true" onClick={onDeleteClick}></a>
    </li>
);

export default ({
        categories, 
        categoryCreator: {
            title="", 
            visible
        },
        setTitle,
        showCategoryCreator,
        onDeleteClick,
        onCancelClick,
        onAddClick
    }) => (
        <div>
            <h2>{'Categories:'}</h2>
            <ul className='categories'>
                <li key={0} className={"categories__item"}>
                    <a className={'categories__link'} href="#newCategory" onClick={showCategoryCreator}>
                        {'New Category'}
                    </a>
                </li>
                {
                    categories.map((category, pos) => renderCategory(category, pos, onDeleteClick))
                }
                { 
                    visible && 
                        <li className={"categories__item categories__newItem"} key={9999}> 
                            <input className="categories__input" type="text" name="newCategory" onChange={setTitle} value={title} />
                            <a className="fa fa-check" data-categoryTitle={title} onClick={onAddClick} aria-hidden="true"></a>
                            <a className="fa fa-times" onClick={onCancelClick} aria-hidden="true"></a>
                        </li>
                }
            </ul>
        </div>
);