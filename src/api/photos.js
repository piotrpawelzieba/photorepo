// @flow
import axios from 'axios';
import { API_ROOT_URL } from './utils';

export const fetchPhotos = () => axios.get(`${API_ROOT_URL}/api/photos`);
export const updatePhoto = (id: number, payload: *) =>
  axios.put(`${API_ROOT_URL}/api/photos`, {
    ...payload,
    id,
  });

export const postPhoto = (payload: *) =>
  axios.post(`${API_ROOT_URL}/api/photos`, payload);
export const deletePhoto = (id: number) =>
  axios.delete(`${API_ROOT_URL}/api/photos/${id}`);
