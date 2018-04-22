import * as React from 'react';
import { API_ROOT_URL } from 'store/constants';
import './FullImage.css';

type TProps = {
  image: TImage,
  onOverlayClick: () => void,
};
const FullImage = ({ image, onOverlayClick }: TProps) => (
  <div className="fullImage">
    <button className="overlay" onClick={onOverlayClick} />
    <div className="fullImage__content">
      <img
        className="fullImage__img"
        src={`${API_ROOT_URL}/${image.url}`}
        alt=""
      />
    </div>
  </div>
);

export default FullImage;
