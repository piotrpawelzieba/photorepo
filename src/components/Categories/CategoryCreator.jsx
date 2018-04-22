import FontAwesome from 'react-fontawesome';
import React from 'react';
import { Button } from 'shared/styled';
import { StyledNewCategory, StyledCategoryInput } from './styled';
import Locker from './Locker';

type TProps = {
  title: string,
  isPrivate: boolean,
  onChange: () => void,
  onLockClick: () => void,
  onAddClick: () => void,
  onCancelClick: () => void,
};

class CategoryCreator extends React.Component<TProps> {
  componentDidMount() {
    if (this.categoryCreator) {
      this.categoryCreator.focus();
    }
  }
  categoryCreator: ?HTMLInputElement;
  assignInputRef = input => {
    this.categoryCreator = input;
  };

  render() {
    const {
      title,
      isPrivate,
      onChange,
      onLockClick,
      onAddClick,
      onCancelClick,
    } = this.props;

    return (
      <StyledNewCategory>
        <StyledCategoryInput
          innerRef={this.assignInputRef}
          type="text"
          name="newCategory"
          onChange={onChange}
          value={title}
        />
        <span className="categories__icons">
          <Locker
            className="categories__icon"
            isPrivate={isPrivate}
            onLockClick={onLockClick}
          />
          <Button data-categoryTitle={title} onClick={onAddClick}>
            <FontAwesome name="check" />
          </Button>
          <Button data-categoryTitle={title} onClick={onCancelClick}>
            <FontAwesome name="times" />
          </Button>
        </span>
      </StyledNewCategory>
    );
  }
}
export default CategoryCreator;
