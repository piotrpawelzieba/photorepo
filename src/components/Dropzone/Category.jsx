// @flow
import React from 'react';

const onDragEnter = (event: SyntheticEvent<HTMLButtonElement>) => {
  // eslint-disable-next-line
  event.currentTarget.className =
    'dropzone__category dropzone__category--hover';
};

const onDragLeave = (event: SyntheticEvent<HTMLButtonElement>) => {
  // eslint-disable-next-line
  event.currentTarget.className = 'dropzone__category';
};

type TProps = {
  category: TCategory,
  className: string,
};

const Category = ({ category, className }: TProps) => (
  <li
    data-category={category.title}
    className={className}
    onDragEnter={onDragEnter}
    onDragLeave={onDragLeave}
  >
    {category.title}
  </li>
);
export default Category;
