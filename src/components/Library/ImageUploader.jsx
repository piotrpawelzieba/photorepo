import React from 'react';
import './ImageUploader.css';

type TProps = {
  image: TImage,
};

const ImageUploader = ({ image }: TProps) => {
  const [img] = image;
  return image ? (
    <form className="uploadForm">
      <div className="uploader__wrapper">
        <div className="uploader__imgContainer">
          <img className="uploader__img" src={img.preview} alt="" />
        </div>
        <div className="uploader__userinputs" />
      </div>
    </form>
  ) : (
    <div />
  );
};

export default ImageUploader;
