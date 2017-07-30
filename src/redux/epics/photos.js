import { fetchPhotos, updatePhoto, postPhoto, deletePhoto as delPhoto } from '../../api'
import {
    GET_PHOTOS,
    UPLOAD_PHOTO,
    ASSIGN_CATEGORY,
    DELETE_PHOTO
} from '../../constants';

import {
    getPhotosSuccess,
    getPhotosFailure,
    assignCategorySuccess,
    assignCategoryFailure,
    uploadPhotoFailure,
    uploadPhotoSuccess,
    deletePhotoFailure,
    deletePhotoSuccess
} from '../actions/photoActions';



import { toastr } from 'react-redux-toastr';
import { Observable } from 'rxjs';

export const getPhotos = action$ => (
    action$
        .filter(action => action.type === GET_PHOTOS)
        .mergeMap(() => fetchPhotos())
        .map(({ data }) => {
            toastr.success('Fetching categories success!!!');
            return getPhotosSuccess({ images: data })
        })
        .catch((err) => {
            toastr.error('Fetching categories error!');
            return Observable.of(getPhotosFailure({ err: err }));
        })
);

export const uploadPhoto = (action$) => (
    action$
        .filter(({ type }) => type === UPLOAD_PHOTO)
        .mergeMap(({ files, category }) => {
            const formData = new FormData();
            files
                .forEach(file => {
                    formData.append('file', file);
                    formData.append('title', file.name);
                });

            formData.append('category', category);
            return postPhoto(formData);
        })
        .map(response => {
            toastr.success('Photo has been succesfully uploaded!');
            return uploadPhotoSuccess({ photos: response.data });
        })
        .catch(err => {
            toastr.error('Photo upload failure!');
            return Observable.of(uploadPhotoFailure({ err }));
        })
)

export const assignCategory = (action$) => (
    action$
        .filter(({ type }) => type === ASSIGN_CATEGORY)
        .mergeMap(({ id, payload }) => (
            Observable.forkJoin([Observable.of({ id, payload }), updatePhoto(id, payload)])
        ))
        .map(([{ id, payload }, response]) => {
            toastr.success(`Category has been assigned!`)
            return assignCategorySuccess({ id, payload });
        })
        .catch(err => {
            toastr.error(`Asigning category error!`);
            return Observable.of(assignCategoryFailure({ err }));
        })
);


export const deletePhoto = (action$) => (
    action$
        .filter(({ type }) => type === DELETE_PHOTO)
        .mergeMap(({ id }) => (
            Observable.forkJoin([Observable.of(id), delPhoto(id)])
        ))
        .map(([id]) => {
            toastr.success(`Photo has been successufully deleted!`)
            return deletePhotoSuccess({ id });
        })
        .catch(err => {
            toastr.error(`Deleteng photo error!`);
            return Observable.of(deletePhotoFailure({ err }));
        })
);


