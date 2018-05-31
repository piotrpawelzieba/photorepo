import axios from 'axios';
import { API_ROOT_URL } from 'store/constants';

export const postCategory = ({ title, isPrivate }) =>
  axios.post(
    `${API_ROOT_URL}/api/categories`,
    {
      title,
      isPrivate,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  );

export const fetchCategories = () =>
  axios.get(`${API_ROOT_URL}/api/categories`);
export const deleteCategory = title =>
  axios.delete(`${API_ROOT_URL}/api/categories/${title}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
