import React from 'react';
import './Images.css';
import Image from './Image';

const renderListItem = (onDrop, className, onImageClick, onDeleteClick) => (
  { _id, url, category }: TImage,
  pos,
) => (
  <Image
    key={pos}
    id={_id}
    category={category}
    url={url}
    onDrop={onDrop}
    className={className}
    onImageClick={onImageClick}
    onDeleteClick={onDeleteClick}
  />
);

type TProps = {
  images: Array<TImage>,
  onDrop: () => void,
  listview: boolean,
  onImageClick: () => void,
  onDeleteClick: () => void,
};

const Images = ({
  images,
  onDrop,
  listview,
  onImageClick,
  onDeleteClick,
}: TProps) => {
  const itemClass = listview ? 'listview__item' : 'gridview__item';
  const wrapperClass = listview ? 'listview' : 'gridview';

  return (
    <div className={`images ${wrapperClass}`}>
      {images.map(
        renderListItem(onDrop, itemClass, onImageClick, onDeleteClick),
      )}
    </div>
  );
};

export default Images;
