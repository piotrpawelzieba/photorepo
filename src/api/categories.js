import axios from 'axios';
import {API_ROOT_URL} from '../constants';


export const fetchCategories = () => axios.get(`${API_ROOT_URL}/api/categories`);
export const deleteCategory = (title) => axios.delete(`${API_ROOT_URL}/api/categories/${title}`, {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});