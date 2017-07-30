import { fetchPhotos, updatePhoto, postPhoto } from '../../api'
import {
    GET_PHOTOS,
    UPLOAD_PHOTO,
    ASSIGN_CATEGORY
} from '../../constants';

import {
    getPhotosSuccess,
    getPhotosFailure,
    assignCategorySuccess,
    assignCategoryFailure,
    uploadPhotoFailure,
    uploadPhotoSuccess
} from '../actions/photoActions';

import { toastr } from 'react-redux-toastr';
import {Observable} from 'rxjs';

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
        .map(({ files, category }) => {
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
            debugger;
            return uploadPhotoSuccess({ photos: response });
        })
        .catch(err => {
            toastr.error('Photo upload failure!');
            return Observable.of(uploadPhotoFailure({ err }));
        })
)

export const assignCategory = (action$) => (
    action$
        .filter(({ type }) => type === ASSIGN_CATEGORY)
        .mergeMap(({ id, payload }) => {
            debugger;
            return (
                Observable.forkJoin([Observable.of({ id, payload }), updatePhoto(id, payload)])
            )
            }
        )
        .map(([{ id, payload }, response]) => {
            toastr.success(`Category has been assigned!`)
            return assignCategorySuccess({ id, payload });
        })
        .catch(err => {
            toastr.error(`Asigning category error!`);
            return Observable.of(assignCategoryFailure({ err }));
        })
);


