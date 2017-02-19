import axios from 'axios';
import {API_ROOT_URL} from '../constants';

export const fetchPhotos = () => axios.get(`${API_ROOT_URL}/api/photos`);
export const updatePhoto = (id, payload) => axios.put(`${API_ROOT_URL}/api/photos`, {
        ...payload,
        id 
});