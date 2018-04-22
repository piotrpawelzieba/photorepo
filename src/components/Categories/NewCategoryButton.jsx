import React from 'react';
import FontAwesome from 'react-fontawesome';
import { StyledAddCategoryButton, StyledCategory } from './styled';

type TProps = {
  onNewCategoryClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

const NewCategoryButton = ({ onNewCategoryClick }: TProps) => (
  <StyledCategory>
    <StyledAddCategoryButton onClick={onNewCategoryClick}>
      <FontAwesome name="plus" />
    </StyledAddCategoryButton>
  </StyledCategory>
);

export default NewCategoryButton;
