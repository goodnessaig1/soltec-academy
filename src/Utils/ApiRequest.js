/* eslint-disable no-unused-vars */
import axios from 'axios';
import { BaseURL } from './BaseUrl';
import Cookies from 'js-cookie';

const token = `${Cookies.get('access_token')}`;

const defaultHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export async function apiRequest(method, path, data, headers = defaultHeaders) {
  try {
    let url = `${BaseURL}${path}`;
    const request = await axios({
      method: method,
      url: url,
      data: data,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return request;
  } catch (error) {
    throw new Error(error);
  }
}

export const uploadFile = async (formData, setLoading) => {
  const url = 'https://academy-wo2r.onrender.com/api/v1/courses/upload_file/';

  setLoading(true);

  const config = {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    setLoading(false);
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    setLoading(false);
    throw error;
  }
};
