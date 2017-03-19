import React from 'react'

const NewCategoryButton = ({onNewCategoryClick}) => {
    return(
        <li key={0} className={"categories__item"} >
            <a className={'categories__link'} href="#newCategory" onClick={onNewCategoryClick}>
                {'New Category'}
            </a>
        </li>
    )
}
export default NewCategoryButton