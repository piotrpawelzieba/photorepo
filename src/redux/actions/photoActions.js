import {
    GET_PHOTOS,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE,
    ASSIGN_CATEGORY,
    ASSIGN_CATEGORY_SUCCESS,
    ASSIGN_CATEGORY_FAILURE,
    UPLOAD_PHOTO,
    UPLOAD_PHOTO_SUCCESS,
    UPLOAD_PHOTO_FAILURE,
    DELETE_PHOTO,
    DELETE_PHOTO_SUCCESS,
    DELETE_PHOTO_FAILURE
} from '../../constants';
import { fetchPhotos, updatePhoto, postPhoto } from '../../api';
import { toastr } from 'react-redux-toastr';
import { createActionCreator } from './utils';

export const getPhotos = createActionCreator(GET_PHOTOS);
export const getPhotosSuccess = createActionCreator(GET_PHOTOS_SUCCESS);
export const getPhotosFailure = createActionCreator(GET_PHOTOS_FAILURE);

export const assignCategory = createActionCreator(ASSIGN_CATEGORY);
export const assignCategorySuccess = createActionCreator(ASSIGN_CATEGORY_SUCCESS);
export const assignCategoryFailure = createActionCreator(ASSIGN_CATEGORY_FAILURE);

export const uploadPhoto = createActionCreator(UPLOAD_PHOTO);
export const uploadPhotoSuccess = createActionCreator(UPLOAD_PHOTO_SUCCESS);
export const uploadPhotoFailure = createActionCreator(UPLOAD_PHOTO_FAILURE);

export const deletePhoto = createActionCreator(DELETE_PHOTO);
export const deletePhotoSuccess = createActionCreator(DELETE_PHOTO_SUCCESS);
export const deletePhotoFailure = createActionCreator(DELETE_PHOTO_FAILURE);