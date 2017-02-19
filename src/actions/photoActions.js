import {
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE,
    ASSIGN_CATEGORY_SUCCESS,
    ASSIGN_CATEGORY_FAILURE
} from '../constants';
import {fetchPhotos, updatePhoto} from  '../api';
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
        console.log(err);
        toastr.error('Fetching images error!', err.toString());
        dispatch(getPhotosFailure(err));
    });
}

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
    console.log('assign category', {id, payload})
    updatePhoto(id, payload)
    .then(()=>dispatch(assignCategorySuccess(id, payload)))
    .catch((err)=> dispatch(assignCategoryFailure(err)));
};
