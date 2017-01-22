import {
    FETCH_PHOTOS,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE
} from '../constants';
import {getPhotos} from  '../api';
import {toastr} from 'react-redux-toastr';

const fetchPhotosSuccess = (images) => ({
    type: FETCH_PHOTOS_SUCCESS,
    images
});

const fetchPhotosFailure = (err) => ({
    type: FETCH_PHOTOS_FAILURE,
    err
});

export const fetchPhotos = () => (dispatch) => {
    getPhotos()
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        toastr.success('Fetching Success!');
        dispatch(fetchPhotosSuccess(response));
    })
    .catch(err=>{
        console.log(err);
        toastr.error('Fetching Error', err.toString());
        dispatch(fetchPhotosFailure(err));
    });
}
