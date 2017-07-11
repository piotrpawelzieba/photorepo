import {
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE,
    ASSIGN_CATEGORY_SUCCESS,
    ASSIGN_CATEGORY_FAILURE,
    UPLOAD_PHOTO_SUCCESS,
    UPLOAD_PHOTO_ERROR
} from '../constants';
import {fetchPhotos, updatePhoto, postPhoto} from  '../api';
import {toastr} from 'react-redux-toastr';

const getPhotosSuccess = (images) => ({
    type: GET_PHOTOS_SUCCESS,
    images
});

const getPhotosFailure = (err) => ({
    type: GET_PHOTOS_FAILURE,
    err
});

export const getPhotos = () => (dispatch) => {
    fetchPhotos()
    .then(({data: photos}) => {
        toastr.success('Fetching images success!');
        dispatch(getPhotosSuccess(photos));
    })
    .catch(err=>{
        toastr.error('Fetching images error!', err.toString());
        dispatch(getPhotosFailure(err));
    });
};

const assignCategorySuccess = (id, payload) => ({
    type: ASSIGN_CATEGORY_SUCCESS,
    id,
    payload
});

const assignCategoryFailure = (err) => ({
    type: ASSIGN_CATEGORY_FAILURE,
    err
});

export const assignCategory = (id, payload) => (dispatch) => {
    updatePhoto(id, payload)
    .then(()=>dispatch(assignCategorySuccess(id, payload)))
    .catch((err)=> dispatch(assignCategoryFailure(err)));
};

const uploadPhotoSuccess = (photos) => ({
    type: UPLOAD_PHOTO_SUCCESS,
    photos
});

const uploadPhotoError = (err) => ({
    type: UPLOAD_PHOTO_ERROR,
    err
});


export const uploadPhoto = (files, category) => (dispatch) => {
    const formData = new FormData();
    
    files
    .forEach(file=>{
        formData.append('file', file);
        formData.append('title', file.name);
    });
    
    formData.append('category', category);

    postPhoto(formData)
    .then(response => {
        dispatch(uploadPhotoSuccess(response));
    })
    .catch(err => {
        dispatch(uploadPhotoError(err));
    });
};