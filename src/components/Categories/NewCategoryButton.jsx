import React from 'react';
import FontAwesome from 'react-fontawesome';

type TProps = {
  onNewCategoryClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

const NewCategoryButton = ({ onNewCategoryClick }: TProps) => (
  <li className="categories__item">
    <button className="categories__add-button" onClick={onNewCategoryClick}>
      <FontAwesome name="plus" />
    </button>
  </li>
);

export default NewCategoryButton;
