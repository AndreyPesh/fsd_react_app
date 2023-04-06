import axios from 'axios';
import { BASE_URL } from '1_app/constants';
import { URL_CHECK_ADMIN } from './constants';

export const isUserAdmin = async () => {
  try {
    const { data } = await axios.get<{ admin: boolean }>(
      BASE_URL + URL_CHECK_ADMIN,
      {
        withCredentials: true,
      }
    );
    return data.admin;
  } catch {
    console.error('Error check admin');
    return false;
  }
};
