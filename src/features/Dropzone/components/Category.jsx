// @flow
import React from 'react';
import { StyledDropzoneCategory } from './styled';

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
};

const Category = ({ category }: TProps) => (
  <StyledDropzoneCategory
    data-category={category.title}
    onDragEnter={onDragEnter}
    onDragLeave={onDragLeave}
  >
    <div>{category.title}</div>
  </StyledDropzoneCategory>
);
export default Category;
