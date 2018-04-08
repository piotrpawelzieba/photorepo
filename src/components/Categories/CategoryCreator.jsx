import FontAwesome from 'react-fontawesome';
import React from 'react';
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
      <li className="categories__item categories__newItem">
        <input
          ref={this.assignInputRef}
          className="categories__input"
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
          <button data-categoryTitle={title} onClick={onAddClick}>
            <FontAwesome name="check" />
          </button>
          <button data-categoryTitle={title} onClick={onCancelClick}>
            <FontAwesome name="times" />
          </button>
        </span>
      </li>
    );
  }
}
export default CategoryCreator;
