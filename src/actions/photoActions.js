import {
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE
} from '../constants';
import {fetchPhotos} from  '../api';
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
