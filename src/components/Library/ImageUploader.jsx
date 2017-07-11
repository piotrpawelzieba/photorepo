import React, {PropTypes} from 'react';
import {API_ROOT_URL} from '../../constants';
import './ImageUploader.css';

const ImageUploader = ({image, onOverlayClick}) => {
let [img] = image; 
    return (
            image ? 
            <form className='uploadForm'> 
                <div className='overlay' onClick={onOverlayClick}></div> 
                <div className="uploader__wrapper">
                    <div className="uploader__imgContainer">
                        <img className="uploader__img" src={img.preview} alt=""/>
                    </div>
                    <div className="uploader__userinputs">               
                    </div>
                </div>
            </form> : <div/>
        
    );
}

export default ImageUploader;
