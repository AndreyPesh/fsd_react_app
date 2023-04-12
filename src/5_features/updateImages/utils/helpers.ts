import axios from 'axios';
import { ImageData } from '../types/interfaces';
import { BASE_URL } from '1_app/constants';
import { Dispatch, SetStateAction } from 'react';

export const loadImageByName = (imagesList: ImageData[], setUpdatedImages: Dispatch<SetStateAction<string[]>>) => {
  imagesList.map(async (imageData) => {
    const { data } = await axios.get(BASE_URL + '/' + imageData.name, {
      responseType: 'blob',
    });
    const reader = new FileReader();
    reader.readAsDataURL(data);

    reader.onload = () => {
      const { result } = reader;
      if (result && typeof result === 'string') {
        setUpdatedImages((prevState) => [...prevState, result]);
      }
    };
  });
};
