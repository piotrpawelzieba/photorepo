import React from 'react';

type TProps = {
  onNewCategoryClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

const NewCategoryButton = ({ onNewCategoryClick }: TProps) => (
  <li className="categories__item">
    <button className="categories__button" onClick={onNewCategoryClick}>
      {'New Category'}
    </button>
  </li>
);

export default NewCategoryButton;
