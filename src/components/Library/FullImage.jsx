import React, {PropTypes} from 'react';
import {API_ROOT_URL} from '../../constants';
import './FullImage.css';

const FullImage = ({image='', onOverlayClick}) => {
    console.log({image});
    return (
            image ? 
            <div className='fullImage'> 
                <div className='overlay' onClick={onOverlayClick}></div> 
                <div className="fullImage__content">
                    <img className="fullImage__img"src={API_ROOT_URL + '/'+ image.url} alt=""/>
                </div>
            </div> : <div/>
        
    );
}

export default FullImage;
