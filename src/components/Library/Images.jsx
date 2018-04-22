// @flow
import React from 'react';
import './Images.css';
import Image from './Image';

type TProps = {
  images: Array<TImage>,
  onDrop: () => void,
  listview: boolean,
  onImageClick: () => void,
  onDeleteClick: () => void,
};
const renderItem = props => ({ _id, url, category }: TImage) => (
  <Image key={_id} id={_id} category={category} url={url} {...props} />
);

const Images = ({
  images,
  onDrop,
  listview,
  onImageClick,
  onDeleteClick,
}: TProps) => (
  <div>
    {images.map(renderItem({ onDrop, onImageClick, onDeleteClick, listview }))}
  </div>
);

export default Images;
