import axios from 'axios';
import {API_ROOT_URL} from '../constants';

export const fetchPhotos = () => axios.get(`${API_ROOT_URL}/api/photos`);